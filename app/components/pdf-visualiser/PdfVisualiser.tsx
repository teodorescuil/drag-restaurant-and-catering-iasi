'use client';

import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useIsMobile from "../../helpers/hooks/useIsMobile";

type FlipBookInstance = {
  pageFlip: () => {
    flipPrev: () => void;
    flipNext: () => void;
  };
};

export default function PdfVisualiser({ pdfUrl, widthOfPdf = 600, numberOfPages }: { pdfUrl: string; widthOfPdf?: number, numberOfPages?: number }) {
  const flipBookRef = useRef<FlipBookInstance | null>(null);
  const [pages, setPages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  // const [numPages, setNumPages] = useState(0);
  const [viewportHeight, setViewportHeight] = useState<number>(0);
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (typeof window === "undefined") return;

    setViewportHeight(window.innerHeight);
    setViewportWidth(window.innerWidth);

    const loadPDFJS = async () => {
      setIsLoading(true);
      setProgress(0);

      const pdfjsLib = await import("pdfjs-dist/build/pdf");

      // ✅ setăm workerul manual, fără ?url
      (pdfjsLib as any).GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";// eslint-disable-line @typescript-eslint/no-explicit-any


      const pdf = await (pdfjsLib as any).getDocument(pdfUrl).promise;// eslint-disable-line @typescript-eslint/no-explicit-any
      // setNumPages(pdf.numPages);

      const scale = 2.0;
      const loadedPages: string[] = [];

      for (let i = 0; i < pdf.numPages; i++) {
        const page = await pdf.getPage(i + 1);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        if (context) {
          await page.render({ canvasContext: context, viewport }).promise;
          loadedPages[i] = canvas.toDataURL("image/png");
        }
        setProgress(i + 1);
      }

      setPages(loadedPages);
      setIsLoading(false);
    };

    loadPDFJS().catch(console.error);
  }, [pdfUrl]);

  const handlePrev = () => flipBookRef.current?.pageFlip().flipPrev();
  const handleNext = () => flipBookRef.current?.pageFlip().flipNext();

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-[40vh] w-full gap-4">
          <div className="w-full max-w-xs bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-blue-500 h-4 rounded-full transition-all"
              style={{
                width: numberOfPages ? `${Math.round((progress / numberOfPages) * 100)}%` : "0%",
              }}
            />
          </div>
          <div className="text-base text-gray-700">
            Se încarcă PDF-ul… {progress} / {numberOfPages} pagini
          </div>
        </div>
      ) : (
        <div className="relative text-center">
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-expect-error */}
          <HTMLFlipBook
            ref={flipBookRef}
            width={isMobile ? viewportWidth * 0.9 : widthOfPdf}
            height={isMobile ? viewportHeight * 0.6 : viewportHeight * 0.9}
            showCover
            drawShadow
          >
            {pages.map((page, index) => (
              <div key={index}>
                <Image
                  src={page}
                  alt={`Page ${index + 1}`}
                  width={isMobile ? viewportWidth * 0.9 : 600}
                  height={isMobile ? viewportHeight * 0.6 : viewportHeight * 0.9}
                  unoptimized
                  style={{ width: "100%", height: "100%" }}
                  priority={index < 2}
                />
              </div>
            ))}
          </HTMLFlipBook>

          <>
            <button
              onClick={handlePrev}
              className={`absolute top-1/2 transform -translate-y-1/2 bg-transparent cursor-pointer ${
                isMobile ? "-left-6" : "-left-50"
              }`}
              style={{ zIndex: 10 }}
            >
              <ChevronLeft className="w-8 h-8 text-gray-800 hover:text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className={`absolute top-1/2 transform -translate-y-1/2 bg-transparent cursor-pointer ${
                isMobile ? "-right-6" : "-right-50"
              }`}
              style={{ zIndex: 10 }}
            >
              <ChevronRight className="w-8 h-8 text-gray-800 hover:text-gray-600" />
            </button>
          </>
        </div>
      )}
    </>
  );
}

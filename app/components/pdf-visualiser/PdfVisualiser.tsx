'use client';

import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useIsMobile from "@/app/helpers/hooks/useIsMobile";

type FlipBookInstance = {
  pageFlip: () => {
    flipPrev: () => void;
    flipNext: () => void;
  };
};

export default function PdfVisualiser({ pdfUrl, widthOfPdf = 600 }: { pdfUrl: string, widthOfPdf?: number }) {
  const flipBookRef = useRef<FlipBookInstance | null>(null);

  const [pages, setPages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [viewportHeight, setViewportHeight] = useState<number>(0);
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    setViewportHeight(window.innerHeight);
    setViewportWidth(window.innerWidth);

    if (typeof window === "undefined") return;

    const loadPDFJS = async () => {
      setIsLoading(true);
      setProgress(0);

      const pdfjsLib = await import("pdfjs-dist");
      const worker = new Worker(
        new URL("pdfjs-dist/build/pdf.worker.mjs", import.meta.url),
        { type: "module" }
      );
      pdfjsLib.GlobalWorkerOptions.workerPort = worker;

      const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
      setNumPages(pdf.numPages);

      // CLARITATE MAXIMĂ: scale mare!
      const scale = 2.0; // Poți urca și mai mult dacă vrei

      const loadedPages: string[] = [];

      for (let i = 0; i < pdf.numPages; i++) {
        const page = await pdf.getPage(i + 1);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        if (context) {
          await page.render({ canvasContext: context, canvas, viewport }).promise;
          loadedPages[i] = canvas.toDataURL("image/png"); // PNG = claritate fără pierdere
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
                width: numPages
                  ? `${Math.round((progress / numPages) * 100)}%`
                  : "0%",
              }}
            />
          </div>
          <div className="text-base text-gray-700">
            Se încarcă PDF-ul… {progress} / {numPages} pagini
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
            showCover={true}
            drawShadow={true}
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
                  priority={index < 2} // primele pagini prioritizează încărcarea
                />
              </div>
            ))}
          </HTMLFlipBook>
            <>
              <button
                onClick={handlePrev}
                className={`absolute top-1/2 transform -translate-y-1/2 bg-transparent ${isMobile ? '-left-6' : '-left-50'}`}
                style={{ zIndex: 10 }}
              >
                <ChevronLeft className="w-8 h-8 text-gray-800 hover:text-gray-600" />
              </button>
              <button
                onClick={handleNext}
                className={`absolute top-1/2 transform -translate-y-1/2 bg-transparent ${isMobile ? '-right-6' : '-right-50'}`}
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

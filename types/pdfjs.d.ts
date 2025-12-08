declare module 'pdfjs-dist/build/pdf';
declare module 'pdfjs-dist/build/pdf.worker.mjs';

declare module 'pdfjs-dist/build/pdf.worker.mjs?url' {
  const workerSrc: string;
  export default workerSrc;
}

declare module 'pdfjs-dist/legacy/build/pdf.worker.mjs';
declare module 'pdfjs-dist/legacy/build/pdf.worker.mjs?url' {
  const workerSrc: string;
  export default workerSrc;
}

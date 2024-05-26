"use client";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function JournalDisplay({ path }: { path: string }) {
	// number of pages in pdf
	const [numPages, setNumPages] = useState<number>(1);
	const onload = ({ numPages }: { numPages: number }) => {
		setNumPages(numPages);
	};

	// use react-pdf to render the pages of the pdf
	const renderPDFPages = (path: string) => {
		const pages = [];
		for (let i = 1; i <= numPages; i++) {
			pages.push(
				<div key={i} className="demoPage bg-white text-black">
					<Document file={path} onLoadSuccess={onload}>
						<Page pageNumber={i} renderTextLayer={false} />
					</Document>
				</div>
			);
		}
		return pages;
	};

	// use HTMLFlipBook to display rendered pdf as a flipbook
	return (
		<div>
			<div className="z-10 py-[10rem] bg-black">
				<HTMLFlipBook
					width={600}
					height={850}
					showCover={true}
					className="m-auto"
					style={{ color: "black" }}
					startPage={0}
					size={"fixed"}
					minWidth={0}
					maxWidth={1000}
					minHeight={0}
					maxHeight={1000}
					drawShadow={true}
					flippingTime={1000}
					usePortrait={false}
					startZIndex={0}
					autoSize={true}
					maxShadowOpacity={1}
					mobileScrollSupport={false}
					clickEventForward={true}
					useMouseEvents={true}
					swipeDistance={30}
					showPageCorners={true}
					disableFlipByClick={false}>
					{renderPDFPages(path)}
				</HTMLFlipBook>
			</div>
		</div>
	);
}

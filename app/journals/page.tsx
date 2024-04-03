"use client";
import JournalDisplay from "@/components/journal-display";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Journals() {
	const [numPages, setNumPages] = useState<number>(1);

	const path = "/zombayes.pdf";

	const onload = ({ numPages }: { numPages: number }) => {
		setNumPages(numPages);
	};

	const renderPDFPages = () => {
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

	return (
		<div>
			<title>Journals</title>
			<main>
				<h1 className="subtitle">All Journals</h1>
				<div className="book">
					<HTMLFlipBook width={600} height={850} showCover={true} className="m-auto">
						{renderPDFPages()}
					</HTMLFlipBook>
				</div>
				<JournalDisplay />
			</main>
		</div>
	);
}

"use client";
import ArticleDisplay from "@/components/article-display";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { Journal } from "@/types";
import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";
import useSWR from "swr";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Journals() {
	const [numPages, setNumPages] = useState<number>(1);

	// const path = "/zombayes.pdf";

	const onload = ({ numPages }: { numPages: number }) => {
		setNumPages(numPages);
	};

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

	const { data, error } = useSWR("/api/journal", (url: string) => fetch(url).then((res) => res.json()));
	console.log("logging journalsData");
	console.log(data);
	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	const journals = data;

	return (
		<div>
			<title>Journals</title>
			<main>
				<h1 className="subtitle">All Journals</h1>
				<div>
					{journals.map((journal: Journal, i: number) => (
						<div key={i}>
							<p>{journal.issue}</p>
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
								{renderPDFPages(journal.path)}
							</HTMLFlipBook>
						</div>
					))}
				</div>
				<ArticleDisplay />
			</main>
		</div>
	);
}

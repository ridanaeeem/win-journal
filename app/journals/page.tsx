"use client";
import JournalDisplay from "@/components/journal-display";
import HTMLFlipBook from "react-pageflip";
import testPage from "@/public/testPage.png";
import Image from "next/image";

export default function Journals() {
	return (
		<div>
			<title>Journals</title>
			<main>
				<h1 className="subtitle">All Journals</h1>
				<div className="book">
					<HTMLFlipBook width={450} height={645} showCover={true} className="m-auto">
						<div className="demoPage bg-white text-black">
							<Image src={testPage} alt="WIN logo" layout={"responsive"} />
						</div>
						<div className="demoPage bg-white text-black">
							<Image src={testPage} alt="WIN logo" layout={"responsive"} />
						</div>
						<div className="demoPage bg-white text-black">
							<Image src={testPage} alt="WIN logo" layout={"responsive"} />
						</div>
						<div className="demoPage bg-white text-black">
							<Image src={testPage} alt="WIN logo" layout={"responsive"} />
						</div>
						<div className="demoPage bg-white text-black">
							<Image src={testPage} alt="WIN logo" layout={"responsive"} />
						</div>
						<div className="demoPage bg-white text-black">
							<Image src={testPage} alt="WIN logo" layout={"responsive"} />
						</div>
					</HTMLFlipBook>
				</div>
				<JournalDisplay />
			</main>
		</div>
	);
}

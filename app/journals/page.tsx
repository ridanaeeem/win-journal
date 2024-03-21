"use client";
import JournalDisplay from "@/components/journal-display";

export default function Journals() {
	return (
		<div>
			<title>Journals</title>
			<main>
				<h1 className="subtitle">All Journals</h1>
				<div>
					<div className="w-full h-[75vh]">
						<iframe
							src="https://publuu.com/flip-book/430276/971857/page/1?embed&transparent"
							width="100%"
							height="100%"
							scrolling="no"
							allow="clipboard-write"></iframe>
					</div>
				</div>
				<JournalDisplay />
			</main>
		</div>
	);
}

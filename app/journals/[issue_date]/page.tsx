import type { Journal } from "@/types";
import JournalDisplay from "@/components/journal-display";
import ArticleDisplay from "@/components/article-display";

// the dates of currently published issues - automate this
export async function generateStaticParams() {
	const journals = await fetch("https://win-journal.vercel.app/api/journal").then((res) => res.json());
	var issues = [];
	for (var i = 0; i < journals.length; i++) {
		issues.push({ issue_date: journals[i].issue_date });
	}
	// format
	// [{ issue_date: "spring-2024" }, { issue_date: "fall-2025" }];
	return issues;
}

// gets the journal with the correct issue date
async function getJournal(params: { issue_date: string }) {
	const journals = await fetch("https://win-journal.vercel.app/api/journal").then((res) => res.json());

	// find the journal with the correct issue date
	return journals.find((journal: Journal) => journal.issue_date === params.issue_date);
}
// displays the journal with the specified issue date of that page
// inputs from generateStaticParams()
export default async function Journal({ params }: { params: { issue_date: any } }) {
	const journal = await getJournal(params);
	const issueDate = journal.issue_date
		.split("-")
		.map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
	return (
		<div>
			<title>{issueDate}</title>
			<main className="min-h-screen">
				<div className="subtitle">
					Issue {journal.issue}: {issueDate}
				</div>
				<JournalDisplay path={journal.path} />
				<ArticleDisplay issueDate={journal.issue_date} />
			</main>
		</div>
	);
}

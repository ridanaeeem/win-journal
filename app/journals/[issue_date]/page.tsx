import { Journal } from "@/types";
import JournalDisplay from "@/components/journal-display";

// the dates of currently published issues - automate this
export async function generateStaticParams() {
	return [{ issue_date: "spring-2024" }, { issue_date: "fall-2025" }];
}

// gets the journal with the correct issue date
async function getJournal(params: { issue_date: string }) {
	// console.log("params");
	// console.log(params);
	const journals = await fetch("https://win-journal.vercel.app/api/journal").then((res) => res.json());
	// console.log("pls work journals");
	// console.log(journals);

	// find the journal with the correct issue number
	// console.log(journals.find((journal: Journal) => journal.issue === params.issue));
	// console.log(params.issue);
	// console.log(journals[Number(params.issue)]);
	return journals.find((journal: Journal) => journal.issue_date === params.issue_date);
}
// displays the journal with the specified issue date of that page
export default async function Journal({ params }: { params: { issue_date: any } }) {
	const journal = await getJournal(params);

	return (
		<div>
			{journal.issue}
			{journal.issue_date}
			{journal.path}
			<JournalDisplay path={journal.path} />
		</div>
	);
}

import { Journal } from "@/types";
import JournalDisplay from "@/components/journal-display";

// the currently published issues - automate this
export async function generateStaticParams() {
	return [{ issue: "0" }, { issue: "1" }];
}

// gets the journal with the correct issue number
async function getJournal(params: { issue: any }) {
	// console.log("params");
	// console.log(params);
	const journals = await fetch("https://win-journal.vercel.app/api/journal").then((res) => res.json());
	// console.log("pls work journals");
	// console.log(journals);

	// find the journal with the correct issue number
	// console.log(journals.find((journal: Journal) => journal.issue === params.issue));
	// console.log(params.issue);
	// console.log(journals[Number(params.issue)]);
	return journals[Number(params.issue)];
}
// displays the journal with the specified issue number of that page
export default async function Journal({ params }: { params: { issue: any } }) {
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

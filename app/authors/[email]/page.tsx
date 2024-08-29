import { Author } from "@/types";

// the dates of currently published emails - automate this
export async function generateStaticParams() {
	const authors = await fetch("https://win-journal.vercel.app/api/authors").then((res) => res.json());
	const emails = authors.map((author: Author) => ({ email: author.email.slice(0, -7) }));

	// format expected output as array of objects
	// [{ email: "author1" }, { email: "author2" }];
	return emails;
}

// gets the author with the correct email
async function getAuthor(params: { email: string }) {
	const authors = await fetch("https://win-journal.vercel.app/api/authors").then((res) => res.json());

	// Find the author with the correct email
	return authors.find((author: Author) => author.email === params.email + "@bu.edu");
}

// displays the journal with the specified issue date of that page
// inputs from generateStaticParams()
export default async function Journal({ params }: { params: { email: string } }) {
	const author = await getAuthor(params);

	return (
		<div>
			{!author ? (
				<div>Author not found</div>
			) : (
				<div>
					<title>{author.name}</title>
					<main className="min-h-screen flex flex-col">
						<div className="subtitle">{author.name}</div>
						{/* <JournalDisplay path={journal.path} />
						<ArticlesDisplay issueDate={journal.issue_date} /> */}
					</main>
				</div>
			)}
		</div>
	);
}

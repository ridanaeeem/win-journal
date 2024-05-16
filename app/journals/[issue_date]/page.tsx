import type { Journal, Article } from "@/types";
import JournalDisplay from "@/components/journal-display";
import Link from "next/link";

// the dates of currently published issues - automate this
export async function generateStaticParams() {
	const journals = await fetch("https://win-journal.vercel.app/api/journal").then((res) => res.json());
	const issues = journals.map((journal: Journal) => ({ issue_date: journal.issue_date }));
	return issues;
}

// gets the journal with the correct issue date
async function getJournal(issue_date: string) {
	const journals = await fetch("https://win-journal.vercel.app/api/journal").then((res) => res.json());
	return journals.find((journal: Journal) => journal.issue_date === issue_date);
}

// gets the articles with the correct issue date
async function getArticles(issue_date: string) {
	const articles = await fetch("https://win-journal.vercel.app/api/articles").then((res) => res.json());
	console.log(issue_date);
	console.log(articles);
	console.log(articles.filter((article: Article) => article.issue_date === issue_date));
	return articles;
	return articles.filter((article: Article) => article.issue_date === issue_date);
}

export default async function Journal({ params }: { params: { issue_date: string } }) {
	const journal = await getJournal(params.issue_date);
	const articles = await getArticles(params.issue_date);

	return (
		<div>
			<h1>{journal.issue}</h1>
			<p>{journal.issue_date}</p>
			<JournalDisplay path={journal.path} />
			<h2>Articles</h2>
			<ul>
				{articles.map((article: Article) => (
					<li key={article.path}>
						<Link href={`/journals/${params.issue_date}/${article.path}`}>{article.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

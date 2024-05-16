import type { Article } from "@/types";

// the paths of currently published articles - automate this
export async function generateStaticParams() {
	const articles = await fetch("https://win-journal.vercel.app/api/articles").then((res) => res.json());
	const paths = articles.map((article: Article) => ({
		issue_date: article.issue_date,
		path: article.path,
	}));
	return paths;
}

// gets the article with the correct path and issue date
async function getArticle(issue_date: string, path: string) {
	const articles = await fetch("https://win-journal.vercel.app/api/articles").then((res) => res.json());
	return articles[0];
	return articles.find((article: Article) => article.issue_date === issue_date && article.path === path);
}

export default async function ArticlePage({ params }: { params: { issue_date: string; path: string } }) {
	const article = await getArticle(params.issue_date, params.path);

	return (
		<div>
			<h1>{params.path}</h1>
			<h1>{params.issue_date}</h1>
			<h1>{article.title}</h1>
			<p>{article.abstract}</p>
			{/* <div>{article.content}</div> */}
		</div>
	);
}

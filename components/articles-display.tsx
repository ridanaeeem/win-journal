"use client";
import Link from "next/link";
import { Article } from "@/types";
import useSWR from "swr";
import ArticleBanner from "@/components/article-banner";

export default function ArticlesDisplay({ issueDate }: { issueDate: string }) {
	const { data, error } = useSWR("/api/articles", (url: string) => fetch(url).then((res) => res.json()));
	console.log("logging data");
	console.log(data);
	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	const articles = data;
	const issueArticles = articles.filter((article: Article) => article.issue_date === issueDate);

	return (
		<div>
			<div className="">
				{issueArticles.map((article: Article, i: number) => (
					<div
						key={i}
						className={
							i % 2 == 0
								? "transition ease-in-out delay-150 bg-gradient-to-r from-indigo-800 to-mainbg hover:bg-gradient-to-r hover:from-indigo-800 hover:to-indigo-800 duration-300"
								: "transition ease-in-out delay-150 bg-indigo-700 hover:bg-indigo-900 duration-300"
						}>
						<ArticleBanner article={article} />
					</div>
				))}
			</div>
		</div>
	);
}

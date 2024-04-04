"use client";
import Link from "next/link";
import { Article } from "@/types";
import useSWR from "swr";

const JournalDisplay = () => {
	const { data, error } = useSWR("/api/journals", (url: string) => fetch(url).then((res) => res.json()));
	console.log("logging data");
	console.log(data);
	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	const articles = data;

	return (
		<div>
			<h1>Journal Entries</h1>
			<ul>
				{articles.map((article: Article, i: number) => (
					<div key={i}>
						<h1 className="text-3xl">{article.title}</h1>
						<p>{article.keywords}</p>
						<p>{article.content}</p>
						<div>{article.introduction}</div>
						<div>{article.methods}</div>
						<div>{article.results}</div>
						<div>{article.discussion}</div>
						<div>{article.acknowledgements}</div>
						<div>{article.references}</div>
					</div>
				))}
			</ul>
		</div>
	);
};

export default JournalDisplay;

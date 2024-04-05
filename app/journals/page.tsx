// "use client";
import ArticleDisplay from "@/components/article-display";
import Link from "next/link";
// import { Journal } from "@/types";
// import { useState } from "react";
import useSWR from "swr";

export default function Journals() {
	// const { data, error } = useSWR("/api/journal", (url: string) => fetch(url).then((res) => res.json()));
	// console.log("logging journalsData");
	// console.log(data);
	// if (error) return <div>failed to load</div>;
	// if (!data) return <div>loading...</div>;
	// const journals = data;

	return (
		<div>
			<title>Journals</title>
			<main>
				<h1 className="subtitle">All Journals</h1>
				<div className="flex justify-evenly text-6xl p-10">
					<Link href="/journals/0">Issue 0</Link>
					<Link href="/journals/1">Issue 1</Link>
				</div>
				<ArticleDisplay />
			</main>
		</div>
	);
}

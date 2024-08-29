"use client";
import Link from "next/link";
import { Author } from "@/types";
import useSWR from "swr";

export default function AuthorsDisplay() {
	const { data, error } = useSWR("/api/authors", (url: string) => fetch(url).then((res) => res.json()));
	console.log("logging data");
	console.log(data);
	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	const authors = data;
	const issueArticles = authors.filter((article: Author) => article.email !== "");

	return (
		<div>
			<div className="">
				{issueArticles.map((author: Author, i: number) => (
					<div
						key={i}
						className={
							i % 2 == 0
								? "transition ease-in-out delay-150 bg-gradient-to-r from-indigo-800 to-mainbg hover:bg-gradient-to-r hover:from-indigo-800 hover:to-indigo-800 duration-300"
								: "transition ease-in-out delay-150 bg-indigo-700 hover:bg-indigo-900 duration-300"
						}>
						{author.name}
						<br></br>
						{author.email}
					</div>
				))}
			</div>
		</div>
	);
}

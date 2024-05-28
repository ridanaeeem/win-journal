"use client";
import Link from "next/link";
import { Article } from "@/types";
import useSWR from "swr";
import logo from "@/public/winLogo.png";
import Image from "next/image";

export default function ArticleBanner({ article }: { article: Article }) {
	return (
		<div className="w-1/2 p-4 m-10">
			<h3 className="text-4xl">{article.title}</h3>
			<h4 className="text-2xl">{article.author}</h4>
			<h5 className="text-xl">
				Keywords:
				<span>
					{article.keywords.map((keyword: string, i: number) => (
						<span key={i} className="">
							{" "}
							{keyword}
							{i < article.keywords.length - 1 ? ", " : ""}
						</span>
					))}
				</span>
			</h5>
			{/* <h1 className="text-3xl">{article.title}</h1>
            <p>{article.keywords}</p>
            <p>{article.content}</p>
            <div>{article.introduction}</div>
            <div>{article.methods}</div>
            <div>{article.results}</div>
            <div>{article.discussion}</div>
            <div>{article.acknowledgements}</div>
            <div>{article.references}</div> */}
		</div>
	);
}

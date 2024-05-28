import Link from "next/link";
// import { Journal } from "@/types";
// import { useState } from "react";
// import useSWR from "swr";

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
			<main className="min-h-screen ">
				<h1 className="subtitle">All Journals</h1>
				<div className="flex justify-evenly text-6xl p-10">
					<Link href="/journals/spring-2024">Spring 2024</Link>
					<Link href="/journals/fall-2025">Fall 2025</Link>
				</div>
			</main>
		</div>
	);
}

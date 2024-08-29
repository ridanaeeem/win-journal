"use client";
import Link from "next/link";
import { Author } from "@/types";
import useSWR from "swr";
import winLogo from "@/public/winLogo.png";
import Image from "next/image";

export default function AuthorsDisplay() {
	const { data, error } = useSWR("/api/authors", (url: string) => fetch(url).then((res) => res.json()));
	console.log("logging data");
	console.log(data);
	if (error) return <div>failed to load</div>;
	if (!data) return <div className="text-center">loading...</div>;
	const authors = data;
	// const validAuthors = authors.filter((author: Author) => author.published === True);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10">
			{authors.map((author: Author, i: number) => (
				<Link key={i} href={`/authors/${author.email.slice(0, -7)}`} className="no-underline">
					<div
						className={
							i % 2 === 0
								? "transition ease-in-out delay-150 bg-gradient-to-r from-indigo-800 to-mainbg hover:bg-gradient-to-r hover:from-indigo-800 hover:to-indigo-800 duration-300 p-4 rounded-lg shadow-lg flex items-center space-x-4"
								: "transition ease-in-out delay-150 bg-indigo-700 hover:bg-indigo-900 duration-300 p-4 rounded-lg shadow-lg flex items-center space-x-4"
						}>
						<Image
							// src={author.profilePicture || winLogo}
							src={winLogo}
							alt={author.name}
							width={64}
							height={64}
							className="rounded-full object-cover"
						/>
						<div>
							<div className="text-xl font-semibold">{author.name}</div>
							<div className="text-md text-gray-300">{author.email}</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}

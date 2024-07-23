"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function transformPathname(path: string) {
	let result = path[1].toUpperCase();
	for (let i = 2; i < path.length; i++) {
		if (path[i] === "-" && i < path.length - 1) {
			result += " " + path[i + 1].toUpperCase();
			i++;
		} else {
			result += path[i];
		}
	}

	return result;
}

export default function Nav() {
	const pathname = usePathname();
	const pages = ["/journals", "/authors", "/submissions", "/get-involved", "/contact", "/about"];
	return (
		<nav className="flex flex-row sticky top-0 bg-black z-10 text-white text-xl">
			<div className={`p-[1rem] w-1/2 ${pathname === "/" ? "text-mainlight" : "text-white"}`}>
				<Link href="/">Home</Link>
			</div>
			<div className="flex justify-between p-[1rem] w-1/2">
				{pages.map((page) => (
					<Link href={page} key={page} className={`${pathname === page ? "text-mainlight" : "text-white"}`}>
						{transformPathname(page)}
					</Link>
				))}
			</div>
		</nav>
	);
}

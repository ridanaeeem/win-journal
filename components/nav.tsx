"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
	const pathname = usePathname();
	const pages = ["/journals", "/authors", "/submissions", "/contact", "/about"];
	return (
		<nav className="flex flex-row sticky top-0 bg-black z-10 text-white text-xl">
			<div className={`p-[1rem] w-1/2 ${pathname === "/" ? "text-mainlight" : "text-white"}`}>
				<Link href="/">Home</Link>
			</div>
			<div className="flex justify-between p-[1rem] w-1/2">
				{pages.map((page) => (
					<Link href={page} key={page} className={`${pathname === page ? "text-mainlight" : "text-white"}`}>
						{page.charAt(1).toUpperCase() + page.slice(2)}
					</Link>
				))}
			</div>
		</nav>
	);
}

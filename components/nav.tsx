import Link from "next/link";

export default function Nav() {
	return (
		<nav className="w-full">
			<ul className="flex justify-between p-[1rem]">
				<Link href="/journals">Journals</Link>
				<Link href="/authors">Authors</Link>
				<Link href="/submissions">Submissions</Link>
				<Link href="/contact">Contact</Link>
				<Link href="/about">About</Link>
			</ul>
		</nav>
	);
}

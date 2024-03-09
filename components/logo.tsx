import Link from "next/link";

export default function Logo() {
	return (
		<nav className="w-full">
			<ul className="p-[1rem]">
				<Link href="/">Home</Link>
			</ul>
		</nav>
	);
}

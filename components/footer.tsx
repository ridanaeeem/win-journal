import Link from "next/link";
export default function Footer() {
	return (
		<nav className="w-full">
			<ul className="flex justify-evenly p-[1rem] z-10 bg-[#ffffff]">
				<Link href="/faq" className="hover:text-mainlight">
					FAQ
				</Link>
				<Link href="mailto: buwin@bu.edu" className="hover:text-mainlight">
					buwin@bu.edu
				</Link>
				<Link href="https://www.instagram.com/bostonuwin/" target="_blank" className="hover:text-mainlight">
					Instagram
				</Link>
			</ul>
		</nav>
	);
}

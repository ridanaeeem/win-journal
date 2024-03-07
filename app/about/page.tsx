import Link from "next/link";
import Image from "next/image";
import winLogo from "@/public/winLogo.png";

export default function About() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<h1>About Us</h1>
			<div className="flex flex-wrap">
				<Image src={winLogo} width={100} height={100} alt="win" className="hover:w-full"></Image>
				<Image src={winLogo} width={100} height={100} alt="win"></Image>
				<Image src={winLogo} width={100} height={100} alt="win"></Image>
				<Image src={winLogo} width={100} height={100} alt="win"></Image>
				<Image src={winLogo} width={100} height={100} alt="win"></Image>
				<Image src={winLogo} width={100} height={100} alt="win"></Image>
			</div>
		</main>
	);
}

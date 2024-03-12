import Link from "next/link";
import logo from "@/public/winLogo.png";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<title>Home</title>
			<main className="bg-gradient flex flex-col justify-between">
				<div className="absolute right-[10vw] bottom-[10vh] h-1/2">
					<svg width="442" height="300" viewBox="0 0 442 577" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M33.9999 560L2.23042e-05 560L33.9999 536L33.9999 560Z" fill="#552C4C" />
						<path d="M408 536L442 536L408 560L408 536Z" fill="#552C4C" />
						<rect x="34" y="536" width="374" height="24" fill="#552C4C" />
						<rect y="29" width="34" height="531" fill="#7B3C6D" />
						<path d="M34 29L8.33394e-05 29L34 5L34 29Z" fill="#7B3C6D" />
						<path
							d="M33.9999 558.172L2.31611e-05 558.172L33.9999 535.828L33.9999 558.172Z"
							fill="#F8F5F5"
						/>
						<path d="M408 535.828L442 535.828L408 558.172L408 535.828Z" fill="#F8F5F5" />
						<rect x="34" y="535.828" width="374" height="22.3448" fill="#F8F5F5" />
						<rect x="34" y="5" width="408" height="531" fill="#AB6E9E" />
						<rect x="141" y="79" width="194" height="74" rx="30" fill="#E1A4D4" />
					</svg>
				</div>
				<div className="flex w-full">
					<div>{/* <Image src={logo} alt="WIN logo" layout={"responsive"} /> */}</div>
					<div className="p-24">
						<h1 className="title">Undergraduate Journal of Neuroscience</h1>
						<h2 className="py-2 text-xl">An initiative by Women In Neuroscience</h2>
					</div>
				</div>
				<div className="left-0 w-1/2 bg-white text-black p-24 text-xl rounded-r-full">
					<h3>Journal description</h3>
				</div>
				<div className="w-full p-24 text-xl">
					<h3>Journal description</h3>
				</div>
			</main>
		</div>
	);
}

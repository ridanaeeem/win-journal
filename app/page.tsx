import Link from "next/link";
import logo from "@/public/winLogo.png";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<title>Home</title>
			<main className="bg-gradient flex flex-col justify-between">
				<div className="flex w-full min-h-[40vh]">
					<div>{/* <Image src={logo} alt="WIN logo" layout={"responsive"} /> */}</div>
					<div className="p-24">
						<h1 className="title text-8xl">Undergraduate Journal of Neuroscience</h1>
						<h2 className="py-2 text-xl">An initiative by Women In Neuroscience</h2>
					</div>
				</div>
				<div className="w-full bg-white text-black p-24 text-xl min-h-[40vh] text-center text-2xl">
					<h3>
						Our journal serves as a platform for showcasing neuroscience research conducted by Boston
						University students.
					</h3>
				</div>
				<div className="w-full p-24 text-xl">
					<h3>Journal description 2, probably put the latest one here as flippable pdf or something</h3>
				</div>
			</main>
		</div>
	);
}

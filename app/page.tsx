import Link from "next/link";
import logo from "@/public/winLogo.png";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<title>Home</title>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<div className="flex border border-red">
					<div>
						<Image src={logo} alt="WIN logo" layout={"responsive"} />
					</div>
					<div>
						<h1 className="title">Undergraduate Journal of Neuroscience</h1>
						<h2>An initiative by Women In Neuroscience</h2>
					</div>
				</div>
				<h3>Journal description</h3>
			</main>
		</div>
	);
}

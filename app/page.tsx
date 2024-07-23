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
						Welcome to the Undergraduate Journal of Neuroscience at Boston University! Our mission is to
						provide a platform for undergraduates to display their research and passion for neuroscience. In
						this journal, we provide students with the opportunity to showcase all the hardwork and
						dedication they&apos;ve put into their time at research labs, summer programs, and even in-class
						labs. This journal allows students to practice and engage in scientific writing, which is an
						incredibly beneficial process for a multitude of career paths. We invite students of all
						different backgrounds to submit a research article regardless of whether they&apos;ve done
						research specifically at BU. We strive to give students the recognition they deserve as
						undergraduates pursuing a future in science, and through this journal, we hope to provide an
						insight into the true potential of our student population.
					</h3>
				</div>
				<div className="w-full p-24 text-xl">
					<h3>Check out our latest edition!</h3>
				</div>
			</main>
		</div>
	);
}

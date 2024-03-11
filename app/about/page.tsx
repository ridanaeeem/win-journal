import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import winLogo from "@/public/winLogo.png";

function AboutCard({
	name,
	image,
	role,
	description,
	email,
}: {
	name: string;
	image: StaticImageData;
	role: string;
	description: string;
	email: string;
}) {
	return (
		<div className="card m-4 align-center">
			<div className="inner">
				<div className="front flex items-center p-6">
					<Image src={image} height={100} alt={name}></Image>
					<div className="flex flex-col pl-4">
						<h2 className="text-3xl">{name}</h2>
						<h3 className="text-lg">{role}</h3>
						<h3>
							<a href={`mailto: ${email}`}>{email}</a>
						</h3>
					</div>
				</div>
				<div className="back p-4">
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<div>
			<title>About</title>
			<main className="flex min-h-screen flex-col items-center p-24">
				<h1>About Us</h1>
				<div className="flex flex-wrap justify-center">
					<AboutCard
						name="Maxine Hsiung"
						image={winLogo}
						role="Co-President"
						description="This is a description"
						email="hsiungm@bu.edu"
					/>
					<AboutCard
						name="Nita Bhogal"
						image={winLogo}
						role="Co-President"
						description="This is a description"
						email="sbhogal@bu.edu"
					/>
					<AboutCard
						name="Rida Naeem"
						image={winLogo}
						role="PR, Website Developer"
						description="Rida is a senior studying Neuroscience and Computer Science. Rida has really enjoyed the last four years of WIN and the chances to meet new people, match with graduate student mentors, and create this website."
						email="ridan@bu.edu"
					/>
					<AboutCard
						name="Wen Bing Shi"
						image={winLogo}
						role="Secretary"
						description="This is a description"
						email="wbshi@bu.edu"
					/>
					<AboutCard
						name="Ashley Liu"
						image={winLogo}
						role="Treasurer"
						description="This is a description"
						email="ashliu15@bu.edu"
					/>
					<AboutCard
						name="Iqra Amin"
						image={winLogo}
						role="Event Coordinator"
						description="This is a description"
						email="iqraamin@bu.edu"
					/>
					<AboutCard
						name="Sophia Karpouzas"
						image={winLogo}
						role="Event Coordinator"
						description="This is a description"
						email="karpouzi@bu.edu"
					/>
				</div>
			</main>
		</div>
	);
}

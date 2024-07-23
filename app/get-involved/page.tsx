import React from "react";
import Collapsible from "@/components/collapsible";

export default function Involved() {
	return (
		<div>
			<title>Get Involved</title>
			<main className="min-h-screen ">
				<h1 className="subtitle">Get Involved</h1>
				<div className="px-10 pb-10">
					<p className="py-5 text-2xl">
						Thank you for taking interest in being apart of our team! This journal offers a variety of
						roles, and we welcome anyone who is interested to apply to any position they seem fit.
					</p>
					<Collapsible
						title="Editor"
						description="Editors will review papers for professional language, grammatical errors, scientific accuracy, and more. They will work closely with the Neuroscience Graduate Student Organization (NGSO) to transform drafts into quality papers that will be published in our journal."
					/>
					<Collapsible
						title="Graphic Designer"
						description="Designers will create illustrations and modify aesthetics within the final journal document. Their role is vital in visually expressing the art of neuroscience and customizing our journal to display the true potential of our student population."
					/>
					<p className="py-5 text-2xl">
						If interested in any of these positions, please email us directly at{" "}
						<a href="mailto: buwin@bu.edu" className="text-mainlight">
							buwin@bu.edu
						</a>{" "}
						with your full name, year of graduation, and desired position. Thank you again for your interest
						in supporting our community!
					</p>
				</div>
			</main>
		</div>
	);
}

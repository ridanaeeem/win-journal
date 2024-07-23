import React from "react";
import Link from "next/link";
import FormSelect from "@/components/form-select";

export default function Submissions() {
	return (
		<div>
			<title>Submissions</title>
			<main className="min-h-screen">
				<h1 className="subtitle">Submissions</h1>
				<div className="px-10 pb-10">
					<p className="py-5 text-2xl">
						Thank you for taking the time to contribute to the Undergraduate Journal of Neuroscience! We
						appreciate your hard work and dedication to the field of neuroscience, and we hope to give you
						the recognition you deserve.
					</p>
					<p className="py-5 text-2xl">
						This journal allows students to submit a variety of papers that showcase their talents. The
						three different types of articles we offer for submissions include a research article, a topics
						article, and an NE203 article. Please carefully review the descriptions for each of these
						article subtypes, and select the appropriate option for your application. Students can submit as
						many articles as they would like, and they do not have to submit all three subtypes of articles.
					</p>
					<p className="py-5 text-2xl">Research Article</p>
					<p className="p-5 pl-10 text-2xl">
						A research article is the standard paper you would see in an academic journal. Students who have
						conducted research at a BU lab or outside a BU lab are encouraged to submit a paper on what they
						accomplished during their time as an undergraduate researcher. Students will follow a provided
						format where they will write an abstract, introduction, methods, results, discussion, and
						conclusion based on what they completed. If the student did not get the chance to collect data
						or analyze data, they are still welcome to use the provided guidelines to describe what their
						role was in their lab. Students will be required to submit a permission form signed by their PI
						if they plan on displaying or writing about results from a lab. Please make sure your article
						adheres to the format and guidelines outlined in{" "}
						<a
							href="https://docs.google.com/document/d/1wekOQ_Q9t2EQ_3mdYEgwyDzdSS9esw1C3d0iuAf_vwc/edit?usp=sharing"
							target="_blank"
							className="text-mainlight">
							this document
						</a>
						.
					</p>
					<p className="py-5 text-2xl">Topics Article</p>
					<p className="p-5 pl-10 text-2xl">
						A topics article is similar to a review paper where students will write about a topic in
						neuroscience they are passionate about. This paper must be supported by peer reviewed academic
						sources, and the topic must be related to neuroscience. Other than these requirements and a word
						limit, students have the freedom of engaging in whatever topic they choose. This is the perfect
						opportunity for students who have not yet gotten the chance to conduct research or for those who
						are simply fascinated by the field of neuroscience! These articles will be published at the
						beginning of the journal, followed by the rest of the research articles.
					</p>
					<p className="py-5 text-2xl">NE203 Article</p>
					<p className="p-5 pl-10 text-2xl">
						An NE203 article is a research article displaying research conducted within the NE203 lab. This
						Principles of Neuroscience course is one of the core major requirements in the Undergraduate
						Program of Neuroscience. In the lab component, students participate in inquiry-based experiments
						on animal models where they are required to develop an independent research project. This
						project is then developed into a grant proposal that is submitted for grading. Here, we offer
						students the ability to repurpose their grant proposal into a research article that displays
						their initial findings of their topic. This is a great opportunity for students to demonstrate
						how their work from an in-class lab can be translated into concrete skills for other research
						programs.
					</p>
					<p className="py-5 text-2xl">
						The review process will take approximately 2-3 weeks. If your article is accepted, you will be
						notified via email. If you have any questions or concerns, feel free to fill out our{" "}
						<Link href="/contact" className="text-mainlight">
							contact form
						</Link>{" "}
						or reach out to us at{" "}
						<a href="mailto:buwin@bu.edu" className="text-mainlight">
							buwin@bu.edu
						</a>
						. Otherwise, proceed to the form below to submit your article!
					</p>
					<FormSelect />
				</div>

				{/* <iframe
						src=""
						width="640"
						height="718">
						Loading…
					</iframe>
				*/}
			</main>
		</div>
	);
}

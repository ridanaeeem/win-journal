import React from "react";
import ContactForm from "@/components/contact-form";
import Collapsible from "@/components/collapsible";

export default function Contact() {
	return (
		<div>
			<title>Contact</title>
			<main className="min-h-screen ">
				<h1 className="subtitle">Contact Us</h1>
				<div className="flex">
					<div className="w-full">
						<p className="m-10 text-2xl">
							Need to get in touch with us? For general inquiries about the Undergarduate Journal of
							Neuroscience or Women In Neuroscience, feel free to fill out the form to the right, email us
							at{" "}
							<a href="mailto: buwin@bu.edu" className="text-mainlight">
								buwin@bu.edu
							</a>
							, or reach out to us{" "}
							<a href="https://www.instagram.com/bostonuwin/" className="text-mainlight">
								@bostonuwin
							</a>{" "}
							on Instagram.
						</p>
						<p className="m-10 mb-0 text-2xl">
							For specific inquiries, feel free to reach out to the following contacts:
						</p>
						<div className="m-10 mt-0 text-2xl">
							<ul className="list-disc pl-5">
								<li>
									President:{" "}
									<a href="mailto: buwin@bu.edu" className="text-mainlight">
										buwin@bu.edu
									</a>
								</li>
								<li>
									Secretary:{" "}
									<a href="mailto: buwin@bu.edu" className="text-mainlight">
										buwin@bu.edu
									</a>
								</li>
								<li>
									PR/Social Media:{" "}
									<a href="mailto: buwin@bu.edu" className="text-mainlight">
										buwin@bu.edu
									</a>
								</li>
								<li>
									Event Coordinator:{" "}
									<a href="mailto: buwin@bu.edu" className="text-mainlight">
										buwin@bu.edu
									</a>
								</li>
								<li>
									Website:{" "}
									<a href="mailto: ridan@bu.edu" className="text-mainlight">
										ridan@bu.edu
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="w-full">
						<ContactForm />
					</div>
				</div>
				<h2 className="m-10 mb-0 text-4xl">Frequently Asked Questions</h2>
				<div className="m-10 mb-0 text-4xl">
					<Collapsible
						title="Do I have to be a woman in neuroscience to submit an article?"
						description="Absolutely not, anyone is welcome to submit any type of article, as long as they are a BU student!"
					/>
					<Collapsible
						title="How many articles can I submit?"
						description="There is no limit to how many or how little articles you can submit. You are welcome to submit as many articles as you desire! We suggest that if you want to submit multiple research articles, you may want to consider submitting them for different issues. For example, you may consider submitting an article for the summer program you just completed in our Fall issue, and then submit another article for the research you conducted during the semester in our Spring issue. This allows you to have your work displayed in multiple areas rather than just one."
					/>
					<Collapsible
						title="If I submit one article for one issue, can I submit another article in another issue?"
						description="Absolutely! As long as you do not submit the same article, you can definitely submit again when submissions for the next issue arise."
					/>
					<Collapsible
						title="What if I don't have any research experience, can I still submit an article?"
						description="Yes, anyone is welcome to submit a topics article, which does not require any experience to write. You can think of a topics article like a review paper, where you can write about whatever topic in neuroscience interests you the most and support your findings with peer-reviewed papers."
					/>
					<Collapsible
						title="Can we submit research from different lab courses, such as NE102?"
						description="Nah fam"
					/>
					<Collapsible
						title="What if I did not collect any data during my time at a research lab? What should I write for my methods and results section?"
						description=""
					/>
					<Collapsible title="How should I cite my sources for the topics article?" description="" />
					<Collapsible title="How is the journal formatted?" description="" />
				</div>
			</main>
		</div>
	);
}

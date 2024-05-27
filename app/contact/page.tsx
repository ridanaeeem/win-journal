import React from "react";
import ContactForm from "@/components/contact-form";

export default function Contact() {
	return (
		<div>
			<title>Contact</title>
			<main className="min-h-screen ">
				<h1 className="subtitle">Contact Us</h1>
				<div className="flex">
					<div className="w-full">
						<p className="m-10 text-xl">
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
						<p className="m-10 mb-0 text-xl">
							For specific inquiries, feel free to reach out to the following contacts:
						</p>
						<div className="m-10 mt-0 text-xl">
							<ul className="list-disc pl-5">
								<li>
									President:{" "}
									<a href="mailto: buwin@bu.edu" className="text-mainlight">
										buwin@bu.edu
									</a>
								</li>
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
			</main>
		</div>
	);
}

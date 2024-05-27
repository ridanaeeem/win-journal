import React from "react";

export default function ContactForm() {
	return (
		<div>
			<h2 className="m-10 mb-0 text-4xl text-mainlight">Contact Form</h2>
			<form action="/api/contact" method="post" className="flex flex-col text-xl m-10 mt-0">
				<div className="flex flex-col pb-5">
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" required className="formfield"></input>

					<label htmlFor="email">Email</label>
					<input type="text" id="email" name="email" required className="formfield"></input>

					<label htmlFor="message">Message</label>
					<textarea id="message" name="message" required className="formfield"></textarea>
				</div>

				<button type="submit" className="rounded-xl bg-mainlight mx-auto p-5 px-10">
					Submit
				</button>
			</form>
		</div>
	);
}

import React from "react";
import JournalForm from "@/components/journal-form";

export default function Submissions() {
	return (
		<div>
			<title>Submissions</title>
			<main>
				<h1 className="subtitle">Submissions</h1>
				<p className="p-5 text-2xl">
					We are thrilled you would like to submit an article to our journal! We are currently accepting
					submissions for both standalone articles which will exist on their own on this website, and for
					articles to be included in our next journal issue. If you choose to apply for the journal issue,
					please make sure your article adheres to the format and guidelines outlined in{" "}
					<a
						href="https://docs.google.com/document/d/1wekOQ_Q9t2EQ_3mdYEgwyDzdSS9esw1C3d0iuAf_vwc/edit?usp=sharing"
						className="text-mainlight">
						this document
					</a>
					.
				</p>

				<p className="p-5 text-2xl">
					The review process will take approximately 2-3 weeks. If your article is accepted, you will be
					notified via email. If you have any questions or concerns, please reach out to us at{" "}
					<a href="mailto:buwin@bu.edu" className="text-mainlight">
						buwin@bu.edu
					</a>
					.
				</p>
				{/* <div>
					<h1 className="subtitle">Submissions</h1>
					<h2></h2>
					<form action="/api/submissions" method="post" className="flex flex-col text-xl m-10 pb-20">
						<label htmlFor="title">Title</label>
						<input type="text" id="title" name="title" required className="formfield" />
						<label htmlFor="author">Full Name</label>
						<input type="text" id="author" name="author" required className="formfield"></input>
						<label htmlFor="email">BU Email</label>
						<input type="text" id="email" name="email" required className="formfield"></input>
						<label htmlFor="author_email">Google drive link</label>
						<input type="text" id="author_email" name="author_email" required className="formfield"></input>
						{/* <input type="file" id="article" name="article" accept="application/pdf"></input> */}
				{/* <button type="submit">Submit</button> */}
				{/* </form> */}
				{/* <iframe
						src=""
						width="640"
						height="718">
						Loading…
					</iframe> */}

				<JournalForm />
			</main>
		</div>
	);
}

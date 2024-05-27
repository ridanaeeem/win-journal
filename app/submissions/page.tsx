import React from "react";
import FormSelect from "@/components/form-select";

export default function Submissions() {
	return (
		<div>
			<title>Submissions</title>
			<main className="min-h-screen ">
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
					notified via email. If you have any questions or concerns, feel free to fill out our contact form or
					reach out to us at{" "}
					<a href="mailto:buwin@bu.edu" className="text-mainlight">
						buwin@bu.edu
					</a>
					.
				</p>
				<FormSelect />

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

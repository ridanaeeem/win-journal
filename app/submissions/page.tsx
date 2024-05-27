import React from "react";
import JournalForm from "@/components/journal-form";

export default function Submissions() {
	return (
		<div>
			<title>Submissions</title>
			<main>
				<h1 className="subtitle">Submissions</h1>
				<p></p>
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

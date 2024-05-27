import React from "react";

export default function ArticleForm() {
	return (
		<div>
			<h2 className="m-10 text-4xl text-center text-mainlight">Article Application</h2>
			<form action="/api/articleSubmission" method="post" className="flex flex-col text-2xl m-10 mt-5">
				<div className="flex flex-col pb-5">
					<h3 className="text-4xl text-mainlight">Information about you</h3>
					<label htmlFor="author">Full Name</label>
					<input type="text" id="author" name="author" required className="formfield"></input>

					<label htmlFor="email">BU Email</label>
					<input type="text" id="email" name="email" required className="formfield"></input>

					<label htmlFor="buID">BU ID</label>
					<input type="text" id="buID" name="buID" required className="formfield"></input>

					<label htmlFor="major">Major</label>
					<input type="text" id="major" name="major" required className="formfield"></input>

					<label htmlFor="gradYear">Expected Graduation Year</label>
					<input type="text" id="gradYear" name="gradYear" required className="formfield"></input>
				</div>

				<div className="flex flex-col py-5">
					<h3 className="text-4xl text-mainlight">Information about your paper</h3>
					<label htmlFor="title">Article Title</label>
					<input type="text" id="title" name="title" required className="formfield" />

					<label htmlFor="subsection">
						What topic in neuroscience are you focusing on and why did you decide to choose this topic?
					</label>
					<input type="text" id="subsection" name="subsection" required className="formfield" />

					<label htmlFor="articleLink">
						Provide the Google drive link to your article, which should be between 500-1000 words. The
						format is up to you. Make sure that you include all sources you are using under a References
						section in the following format:{" "}
						<span className="text-mainlight">
							Last Name First Initial (Year Published) Title of the Article. Journal Name Volume:Page
							#&apos;s.
						</span>
						<br></br>
						*Make sure that anyone with the link can view!
					</label>
					<input type="text" id="articleLink" name="articleLink" required className="formfield"></input>

					<label htmlFor="approval">
						Provide the Google drive link to{" "}
						<a
							href="https://docs.google.com/document/d/1wekOQ_Q9t2EQ_3mdYEgwyDzdSS9esw1C3d0iuAf_vwc/edit?usp=sharing"
							className="text-mainlight">
							this form (link not updated yet)
						</a>
						, signed by your Principal Investigator.
					</label>
					<input type="text" id="approval" name="approval" required className="formfield"></input>
				</div>

				<button type="submit" className="rounded-xl bg-mainlight mx-auto p-5 px-10 mt-5">
					Submit
				</button>
			</form>
		</div>
	);
}

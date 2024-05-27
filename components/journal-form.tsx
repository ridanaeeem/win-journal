import React from "react";

export default function JournalForm() {
	return (
		<div>
			<h2 className="m-10 text-4xl text-center text-mainlight">Journal application</h2>
			<form action="/api/issueSubmission" method="post" className="flex flex-col text-xl m-10 pb-20 mt-5">
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
					<h3 className="text-4xl text-mainlight">Information about your research</h3>
					<label htmlFor="lab">Where did you conduct your research?</label>
					<input type="text" id="lab" name="lab" required className="formfield" />

					<label htmlFor="labLink">Provide a link to your lab&apos;s website</label>
					<input type="text" id="labLink" name="labLink" required className="formfield" />

					<label htmlFor="labSummary">Provide a one sentence summary of what your lab specializes in.</label>
					<input type="text" id="labSummary" name="labSummary" required className="formfield" />

					<label htmlFor="length">
						How long was your project, or how much time did you dedicate to your research?
					</label>
					<input type="text" id="length" name="length" required className="formfield" />
				</div>

				<div className="flex flex-col py-5">
					<h3 className="text-4xl text-mainlight">Information about your paper</h3>
					<label htmlFor="title">Article Title</label>
					<input type="text" id="title" name="title" required className="formfield" />

					<label htmlFor="subsection">
						Which subsection is most appropriate for your journal article to be included in?
					</label>
					<div className="flex flex-col">
						<div>
							<input type="radio" id="neuro" name="subsection" value="Neuroscience" />
							<label htmlFor="neuro" className="radio-input">
								Neuroscience
							</label>
						</div>

						<div>
							<input type="radio" id="psych" name="subsection" value="Psychology" />
							<label htmlFor="psych" className="radio-input">
								Psychology
							</label>
						</div>

						<div>
							<input type="radio" id="comp" name="subsection" value="Computational Neuroscience" />
							<label htmlFor="comp" className="radio-input">
								Computational Neuroscience
							</label>
						</div>

						<div>
							<input type="radio" id="bio" name="subsection" value="General Biology" />
							<label htmlFor="bio" className="radio-input">
								General Biology
							</label>
						</div>
					</div>

					<label htmlFor="articleLink">
						Provide the Google drive link to your article, which should follow{" "}
						<a
							href="https://docs.google.com/document/d/1wekOQ_Q9t2EQ_3mdYEgwyDzdSS9esw1C3d0iuAf_vwc/edit?usp=sharing"
							className="text-mainlight">
							this template
						</a>
						.<br></br>
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

				<button type="submit" className="rounded-xl bg-mainlight mx-auto p-5 px-10">
					Submit
				</button>
			</form>
		</div>
	);
}

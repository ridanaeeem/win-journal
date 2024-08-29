import React from "react";
import Collapsible from "@/components/collapsible";

export default function FAQ() {
	return (
		<div>
			<title>GAQ</title>
			<main className="min-h-screen ">
				<h1 className="subtitle">Frequently Asked Questions</h1>
				<div className="my-5 mx-10 pb-20 text-4xl">
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

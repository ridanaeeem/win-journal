import { type NextRequest, NextResponse } from "next/server";
import { submittedIssuesDBConnect } from "@/utils/connections";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
	// Connect to the database
	const db = await submittedIssuesDBConnect();
	console.log("Connected to db");
	// Get all articles
	const articles = await db.IssueSubmission.find({}).exec();
	console.log("Got articles");

	return new NextResponse(JSON.stringify(articles), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export async function POST(req: NextRequest) {
	// Parse the form data
	const formData = await req.formData();
	const author = formData.get("author");
	const email = formData.get("email");
	const buID = formData.get("buID");
	const major = formData.get("major");
	const gradYear = formData.get("gradYear");
	const lab = formData.get("lab");
	const labLink = formData.get("labLink");
	const labSummary = formData.get("labSummary");
	const length = formData.get("length");
	const title = formData.get("title");
	const subsection = formData.get("subsection");
	const articleLink = formData.get("articleLink");
	const approval = formData.get("approval");
	// const content = formData.get("content");

	// Validate the input data
	// no empty fields
	if (
		!author ||
		!email ||
		!buID ||
		!major ||
		!gradYear ||
		!lab ||
		!labLink ||
		!labSummary ||
		!length ||
		!title ||
		!subsection ||
		!articleLink ||
		!approval
	) {
		return new NextResponse("Missing input.", { status: 400 });
	}
	// no special characters
	const specialChars = /[`$^&*_\-+=\[\]{};\\|<>\/?~]/;
	if (
		specialChars.test(author.toString()) ||
		specialChars.test(email.toString()) ||
		specialChars.test(buID.toString()) ||
		specialChars.test(major.toString()) ||
		specialChars.test(gradYear.toString()) ||
		specialChars.test(lab.toString()) ||
		specialChars.test(labLink.toString()) ||
		specialChars.test(labSummary.toString()) ||
		specialChars.test(length.toString()) ||
		specialChars.test(title.toString()) ||
		specialChars.test(subsection.toString()) ||
		specialChars.test(articleLink.toString()) ||
		specialChars.test(approval.toString())
	) {
		return new NextResponse("No special characters allowed, go back to try again.", { status: 400 });
	}
	// correct email
	if (email && email.slice(-7) !== "@bu.edu") {
		return new NextResponse("Invalid email, go back to try again.", { status: 400 });
	}

	// if (
	// 	typeof title !== "string" ||
	// 	typeof author !== "string" ||
	// 	typeof email !== "string" ||
	// 	typeof article !== "string"
	// ) {
	// 	return new NextResponse("Invalid input.", { status: 400 });
	// }

	// Connect to the database
	const db = await submittedIssuesDBConnect();
	console.log("Connected to db");

	// Create a new article
	const newSubmission = new db.IssueSubmission({
		author,
		email,
		buID,
		major,
		gradYear,
		lab,
		labLink,
		labSummary,
		length,
		title,
		subsection,
		articleLink,
		approval,
	});
	await newSubmission.save();
	console.log("Saved new submission");

	return new NextResponse("Article submitted successfully", { status: 201 });
}

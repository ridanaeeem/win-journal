import { type NextRequest, NextResponse } from "next/server";
import { submissionsDBConnect } from "@/utils/connections";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
	// Connect to the database
	const db = await submissionsDBConnect();
	console.log("Connected to db");
	// Get all articles
	const articles = await db.Submission.find({}).exec();
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
	const title = formData.get("title");
	const author = formData.get("author");
	const author_email = formData.get("author_email");
	const article = formData.get("article");
	// const content = formData.get("content");

	// Validate the input data
	// if (typeof title !== "string" || typeof content !== "string") {
	// 	return new NextResponse("Invalid input", { status: 400 });
	// }

	// Connect to the database
	const db = await submissionsDBConnect();
	console.log("Connected to db");

	// Create a new article
	const newSubmission = new db.Submission({ title, author, author_email, article });
	await newSubmission.save();
	console.log("Saved new submission");

	return new NextResponse("Article submitted successfully", { status: 201 });
}

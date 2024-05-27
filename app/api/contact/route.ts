import { type NextRequest, NextResponse } from "next/server";
import { contactDBConnect } from "@/utils/connections";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
	// Connect to the database
	const db = await contactDBConnect();
	console.log("Connected to db");
	// Get all articles
	const articles = await db.ContactSubmission.find({}).exec();
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
	const name = formData.get("name");
	const email = formData.get("email");
	const message = formData.get("message");

	// Validate the input data
	// no empty fields
	if (!name || !email || !message) {
		return new NextResponse("Missing input.", { status: 400 });
	}
	// no special characters
	const specialChars = /[`$^&*_\-+=\[\]{};\\|<>\/?~]/;
	if (
		specialChars.test(name.toString()) ||
		specialChars.test(email.toString()) ||
		specialChars.test(message.toString())
	) {
		return new NextResponse("No special characters allowed, go back to try again.", { status: 400 });
	}
	// // correct email
	// if (email && email.slice(-7) !== "@bu.edu") {
	// 	return new NextResponse("Invalid email, go back to try again.", { status: 400 });
	// }

	// Connect to the database
	const db = await contactDBConnect();
	console.log("Connected to db");

	// Create a new article
	const newSubmission = new db.ContactSubmission({
		name,
		email,
		message,
	});
	await newSubmission.save();
	console.log("Saved contact submission");

	return new NextResponse("Contact form submitted successfully", { status: 201 });
}

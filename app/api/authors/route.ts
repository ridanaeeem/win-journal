import { type NextRequest } from "next/server";
import { authorsDBConnect } from "@/utils/connections";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
	// can add search params here to filter articles

	// connect to database
	const db = await authorsDBConnect();
	console.log("connected to db");
	// get all articles
	const authors = await db.Author.find({}).exec();
	console.log("got authors");

	return new Response(JSON.stringify(authors), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
}

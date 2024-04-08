import { type NextRequest } from "next/server";
import { journalDBConnect } from "@/utils/connections";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
	// can add search params here to filter articles

	// connect to database
	const db = await journalDBConnect();
	console.log("connected to db");
	// get all articles
	const articles = await db.Article.find({}).exec();
	console.log("got journals");

	return new Response(JSON.stringify(articles), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
}

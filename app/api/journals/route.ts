import { type NextRequest } from "next/server";
import { journalDBConnect } from "@/utils/connection";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
	// can add search params here to filter articles

	// connect to database
	const db = await journalDBConnect();
	// get all articles
	const articles = await db.Article.find({}).exec();

	return new Response(JSON.stringify(articles), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
}

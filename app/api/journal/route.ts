import { type NextRequest } from "next/server";
import { journalsDBConnect } from "@/utils/connections";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
	// can add search params here to filter journals

	// connect to database
	const db = await journalsDBConnect();
	console.log("connected to db");
	// get all journals
	const journals = await db.Journal.find({}).exec();
	console.log("got journal thing");

	return new Response(JSON.stringify(journals), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
}

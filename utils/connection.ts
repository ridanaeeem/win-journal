//IMPORT MONGOOSE
import mongoose from "mongoose";
import dotenv from "dotenv";

// load env variables
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
const DB_COLLECTION = process.env.DB_COLLECTION;

// connection function
export const journalDBConnect = async () => {
	const conn = await mongoose.connect(MONGODB_URL as string).catch((err) => console.log(err));
	if (!conn) {
		console.log("Connection Error");
		throw new Error("Connection Error");
	}

	// create schema
	const ArticleSchema = new mongoose.Schema({
		title: { type: String, required: true },
		author: { type: [String], required: true },
		keywords: { type: [String], required: true },
		created_at: { type: Date, default: Date.now },
		// updated_at: { type: Date, default: Date.now },
		abstract: { type: String, required: true },
		introduction: { type: String, required: true },
		methods: { type: String, required: true },
		results: { type: String, required: true },
		discussion: { type: String, required: true },
		conclusion: { type: String, required: true },
	});

	const Article = mongoose.models.Article || mongoose.model("Article", ArticleSchema, DB_COLLECTION);

	return { conn, Article };
};

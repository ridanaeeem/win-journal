//IMPORT MONGOOSE
import mongoose, { Schema } from "mongoose";
import dotenv from "dotenv";

// load env variables
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
const DB_JOURNALS = process.env.DB_JOURNALS;
const DB_COLLECTION = process.env.DB_COLLECTION;
const DB_SUBMITTED_ISSUE = process.env.DB_SUBMITTEDISSUE;
const DB_SUBMITTED_ARTICLE = process.env.DB_SUBMITTEDARTICLE;

// getting all of the journals
// connection function
export const journalsDBConnect = async () => {
	const conn = await mongoose.connect(MONGODB_URL as string).catch((err) => console.log(err));
	if (!conn) {
		console.log("Connection Error");
		throw new Error("Connection Error");
	}

	// create schema
	const JournalSchema = new mongoose.Schema({
		issue: { type: String, required: true },
		path: { type: String, required: true },
		issue_date: { type: String, required: true },
	});

	const Journal = mongoose.models.Journal || mongoose.model("Journal", JournalSchema, DB_JOURNALS);

	return { conn, Journal };
};

// getting all of individual articles
// connection function
export const articlesDBConnect = async () => {
	const conn = await mongoose.connect(MONGODB_URL as string).catch((err) => console.log(err));
	if (!conn) {
		console.log("Connection Error");
		throw new Error("Connection Error");
	}

	// create schema
	const ArticleSchema = new mongoose.Schema({
		title: { type: String, required: true },
		author: { type: String, required: true },
		author_email: { type: String, required: true },
		keywords: { type: [String], required: true },
		issue_date: { type: String, required: true },
		path: { type: String, required: true },
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

// connection function for issue applications
export const submittedIssuesDBConnect = async () => {
	const conn = await mongoose.connect(MONGODB_URL as string).catch((err) => console.log(err));
	if (!conn) {
		console.log("Connection Error");
		throw new Error("Connection Error");
	}

	// create schema
	const SubmittedIssueSchema = new mongoose.Schema({
		author: { type: String, required: true },
		email: { type: String, required: true },
		buID: { type: String, required: true },
		major: { type: String, required: true },
		gradYear: { type: String, required: true },
		lab: { type: String, required: true },
		labLink: { type: String, required: true },
		labSummary: { type: String, required: true },
		length: { type: String, required: true },
		title: { type: String, required: true },
		subsection: { type: String, required: true },
		articleLink: { type: String, required: true },
		approval: { type: String, required: true },
	});

	const IssueSubmission =
		mongoose.models.IssueSubmission || mongoose.model("IssueSubmission", SubmittedIssueSchema, DB_SUBMITTED_ISSUE);

	return { conn, IssueSubmission };
};

// connection function for article applications
export const submittedArticlesDBConnect = async () => {
	const conn = await mongoose.connect(MONGODB_URL as string).catch((err) => console.log(err));
	if (!conn) {
		console.log("Connection Error");
		throw new Error("Connection Error");
	}

	// create schema
	const SubmittedArticleSchema = new mongoose.Schema({
		author: { type: String, required: true },
		email: { type: String, required: true },
		buID: { type: String, required: true },
		major: { type: String, required: true },
		gradYear: { type: String, required: true },
		title: { type: String, required: true },
		subsection: { type: String, required: true },
		articleLink: { type: String, required: true },
		approval: { type: String, required: true },
	});

	const ArticleSubmission =
		mongoose.models.ArticleSubmission ||
		mongoose.model("ArticleSubmission", SubmittedArticleSchema, DB_SUBMITTED_ARTICLE);

	return { conn, ArticleSubmission };
};

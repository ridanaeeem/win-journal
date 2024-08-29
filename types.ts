export type Article = {
	_id: string;
	title: string;
	author: string;
	keywords: string[];
	issue_date: string;
	tags: string[];
	content: string;
	abstract: string;
	introduction: string;
	methods: string;
	results: string;
	discussion: string;
	acknowledgements: string;
	references: string;
};

export type Journal = {
	_id: string;
	issue: string;
	issue_date: string;
	path: string;
};

export type Author = {
	_id: string;
	name: string;
	email: string;
	// articles: Article[];
};

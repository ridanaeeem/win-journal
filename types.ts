export type Article = {
	_id: string;
	title: string;
	author: string;
	keywords: string[];
	created_at: Date;
	updated_at: Date;
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
	path: string;
};

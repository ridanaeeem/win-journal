import AuthorsDisplay from "@/components/authors-display";
import { Author } from "@/types";

export default function Authors() {
	return (
		<div>
			<title>Authors</title>
			<main className="min-h-screen ">
				<h1 className="subtitle">Meet the Authors</h1>
				<AuthorsDisplay />
			</main>
		</div>
	);
}

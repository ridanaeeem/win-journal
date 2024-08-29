import AuthorsDisplay from "@/components/authors-display";
import { Author } from "@/types";

export default function Authors() {
	return (
		<div>
			<title>Authors</title>
			<main className="min-h-screen ">
				<h1 className="subtitle">Meet the Authors</h1>
				<div className="px-10 pb-10">
					<p className="py-5 text-2xl">
						Students who have contributed to the Undergraduate Journal of Neuroscience are listed below. We
						encourage you to explore their profiles to learn more about their research interests and see the
						articles that they have published in this journal.
					</p>
				</div>
				<AuthorsDisplay />
			</main>
		</div>
	);
}

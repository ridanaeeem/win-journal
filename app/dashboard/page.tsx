"use client";
import Login from "@/components/login";

export default function Dashboard() {
	return (
		<div>
			<title>Dashboard</title>
			<main className="flex min-h-screen flex-col items-center">
				<h1 className="subtitle">Dashboard</h1>
				<Login />
			</main>
		</div>
	);
}

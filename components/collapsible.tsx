"use client";
import { useEffect, useState } from "react";

export default function Collapsible({ title, description }: { title: string; description: string }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleCollapsible = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className="">
			<button className="py-3 text-3xl text-mainlight text-left" onClick={handleCollapsible}>
				<div className="">
					{title} <span className="text-lg text-mainlight">{isOpen ? "▲" : "▼"}</span>
				</div>
			</button>
			<div className="text-2xl content">{isOpen ? <p>{description}</p> : <></>}</div>
		</div>
	);
}

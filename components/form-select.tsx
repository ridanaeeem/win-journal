"use client";
import React, { useState } from "react";
import JournalForm from "@/components/journal-form";
import ArticleForm from "@/components/article-form";

export default function FormSelect() {
	const [formType, setFormType] = useState("none");

	const onOptionChange = (e: any) => {
		setFormType(e.target.value);
	};

	return (
		<div className="py-5 text-2xl">
			<p>Please select which application you would like to complete:</p>
			<div className="flex flex-row">
				<input
					type="radio"
					id="journal"
					name="submission"
					value="journal"
					checked={formType === "journal"}
					onChange={onOptionChange}
				/>
				<label htmlFor="journal" className="radio-input">
					<span className={formType === "journal" ? "text-mainlight" : "text-white"}>Journal</span>
				</label>
				<input
					type="radio"
					id="article"
					name="submission"
					value="article"
					checked={formType === "article"}
					onChange={onOptionChange}
				/>
				<label htmlFor="article" className="radio-input">
					<span className={formType === "article" ? "text-mainlight" : "text-white"}>Article</span>
				</label>
			</div>
			{formType === "journal" ? <JournalForm /> : null}
			{formType === "article" ? <ArticleForm /> : null}
		</div>
	);
}

"use client";
import { useState, useEffect } from "react";
import { setCookie } from "cookies-next";
import dotenv from "dotenv";

// load env variables
dotenv.config();

export default function Login() {
	const handleClick = async () => {
		const clientId = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID;
		const redirectUri = window.location.origin;
		const responseType = "token";
		const scope = "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email";
        
		const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

		window.location.href = authUrl;
	};

	return (
		<div>
			<button onClick={handleClick}>Login with Google</button>
		</div>
	);
}

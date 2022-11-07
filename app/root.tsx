import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import stylesUrl from "./styles/index.css";

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "SupercomputerHub Web",
	viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: stylesUrl }];
};

function Navbar() {
	return (
		<div className="navbar">
			<a className="navbar-brand" href="/">Supercomputer Web</a>
			<a className="navbar-element" href="/">Home</a>
			<a className="navbar-element" href="/auth/signin">Sign In</a>
		</div>
	)
}


export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Navbar />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

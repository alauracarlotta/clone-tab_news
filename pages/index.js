"use client";
import { Expenses } from "../components/Expenses";
import { Income } from "../components/Income";
import { MainAccount } from "../components/MainAccount";

export default async function HomePage() {
	const resp = await fetch("http://localhost:3000/api/status");
	const data = resp.headers.get("content-type");
	console.log("olha só", data);

	return (
		<div>
			Home
			<MainAccount />
			<div style={{ display: "flex" }}>
				<div style={{ color: "green" }}>
					<Income />
				</div>
				<div style={{ color: "red" }}>
					<Expenses />
				</div>
			</div>
		</div>
	);
}

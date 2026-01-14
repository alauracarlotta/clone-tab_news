import useSWR from "swr";

async function fetchStatus() {
	const response = await fetch("http://localhost:3000/api/v1/status");
	const responseBody = await response.json();
	return responseBody;
}

export default function StatusPage() {
	const response = useSWR("status", fetchStatus);
	console.log(response.isValidating);

	return (
		<>
			<h1>Status Page</h1>
			<h2>
				Versão: <p></p>
			</h2>
			<h2>
				Conexões máximas: <p></p>
			</h2>
			<h2>
				Conexões Ativas: <p></p>
			</h2>
		</>
	);
}

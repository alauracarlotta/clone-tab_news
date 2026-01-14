import { fetchAPI } from "scripts/fetchApi";
import useSWR from "swr";

export function UpdatedAt() {
	const { data, isLoading } = useSWR("/api/v1/status", fetchAPI, {
		refreshInterval: 2000,
	});

	let updatedAtText = "Carregando...";

	if (!isLoading && data) {
		updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
	}
	return (
		<div>
			<h1>Status Page</h1>
			<p>Última atualização: {updatedAtText}</p>
		</div>
	);
}

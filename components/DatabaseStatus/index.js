import { fetchAPI } from "scripts/fetchApi";
import useSWR from "swr";

export function DatabaseStatus() {
	const { data, isLoading } = useSWR("/api/v1/status", fetchAPI, {
		refreshInterval: 2000,
	});

	let databaseStatusText = "Carregando...";

	if (!isLoading && data) {
		databaseStatusText = (
			<>
				<div>Versão: {data.dependencies.database.version}</div>
				<div>
					Conexões Abertas:{" "}
					{data.dependencies.database.active_connections}{" "}
				</div>
				<div>
					Conexões Máximas:{" "}
					{data.dependencies.database.max_connections}
				</div>
			</>
		);
	}
	return (
		<>
			<h1>Database</h1>
			<div>{databaseStatusText}</div>
		</>
	);
}

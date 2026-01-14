import { useFetchAPIWithSWR } from "scripts/useSWR";

export function UpdatedAt() {
	const { data, isLoading } = useFetchAPIWithSWR("/api/v1/status");

	let updatedAtText = "Carregando...";

	if (!isLoading && data) {
		updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
	}
	return (
		<div>
			<p>Última atualização: {updatedAtText}</p>
		</div>
	);
}

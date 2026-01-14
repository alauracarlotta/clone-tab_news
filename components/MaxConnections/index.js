import { useFetchAPIWithSWR } from "scripts/useSWR";

export function MaxConnections() {
	const { data, isLoading } = useFetchAPIWithSWR("/api/v1/status");
	let maxConnections;
	if (!isLoading && data) {
		maxConnections = data.dependencies.database.max_connections;
	}
	return <>{maxConnections}</>;
}

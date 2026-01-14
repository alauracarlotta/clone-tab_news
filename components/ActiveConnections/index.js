import { useFetchAPIWithSWR } from "scripts/useSWR";

export function ActiveConnections() {
	const { data, isLoading } = useFetchAPIWithSWR("/api/v1/status");
	let activeConnections;
	if (!isLoading && data) {
		activeConnections = data.dependencies.database.active_connections;
	}
	return <>{activeConnections}</>;
}

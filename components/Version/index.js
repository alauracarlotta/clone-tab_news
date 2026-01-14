import { useFetchAPIWithSWR } from "scripts/useSWR";

export function Version() {
	const { data, isLoading } = useFetchAPIWithSWR("/api/v1/status");
	let version;
	if (!isLoading && data) {
		version = data.dependencies.database.version;
	}
	return <>{version}</>;
}

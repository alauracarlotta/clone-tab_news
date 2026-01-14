import { fetchAPI } from "scripts/fetchApi";
import useSWR from "swr";

export function useFetchAPIWithSWR(key) {
	const { data, isLoading } = useSWR(key, fetchAPI, {
		// refreshInterval: 2000,
	});

	return { data, isLoading };
}

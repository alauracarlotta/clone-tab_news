export async function fetchAPI(key) {
	const response = await fetch(key);
	const responseBody = await response.json();
	return responseBody;
}

import retry from "async-retry";

const webServerURL = "http://localhost:3000";

async function waitForAllServices() {
	await waitForWebServer();

	async function waitForWebServer() {
		return retry(fetchStatusPage, {
			retries: 100,
		});

		async function fetchStatusPage() {
			const response = await fetch(`${webServerURL}/api/v1/status`);
			const responseBody = await response.json();
		}
	}
}

export default {
	waitForAllServices,
	webServerURL,
};

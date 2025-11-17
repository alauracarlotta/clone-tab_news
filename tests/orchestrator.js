import retry from "async-retry";

const webServerURL = "http://localhost:3000";

async function waitForAllServices() {
	await waitForWebServer();

	async function waitForWebServer() {
		return retry(fetchStatusPage, {
			retries: 100,
			maxTimeout: 1000,
		});

		async function fetchStatusPage(bail, tryNumber) {
			// console.log(bail);
			console.log(tryNumber);

			const response = await fetch(`${webServerURL}/api/v1/status`);
			const responseBody = await response.json();
		}
	}
}

export default {
	waitForAllServices,
	webServerURL,
};

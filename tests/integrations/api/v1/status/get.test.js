import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
	await orchestrator.waitForAllServices();
}, 60000);

describe("GET /api/v1/status", () => {
	describe("Anonymous user", () => {
		test("Retriving current system status", async () => {
			const response = await fetch("http://localhost:3000/api/v1/status");
			expect(response.status).toBe(200);

			const responseBody = await response.json();
			const parsedUpdateAt = new Date(
				responseBody.updated_at,
			).toISOString();

			expect(responseBody.updated_at).toBeDefined();
			expect(responseBody.updated_at).toEqual(parsedUpdateAt);

			expect(responseBody.dependencies.database.version).toBeDefined();
			expect(responseBody.dependencies.database.version).toEqual("16.10");

			expect(
				responseBody.dependencies.database.max_connections,
			).toBeDefined();
			expect(responseBody.dependencies.database.max_connections).toEqual(
				100,
			);

			expect(
				responseBody.dependencies.database.active_connections,
			).toBeDefined();
			expect(
				responseBody.dependencies.database.active_connections,
			).toEqual(1);
		});
	});
});

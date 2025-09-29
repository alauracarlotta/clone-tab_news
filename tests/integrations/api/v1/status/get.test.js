test("GET to /api/v1/status should return 200", async () => {
	const base_url = process.env.BASE_URL || "http://localhost:3000";
	const response = await fetch(`${base_url}/api/v1/status`);
	expect(response.status).toBe(200);

	const responseBody = await response.json();
	const parsedUpdateAt = new Date(responseBody.updated_at).toISOString();

	expect(responseBody.updated_at).toBeDefined();
	expect(responseBody.updated_at).toEqual(parsedUpdateAt);

	expect(responseBody.dependencies.database.version).toBeDefined();
	expect(responseBody.dependencies.database.version).toEqual("16.10");

	expect(responseBody.dependencies.database.max_connections).toBeDefined();
	expect(responseBody.dependencies.database.max_connections).toEqual(100);

	expect(responseBody.dependencies.database.active_connections).toBeDefined();
	expect(responseBody.dependencies.database.active_connections).toEqual(1);
});

test.only("Test SQL Injection", async () => {
	const base_url = process.env.BASE_URL || "http://localhost:3000";
	const response = await fetch(
		`${base_url}/api/v1/status?databaseName='; SELECT pg_sleep(4); --`,
	);
});

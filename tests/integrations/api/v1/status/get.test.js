test("GET to /api/v1/status should return 200", async () => {
	const base_url = process.env.BASE_URL || "http://localhost:3000";
	const response = await fetch(`${base_url}/api/v1/status`);
	expect(response.status).toBe(200);

	const responseBody = await response.json();
	const parsedUpdateAt = new Date(responseBody.updated_at).toISOString();

	expect(responseBody.updated_at).toBeDefined();
	expect(responseBody.updated_at).toEqual(parsedUpdateAt);

	expect(responseBody.database_version).toBeDefined();
	expect(responseBody.database_version).toContain("PostgreSQL");

	expect(responseBody.max_connections).toBeDefined();
	expect(Number(responseBody.max_connections)).toBeGreaterThan(0);

	expect(responseBody.active_connections).toBeDefined();
	expect(Number(responseBody.active_connections)).toBeGreaterThanOrEqual(1);

	// console.log(response);
});

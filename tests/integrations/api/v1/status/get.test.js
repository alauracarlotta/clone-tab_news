test("GET to /api/v1/status should return 200", async () => {
	const base_url = process.env.BASE_URL || "http://localhost:3000";
	const response = await fetch(`${base_url}/api/v1/status`);
	expect(response.status).toBe(200);

	const responseBody = await response.json();
	expect(responseBody.updated_at).toBeDefined();

	const parsedUpdateAt = new Date(responseBody.updated_at).toISOString();
	expect(responseBody.updated_at).toEqual(parsedUpdateAt);
});

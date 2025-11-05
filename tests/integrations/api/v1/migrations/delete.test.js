import database from "infra/database";

beforeAll(cleanDatabase);

async function cleanDatabase() {
	await database.query("drop schema public cascade; create schema public;");
}

test("DELETE to /api/v1/migrations should return 200", async () => {
	console.log("*** DELETE ***");
	const response = await fetch("http://localhost:3000/api/v1/migrations", {
		method: "DELETE",
	});

	expect(response.status).toBe(200);
});

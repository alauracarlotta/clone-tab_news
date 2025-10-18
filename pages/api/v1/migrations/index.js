import migrationRunner from "node-pg-migrate";
import { join } from "path";

export default async function migrations(request, response) {
	// controller
	const defaultMigrationsConfig = {
		databaseUrl: process.env.DATABASE_URL,
		dryRun: true,
		dir: join("infra", "migrations"),
		direction: "up",
		verbose: true,
		migrationsTable: "pgmigrations",
	};

	if (request.method === "GET") {
		const pendingMigrations = await migrationRunner(
			defaultMigrationsConfig,
		);
		/* view */
		await response.status(200).json(pendingMigrations);
	}

	if (request.method === "POST") {
		const migratedMigrations = await migrationRunner({
			...defaultMigrationsConfig,
			dryRun: false,
		});
		/* view */
		if (migratedMigrations.length > 0) {
			await response.status(201).json(migratedMigrations);
		}
		await response.status(200).json(migratedMigrations);
	}

	return response.status(405).end();
}

import migrationRunner from "node-pg-migrate";
import { join } from "path";
import database from "infra/database";

export default async function migrations(request, response) {
	// controller
	const dbClient = await database.getNewClient();
	const defaultMigrationsConfig = {
		dbClient: dbClient,
		dryRun: true,
		dir: join(process.cwd(), "infra", "migrations"),
		direction: "up",
		verbose: true,
		migrationsTable: "pgmigrations",
	};

	try {
		if (request.method === "GET") {
			const pendingMigrations = await migrationRunner(
				defaultMigrationsConfig,
			);
			/* view */
			await dbClient.end();
			await response.status(200).json(pendingMigrations);
		}

		if (request.method === "POST") {
			const migratedMigrations = await migrationRunner({
				...defaultMigrationsConfig,
				dryRun: false,
			});

			/* view */
			await dbClient.end();

			if (migratedMigrations.length > 0) {
				await response.status(201).json(migratedMigrations);
			}
			await response.status(200).json(migratedMigrations);
		}

		if (request.method === "DELETE") {
			const pendingMigrations = await migrationRunner(
				defaultMigrationsConfig,
			);
			/* view */
			await dbClient.end();
			await response.status(200).json(pendingMigrations);
		}
	} catch (error) {
		console.error(error);
		throw error;
	} finally {
		await dbClient.end();
	}

	// return response.status(405).end();
}

import database from "infra/database.js";

export default async function status(request, response) {
	const getDatabaseVersion = await database.query("SHOW server_version;");
	const getMaxConnection = await database.query("SHOW max_connections;");

	const databaseName = process.env.POSTGRES_DB;
	const getActiveConnections = await database.query({
		text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
		values: [databaseName],
	});

	// controller
	const updatedAt = new Date().toISOString();
	const resultDatabaseVersion = getDatabaseVersion.rows[0].server_version;
	const resultMaxConnetions = getMaxConnection.rows[0].max_connections;
	const resultActiveConnections = getActiveConnections.rows[0].count;

	await response.status(200).json({
		// view
		updated_at: updatedAt,
		dependencies: {
			database: {
				version: resultDatabaseVersion,
				max_connections: parseInt(resultMaxConnetions),
				active_connections: resultActiveConnections,
			},
		},
	});
}

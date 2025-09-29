import database from "infra/database.js";

export default async function status(request, response) {
	const getDatabaseVersion = await database.query("SHOW server_version;");
	const getMaxConnection = await database.query("SHOW max_connections;");
	const getActiveConnections = await database.query(
		"SELECT count(*) AS total FROM pg_stat_activity;",
	);
	// console.log(getActiveConnections.rows[0].total);

	// controller
	const updatedAt = new Date().toISOString();
	const resultDatabaseVersion = getDatabaseVersion.rows[0].server_version;
	const resultMaxConnetions = getMaxConnection.rows[0].max_connections;
	const resultActiveConnections = getActiveConnections.rows[0].total;

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

import database from "infra/database.js";

export default async function status(request, response) {
	const getDatabaseVersion = await database.query("SELECT version();");
	const getMaxConnection = await database.query("SHOW max_connections;");

	// console.log(getMaxConnection.rows[0].max_connections);

	// controller
	const updatedAt = new Date().toISOString();
	const resultDatabaseVersion = getDatabaseVersion.rows[0].version;
	const resultMaxConnetions = getMaxConnection.rows[0].max_connections;

	await response.status(200).json({
		// view
		updated_at: updatedAt,
		database_version: resultDatabaseVersion,
		max_connections: resultMaxConnetions,
	});
}

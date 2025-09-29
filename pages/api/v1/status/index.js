import database from "infra/database.js";

export default async function status(request, response) {
	const getDatabaseVersion = await database.query("SELECT version()");

	// controller
	const updatedAt = new Date().toISOString();
	const resultDatabaseVersion = getDatabaseVersion.rows[0].version;

	await response.status(200).json({
		// view
		updated_at: updatedAt,
		database_version: resultDatabaseVersion,
	});
}

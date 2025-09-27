import database from "infra/database.js";

export default async function status(request, response) {
	// controller
	const updatedAt = new Date().toISOString();

	await response.status(200).json({
		// view
		updated_at: updatedAt,
	});
}

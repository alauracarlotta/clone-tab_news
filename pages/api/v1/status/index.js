import database from "infra/database.js";

export default async function status(request, response) {
	// controller
	const updatedAt = Date.now();

	await response.status(200).json({
		// view chave api rest (snake_case)
		updated_at: updatedAt,
	});
}

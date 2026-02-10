export class InternalServerError extends Error {
	constructor({ cause }) {
		super("Um erro interno não esperado", { cause });
		// this.name = "InternalServerError";
	}
}

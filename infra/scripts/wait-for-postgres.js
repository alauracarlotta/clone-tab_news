const { exec } = require("node:child_process");

function checkPostgresUp() {
	exec(`docker exec postgres-dev pg_isready --host localhost`, handleReturn);

	function handleReturn(error, stdout) {
		if (stdout.search("accepting connections") === -1) {
			process.stdout.write(".");
			checkPostgresUp();
			return;
		}

		console.log("\n🟢 Postgres está pronto e aceitando conexões!\n");

		// console.log(`Output: ${stdout}`);
	}
}

process.stdout.write("\n🔴 Aguardando Postgres aceitar conexões.\n");

checkPostgresUp();

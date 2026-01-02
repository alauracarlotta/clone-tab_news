const { spawn } = require("child_process");

let shuttingDown = false;

function run(command, args = []) {
	return spawn(command, args, {
		stdio: "inherit",
		shell: true,
	});
}

function shutdown(code = 0) {
	if (shuttingDown) return;
	shuttingDown = true;

	console.log("\n🛑 Recebi sinal, executando postdev...");
	const postdev = run("npm", ["run", "postdev"]);

	postdev.on("exit", () => {
		process.exit(code);
	});
}

// Escuta sinais
["SIGINT", "SIGTERM", "SIGQUIT"].forEach((signal) => {
	process.on(signal, () => shutdown(0));
});

// Se o processo cair por erro
process.on("uncaughtException", (err) => {
	console.error("💥 Erro:", err);
	shutdown(1);
});

// Inicia o Next
const dev = run("next", ["dev"]);

dev.on("exit", (code) => shutdown(code));

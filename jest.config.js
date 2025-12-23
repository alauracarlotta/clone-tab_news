const dotEnv = require("dotenv");
dotEnv.config({
	path: ".env.development",
});

const nextJest = require("next/jest");

const createJestConfig = nextJest({
	dir: ".",
});

const TIMEOUT_IN_MILLISECONDS = 120000;
const jestConfig = createJestConfig({
	moduleDirectories: ["node_modules", "<rootDir>"],
	testTimeout: TIMEOUT_IN_MILLISECONDS,
});

module.exports = jestConfig;

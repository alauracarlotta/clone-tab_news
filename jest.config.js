const nextJest = require("next/jest");

const createJestConfig = nextJest();
console.log("createJest", createJestConfig);

const jestConfig = createJestConfig({
	moduleDirectories: ["node_modules", "<rootDir>"],
});
console.log("jestConfig", jestConfig);

module.exports = jestConfig;

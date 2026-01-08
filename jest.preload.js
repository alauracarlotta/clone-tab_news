const originalLog = console.log;

console.log = (...args) => {
	if (typeof args[0] === "string" && args[0].startsWith("[dotenv@")) {
		return;
	}

	originalLog(...args);
};

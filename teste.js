try {
	const error = new Error();
	throw error;
} catch (error) {
	console.log(error.name);
	console.log(typeof error.stack);
	console.log(typeof error);
}

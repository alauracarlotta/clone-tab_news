function somar(number1, number2) {
	if (typeof number1 !== "number" || typeof number2 !== "number") {
		return "Erro";
	}
	return number1 + number2;
}

exports.somar = somar;

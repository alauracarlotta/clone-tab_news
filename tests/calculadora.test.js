const calculadora = require("../models/calculadora.js");

test("2 + 2 = 4", () => {
	const result = calculadora.somar(2, 2);
	expect(result).toBe(4);
});

test("5 + 5 = 10", () => {
	const result = calculadora.somar(5, 5);
	expect(result).toBe(10);
});

test("'banana' + 10 = 'Erro'", () => {
	const result = calculadora.somar("banana", 10);
	expect(result).toBe("Erro");
});

test("10 + banana = 'Erro'", () => {
	const result = calculadora.somar(10, "banana");
	expect(result).toBe("Erro");
});

test("Se null = 'Erro'", () => {
	const result = calculadora.somar();
	expect(result).toBe("Erro");
});

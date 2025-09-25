// /api/status
// qual função do arquivo tem essa responsabilidade?

export default function status(request, response) {
	// response.status(200).send("Eu mesma, a Laura Carlotta");

	return response.status(200).json({ chave: "valor" });
}

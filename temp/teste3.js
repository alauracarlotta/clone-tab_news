// ! Teste1
// revert to rash d9148ed > commit-msg (add file) > .czrc (add file) > package.json (remove code)

// ! Teste2
// add file './husky/prepare-commit-msg' > exec < /dev/tty && npx cz --hook || true
// [bash] chmod +x .husky/prepare-commit-msg

// ! Teste3
// [ERROR] >>> APÓS PERGUNTA FINAL, O GIT ABRE A MENSAGEM DE COMMIT

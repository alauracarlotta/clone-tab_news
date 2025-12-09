// ! Teste1
// revert to rash d9148ed > commit-msg (add file) > .czrc (add file) > package.json (remove code)

// ! Teste2
// add file './husky/prepare-commit-msg' > exec < /dev/tty && npx cz --hook || true
// [bash] chmod +x .husky/prepare-commit-msg

// ! Teste3
// [ERROR] >>> APÓS PERGUNTA FINAL, O GIT ABRE A MENSAGEM DE COMMIT
// add file 'temp/teste3.js'
// git commit --amend > abre o menu e a mensagem de commit.

// ! Teste4
// TODO:
// >>> Cenário:
// ....* Novos arquivos para add

// .... [ ] Se eu dou um GIT COMMIT => Abre o menu do Commitizen
// .... .... NÃOOOOO abre a mensagem de editar commit no final

// .... [ ] Se eu dou um GIT COMMIT --AMEND => NÃOOOOO abre o menu do Commitizen
// .... .... ABREEEEE a última msg de commit para eu editar

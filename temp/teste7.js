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

// .... [X] Se eu dou um GIT COMMIT --AMEND => NÃOOOOO abre o menu do Commitizen
// .... .... ABREEEEE a última msg de commit para eu editar

// ! Teste5
// Does this change affect any open issues ? No
// Com o script do prepare - commit - msg, está funcionando perfeitamente no git commit--amend.
// Não abre o menu do Commitizen e vai direto para a mensagem do último commit.Com

// ! Teste6
// Deverá continuar a abrir o menu do commitizen quando dermos git commit e NÃO ABRIR A MENSAGEM DE COMMIT APÓS ISSO.

// ! Teste7
// npx commitlint --edit "$1" --quiet 2>/dev/null

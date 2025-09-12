# 🧾 Conventional Commits — Guia Bilíngue

Seguir esse padrão mantém o histórico limpo, ajuda na colaboração e ainda gera changelogs automáticos 🚀  

---

## 🎉 feat — funcionalidade / feature

- **PT-BR:** Adicionar uma nova funcionalidade perceptível pelo usuário  
- **EN:** Add a new feature visible to the user  
- **Exemplos:**  
  - `feat(auth): add login with Google`  
  - `feat(theme): implement dark mode`  

---

## 🐛 fix — correção / bug fix

- **PT-BR:** Corrigir um bug ou comportamento inesperado  
- **EN:** Fix a bug or unexpected behavior  
- **Exemplos:**  
  - `fix(cart): prevent crash when removing last item`  
  - `fix(api): handle 500 errors correctly`  

---

## 💅 style — estilo / formatting

- **PT-BR:** Mudanças de estilo e formatação, sem lógica envolvida  
- **EN:** Changes in style/formatting, no logic involved  
- **Exemplos:**  
  - `style(code): format files with Prettier`  
  - `style(button): fix padding on mobile`  

---

## 🔨 refactor — refatoração / refactor

- **PT-BR:**
- **EN:** Improve code without changing behavior  
- **Exemplos:**  
  - `refactor(user-service): simplify email validation`  
  - `refactor(cart): extract helper function`  

---

## ⚡ perf — performance / performance

- **PT-BR:** Melhorar desempenho sem alterar funcionalidade  
- **EN:** Improve performance without changing functionality  
- **Exemplos:**  
  - `perf(image): optimize thumbnail loading`  
  - `perf(api): reduce DB queries`  

---

## 🔧 chore — manutenção / chores

- **PT-BR:** Configurações, dependências ou tarefas internas  
- **EN:** Configs, dependencies or internal tasks  
- **Exemplos:**  
  - `chore(config): add .editorconfig and .prettierrc`  
  - `chore(docker): add Docker support`  

---

## 📖 docs — documentação / documentation

- **PT-BR:** Mudanças apenas na documentação  
- **EN:** Changes only in documentation  
- **Exemplos:**  
  - `docs(readme): update installation steps`  
  - `docs(api): add usage examples`  

---

## 🧪 test — testes / tests

- **PT-BR:** Adicionar ou corrigir testes  
- **EN:** Add or fix tests  
- **Exemplos:**  
  - `test(auth): add unit tests for login`  
  - `test(cart): fix failing removeItem tests`  

---

## 🏗 build — build / build system

- **PT-BR:** Alterações no sistema de build ou dependências  
- **EN:** Changes in build system or dependencies  
- **Exemplos:**  
  - `build(deps): update React to v18`  
  - `build(webpack): enable code splitting`  

---

## 🤖 ci — integração contínua / continuous integration

- **PT-BR:** Mudanças em pipelines de CI/CD  
- **EN:** Changes in CI/CD pipelines  
- **Exemplos:**  
  - `ci(github-actions): add release workflow`  
  - `ci(travis): fix node version`  

---

## ⏪ revert — reverter / revert

- **PT-BR:** Reverter um commit anterior  
- **EN:** Revert a previous commit  
- **Exemplo:**  
  - `revert: feat(auth): add login with Google`  

---

## 💥 BREAKING CHANGE — alteração crítica / breaking change

- **PT-BR:** Alteração que quebra compatibilidade → gera versão major  
- **EN:** Breaking change → requires a major version bump  
- **Exemplo:**  
  - `feat!: remove legacy payment method`  
  - `BREAKING CHANGE: API v1 removed`  

---

👉 **Resumo mental:**  

- Nova funcionalidade → `feat`  
- Corrigir bug → `fix`  
- Só cosmético → `style`  
- Melhorar código sem mudar comportamento → `refactor`  
- Configuração/manutenção → `chore`  
- Documentação → `docs`  
- Performance → `perf`  
- Testes → `test`  

# Testes de Aceitação com Cypress

Esta pasta contém os testes de aceitação automatizados para o projeto Adote Fácil, desenvolvidos com o framework Cypress.

---

## 🚀 Como Executar os Testes

Siga os passos abaixo para executar os testes.

### Pré-requisitos

1.  **Node.js e NPM:** Certifique-se de que tem o Node.js e o NPM instalados.
2.  **Aplicação em Execução:** O frontend e o backend do Adote Fácil devem estar em execução. A forma mais fácil de o fazer é através do Docker:
    ```bash
    docker-compose up
    ```

### Instalação

Se for a primeira vez que executa os testes, instale as dependências do Cypress:

```bash
npm install
```

### Execução dos Testes

#### 1. Modo Interativo

Este modo abre a interface gráfica do Cypress, onde pode ver os testes a serem executados em tempo real, depurar e selecionar testes específicos para executar.

```bash
npx cypress open

```
#### 2. Modo Headless

Este modo executa todos os testes em segundo plano, diretamente no terminal, sem abrir uma janela do navegador.

```bash
npx cypress run
```
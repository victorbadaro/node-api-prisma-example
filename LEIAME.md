# node-api-prisma-example

[![README.md](https://img.shields.io/badge/-Read%20in%20English-brightgreen?style=for-the-badge)](./README.md)

## Índice
- [🧾 Sobre o projeto](#-sobre-o-projeto)
- [🚀 Principais tecnologias](#-principais-tecnologias)
- [💻 Como usar](#-como-usar)
- [👌 Requisições](#-requisições)

## 🧾 Sobre o projeto
Este projeto foi feito para ser um simples exemplo de uma aplicação back-end usando o Prisma ORM

## 🚀 Principais tecnologias
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Typescript](https://www.typescriptlang.org/)

_(Você pode ver todas as dependências do projeto no arquivo [package.json](./package.json))_

## 💻 Como usar
Como você pode ver no tópico [🚀 Principais tecnologias](#-principais-tecnologias), esta aplicação depende de um banco de dados PostgreSQL, então você deve tê-lo instalado.

1. Faça o clone do projeto (você vai precisar de um [personal access token](https://docs.github.com/pt/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls)):
   ```bash
    $ git clone https://github.com/victorbadaro/node-api-prisma-example.git
   ```

2. Acesse o diretório correspondente:
   ```bash
   $ cd node-api-prisma-example
   ```

3. Instale as dependências:
   ```bash
   $ yarn
   # sinta-se livre para usar outro gerenciador de pacotes, mas talvez você queira usar o yarn uma vez que já existe um arquivo yarn.lock na raíz do projeto
   ```

4. Crie um arquivo `.env` na raíz do projeto com o mesmo conteúdo que está no arquivo [.env.example](./.env.example) e preencha as variáveis com os seus dados (a variável `DATABASE_URL` deve estar em um [formato específico](https://www.prisma.io/docs/concepts/database-connectors/postgresql#connection-details)):<br />
   Por exemplo:<br />
   ![image](https://github.com/victorbadaro/node-api-prisma-example/assets/9096344/4f17cb5d-2929-49b2-895e-a1a23235028f)

5. Execute todas as _migrations_ para criar as relações no banco de dados:
   ```bash
   $ yarn prisma migrate dev
   ```

6. Inicie o servidor executando o script `dev`:
   ```bash
   yarn dev
   ```

## 👌 Requisições
Agora o servidor está pronto para receber suas requisições! Tem uma [request collection](./request_collection.json) na raíz do projeto para que você possa usar (utilize o [insomnia](https://insomnia.rest/) para importar a collection). Lembre-se de informar a porta do servidor na variável de ambiente `baseUrl`!<br />
Aqui estão as requisições que você pode fazer:

- GET /users
- POST /users
  ```json
  {
    "name": "",
    "email": ""
  }
  ```
- GET /users/:id
- PUT /users/:id
  ```json
  {
    "name": "",
    "email": ""
  }
  ```
- DELETE /users/:id

- GET /products
- POST /products
  ```json
  {
    "description": "",
    "user_id": 
  }
  ```
- GET /products/:id
- PUT /products/:id
  ```json
  {
    "description": "" 
  }
  ```
- DELETE /products/:id

---

<p align="center">Este projeto foi criado e desenvolvido com ❤ por <a href="https://github.com/victorbadaro">Victor Badaró</a></p>
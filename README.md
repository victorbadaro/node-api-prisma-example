# node-api-prisma-example

[![LEIAME.md](https://img.shields.io/badge/-Leia%20em%20Portugu%C3%AAs-brightgreen?style=for-the-badge)](./LEIAME.md)

## Summary
- [🧾 About](#-about)
- [🚀 Main technologies](#-main-technologies)
- [💻 Usage](#-usage)
- [👌 Requests](#-requests)

## 🧾 About
This project was made to be a simple example of a back-end application using the Sequelize ORM

## 🚀 Main technologies
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Typescript](https://www.typescriptlang.org/)

_(You can see all the dependencies in the [package.json](./package.json) file)_

## 💻 Usage
As you can see on [🚀 Main technologies](#-main-technologies) topic, this application depends on a postgreSQL database, so you must have it installed.<br />
First things first:

1. Clone the project (you'll need a [personal access token](https://docs.github.com/pt/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls)):
   ```bash
   $ git clone https://github.com/victorbadaro/node-api-prisma-example.git
   ```

2. Access its directory:
   ```bash
   $ cd node-api-prisma-example
   ```

3. Install its dependencies:
   ```bash
   $ yarn
   # feel free to use another package manager, but you might want use yarn once there's already a yarn.lock file in the root directory
   ```

4. Create a `.env` file in the root directory with the same content that is in the [.env.example](./.env.example) file and fill the variables with your own data:<br />
   For example:<br />
   ![image](https://github.com/victorbadaro/node-api-prisma-example/assets/9096344/4f17cb5d-2929-49b2-895e-a1a23235028f)

5. Create the database by running (your postgreSQL server must be running):
   ```bash
   $ yarn prisma migrate dev
   ```

6. Start the server by running the `dev` script:
   ```bash
   $ yarn dev
   ```

## 👌 Requests
Now the server is ready to receive your requests! There's a [request collection](./request_collection.json) in the root directory so you can use (use [insomnia](https://insomnia.rest/) to import the collection). Remember to inform the server port in the `baseUrl` environment variable!<br />
Here are the requests you can make:

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

<p align="center">This project was created and developed with ❤ by <a href="https://github.com/victorbadaro">Victor Badaró</a></p>

import http from "node:http"

const port = 3333

// GET => Buscar um recurso no backend
// POST => Criar um recurso no backend
// PUT => Atualizar um recurso no backend
// PATCH => Atualizar a informação específica de um recurso no backend
// DELETE => Deleter um recurso do backend

// Stateful(dados armazenados localmente) - stateless(dados armazenados em nuvem - banco de dados)

/* Status Code
  100 - 200 = informativos
  200 - 300 = mensagens de sucesso
  300 - 400 = mensagens de redirecionamento
  400 - 500 = client error
  500 - 599 = server error
*/

const users = []

const server = http.createServer((request, response) => {
  // response.writeHead(200, { "Content-Type": "text/html" })
  // response.write("<h1>Hello Worl<h1/>")

  const { method, url, headers } = request
  console.log(method, url, headers)

  if (method === "GET" && url === "/users") {
    return response
      .setHeader("Content-Type", "aplication/json")
      .end(JSON.stringify(users))
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "Gabriel Manicucci",
      email: "manicucciGBR@gmail.com"
    })

    return response.end("Usuário criado")
  }
})

server.listen(port, () =>
  console.log(`Server running in http://localhost:${port}`)
)

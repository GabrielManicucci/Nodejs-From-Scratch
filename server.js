import http from "node:http"

const port = 3333

// GET => Buscar um recurso no backend
// POST => Criar um recurso no backend
// PUT => Atualizar um recurso no backend
// PATCH => Atualizar a informação específica de um recurso no backend
// DELETE => Deleter um recurso do backend

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" })
  response.write("<h1>Hello Worl<h1/>")

  const { method, url } = request

  console.log(method, url)

  return response.end()
})

server.listen(port, () =>
  console.log(`Server running in http://localhost:${port}`)
)

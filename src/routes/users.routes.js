const { Router } = require("express")

const usersRoutes = Router()

usersRoutes.post("/", (request, response) => {
  const { name, email, password } = request.body
  /*   response.json({ name, email, password }) */
  response.send(
    `Chamou o post. Nome: ${name}, Email: ${email}, Senha: ${password}`
  )
})

module.exports = usersRoutes

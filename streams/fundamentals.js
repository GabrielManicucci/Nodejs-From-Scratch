

// Existem três formas de enviar informações através de requisições para uma API

// Query parameters(parâmetros de consulta) => requisições que enviam os parametros no corpo da url, ex: https://localhost:8080/users?userID=1&name=manicucci&age=20, serve para paginação no frontend e dados não sensíveis

// Route parameters => identificação de resurso, ex: https://localhost:8080/users/1, 

// Request body => Envio de dados sensíveis para um servidor através do corpo da requisição(protocolo HTTPs, difíceis de serem intercepatdos) , como criação de usuário que podem conter dados sensíveis como CPF, ou seja, envio de dados a partir de um formulário de login por exemplo.
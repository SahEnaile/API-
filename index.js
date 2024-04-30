const express = require('express');
const apiPost = require('./src/api/post');
const apiUser = require('./src/api/user');
const database = require('./src/config/database');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000; 

// Define as rotas
app.get('/', (req, res) => {
  res.send({ response: 'Hello World!' });
});

// Rotas para usuários
app.post('/login', apiUser.login);
app.post('/users', apiUser.criarUsuario);
app.get('/users', apiUser.listarUsuario);
app.put('/users/:id', apiUser.alterarUsuario);
app.delete('/users/:id', apiUser.deletarUsuario);

// Rotas para postagens
app.post('/posts', apiPost.criarPostagem);
app.get('/posts', apiPost.listarPostagens);
app.get('/posts/:id', apiPost.obterPostagemPorId);
app.put('/posts/:id', apiPost.atualizarPostagem);
app.delete('/posts/:id', apiPost.excluirPostagem);

// Middleware para validar token
app.use(apiUser.validarToken);

// Inicia o servidor após a sincronização do banco de dados
database.db.sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados', error);
  });

const postcontroller= require('../controllers/postcontroller');

class apiPost{
async listarPostagens(req, res) {
  try {
    const postagens = await postcontroller.listarPostagens();
    res.json(postagens);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter postagens do banco de dados' });
  }
}

async  obterPostagemPorId(req, res) {
  const { id } = req.params;

  try {
    const postagem = await  postcontroller.obterPostagemPorId(id);
    if (postagem) {
      res.json(postagem);
    } else {
      res.status(404).json({ message: 'Postagem não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter postagem do banco de dados' });
  }
}

async  criarPostagem(req, res) {
  const { titulo, conteudo, autorId } = req.body;

  try {
    const novaPostagem = await  postcontroller.criarPostagem(
      titulo,
      conteudo,
      autorId
    );
    res.status(201).json(novaPostagem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar postagem no banco de dados' });
  }
}

async atualizarPostagem(req, res) {
  const { id } = req.params;
  const { titulo, conteudo } = req.body;

  try {
    const postagemAtualizada = await postcontroller.atualizarPostagem(
      id,
      titulo,
      conteudo
    );
    if (postagemAtualizada) {
      res.json(postagemAtualizada);
    } else {
      res.status(404).json({ message: 'Postagem não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar postagem no banco de dados' });
  }
}

async  excluirPostagem(req, res) {
  const { id } = req.params;

  try {
    const result = await  postcontroller.excluirPostagem(id);
    if (result.affectedRows > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Postagem não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir postagem do banco de dados' });
  }
}

async getPostagensUsuario(req, res) {
  const { id } = req.params;

  try {
    const postagensUsuario = await  postcontroller.obterPostagensUsuario(id);
    res.json(postagensUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter postagens do usuário do banco de dados' });
  }
}
}
module.exports = new apiPost ();

const Postagem = require('../models/posts');

class postagemController {
    async criarPostagem(titulo, conteudo, autorId) {
        if (titulo === undefined || conteudo === undefined || autorId === undefined) {
            throw new Error('Título, conteúdo e ID do autor são obrigatórios');
        }

        const novaPostagem = await Postagem.create({
            titulo,
            conteudo,
            autorId,
            dataPublicacao: new Date()
        });

        return novaPostagem;
    }

    async listarPostagens() {
        const postagens = await Postagem.findAll();
        return postagens;
    }

    async obterPostagemPorId(id) {
        const postagem = await Postagem.findByPk(id);
        return postagem;
    }

    async atualizarPostagem(id, titulo, conteudo) {
        const postagem = await Postagem.findByPk(id);

        if (!postagem) {
            throw new Error('Postagem não encontrada');
        }

        postagem.titulo = titulo;
        postagem.conteudo = conteudo;
        await postagem.save();

        return postagem;
    }

    async excluirPostagem(id) {
        const result = await Postagem.destroy({ where: { id } });
        return result;
    }

    async obterPostagensUsuario(autorId) {
        const postagens = await Postagem.findAll({ where: { autorId } });
        return postagens;
    }
}

module.exports = new postagemController();

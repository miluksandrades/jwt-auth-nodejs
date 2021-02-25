const knex = require("../connection")
require('dotenv/config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    async getUsuarios(req, res) {
        const resultado = await knex('usuarios').select('*').orderBy('nome', 'asc');

        return res.json(resultado);
    },

    async getUsuarioById(req, res) {
        const {
            id
        } = req.params;

        const resultado = await knex('usuarios').select('*').where('id', '=', id);

        return res.json(resultado);
    },

    async createUsuario(req, res) {
        const {
            nome,
            email,
            pass,
            setor
        } = req.body;

        const resultado = await knex('usuarios').select('*').where('email', '=', email)

        if (resultado.length > 0) {
            return res.status(409).send({
                mensagem: "Usuario já registrado"
            })
        } else {
            bcrypt.hash(pass, 10, async (err, hash) => {
                if (err) {
                    return res.status(401).json(err)
                }

                const usuario = [{
                    nome: nome,
                    email: email,
                    senha: hash,
                    setor: setor
                }]

                await knex('usuarios').insert(usuario).then(() => {
                    return res.status(200).json({
                        mensagem: "Inserido com sucesso",
                        email: email
                    });
                });
            })
        }
    },

    async updateUser(req, res){
        const {id} = req.params;
        const {nome, email, setor} = req.body;

        const result = await knex('usuarios').select('*').where('id', id);

        if(result.length < 1){
            return res.status(404).send({mensagem: 'Usuario não encontrado'});
        }

        try{
            await knex('usuarios').where('id', id).update({
                nome, email, setor
            })

            return res.status(200).send({mensagem: 'Usuario Atualizado'})
        } catch (err) {
            return res.status(400).send({mensagem: 'Não Executar a ação. Erro: '+err})
        }
    },

    async deleteUser(req, res) {
        const {
            id
        } = req.params;

        const busca = await knex('usuarios').select('*').where('id', '=', id);

        if (busca.length < 1) {
            return res.status(404).send({
                mensagem: 'Usuario não encontrado'
            });
        }

        await knex('usuarios').where('id', id).delete();

        return res.status(200).send({
            mensagem: 'Usuario Excluido com sucesso'
        });
    },

    async login(req, res) {
        const {
            email,
            pass
        } = req.body;

        const resultado = await knex('usuarios').select('*').where('email', '=', email);

        if (resultado < 1) {
            return res.status(401).send({
                mensagem: 'Erro de Autencicação'
            });
        }

        bcrypt.compare(pass, resultado[0].senha, (err, result) => {
            if (err) {
                return res.status(401).send({
                    mensagem: 'Erro de Autenticação'
                });
            }

            if (result) {
                const token = jwt.sign({
                    id: resultado[0].id,
                    email: resultado[0].email
                }, process.env.JWT_KEY, {
                    expiresIn: "1h"
                })
                return res.status(200).send({
                    "Authorization": token,
                    "Nome": resultado[0].nome,
                    "Id": resultado[0].id
                });
            }

            return res.status(401).send({
                mensagem: 'Erro de Autenticação'
            });
        })

    }
}
// importando o axios para fazer as requisições no jason-server
const axios = require("axios");

const BASEURL = "http://localhost:5000/personal_data/"
// a variáverl return_obj é utilizada para  reseber o retorno
// da requisição feita no json-server via response
var return_obj = {}

/* Essas funções são invocadas pelo arquivo routers.js
Para cada endpoint uma requisição ao jsonserver é feita e esta requisição
pode ser do tipo get, post, put e delete. Os endpoint são criados no arquivo
routers.js juntamente com o method de requisição. É utilizado do axios para fazer
a conexão com o banco de dados
*/

module.exports = {
    getAll: async (req, res) => {
        try {
            await axios.get(`${BASEURL}`)
            .then((response) => {
                return_obj = response.data
            })
            return res.send({
                return_obj
            })
            
        } catch (error) {
            res.send({error: error.message});
        }
    },


    getId: async (req, res) => {
        const { id } = req.params;
        try {
           await axios.get(`${BASEURL}/${id}`)
            .then((response) => {
                return_obj = response.data
            });
            return res.send({
                return_obj
            });
        } catch (error) {
            res.send({error: error.message});
        }
    },


    newRegister: async (req, res) => {
        values = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        }
        try {
           await axios.post(`${BASEURL}`, values)
            .then((response) => {
                 return_obj = response.data
        });
            return res.send(
                return_obj        
            );
        } catch (error) {
                res.send({error: error.message});
        }
    },


    



    deleteRegister: async (req, res) => {
        const { id } = req.params;
        try {
           await axios.delete(`${BASEURL}/${id}`)
            .then((response) => {
                return res.send({
                    mensagem: "Deletado com sucesso"
                });
        })
            
        } catch (error) {
                res.send({error: error.message});
        }
    },




    editRegister: async (req, res) => {
        const { id } = req.params;
      
        values = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        }
        try{
            await axios.put(`${BASEURL}/${id}`, values)
                .then((response) => {
                    return_obj = response.data
                });

                return res.send(return_obj)
            
        } catch (error) {
            res.send({error: error.message});
        }
    },

}
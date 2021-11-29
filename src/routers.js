/*
O arquivo de rotas é como se fosse um switch. Ele verifica os endpoints e encaminha para o controller
para que seja tomada as ações necessárias conforme cada endpoint e com base no methodo solicitado
router faz parte do framework express que também é importado no arquivo server.
*/

const express = require('express');
const router = express.Router();

const PersonalController = require('./controllers/personalDataController');

router.get('/ping', (req, res) => {
    res.json({pong: true});
});

router.get('/', (req, res) => {
    res.sendFile (__dirname+"/templates/index.html");
});

router.post('/teste', (req, res)=>{
    console.log(req.body);
});

router.get("/get-all", PersonalController.getAll);
router.get("/get-id/:id", PersonalController.getId);
router.post("/new-register", PersonalController.newRegister);
router.put("/edit-register/:id", PersonalController.editRegister);
router.delete("/delete-register/:id", PersonalController.deleteRegister);

module.exports = router;
const express = require('express');
const router = express.Router();
const pagar = require('../models/models')

//rota de get
router.get('/get', (res,req) =>{
    req.send('Rota get ok');
});

//rota 


router.post('/post', (res,req) =>{
let {nome, valor} =req.body;

pagar.create({
    nome,valor
})
.then(() => res.send('ok'))


});

module.exports = router;
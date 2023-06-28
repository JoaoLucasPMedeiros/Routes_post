const express = require('express');
const router = express.Router();
const pagar = require('../models/models')
const bodyParser = require('body-parser');

//rota de get
router.get('/get', (res,req) =>{
    req.send('Rota get ok');
});

//rota 

router.post('/post', (res,req)=>{

   
    pagar.create({
        
        nome: req.body,
        valor: req.body
    })


    .then(()=>{
        req.send('Ok')
    })
    .catch((error) =>{
        req.send(`Erro no post ${error}`)
    })
});


module.exports = router;
const express = require('express');
const router = express.Router();
const pagar = require('../models/models')


//rota de get
router.get('/get', (res,req) =>{
    req.send('Rota get ok');
});



router.post('/post', (req, res) => {
    const { nome, valor } = req.body; // Acessa as propriedades corretas do req.body
  
    pagar.create({
      nome: nome, // Atribui o valor corretamente
      valor: valor, // Atribui o valor corretamente
    })
      .then(() => {
        res.redirect('/');
      })
      .catch((error) => {
        res.send(`Erro no post ${error}`);
      });
  });
  

module.exports = router;
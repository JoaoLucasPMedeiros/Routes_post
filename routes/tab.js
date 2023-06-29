const express = require('express');
const router = express.Router();
const pagar = require('../models/models')


//rota de get
router.get('/get', (res,req) =>{
    req.send('Rota get ok');
});


//rota que add no banco 
router.post("/post" , (req,res) =>{
  const {nome, valor} = req.body;


  pagar.create({
    nome:nome,
    valor:valor
  })
  .then(()=>{
    res.send('DADOS INSERIDOS COM SUCESSO')
  })
  .catch((error)=>{
    console.log(`erro na rota post ${error}`)
  })


});
  

module.exports = router;
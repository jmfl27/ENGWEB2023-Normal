var express = require('express');
var router = express.Router();
var Planta = require('../controllers/planta')

router.get('/plantas/freguesias', function(req, res, next) {
  Planta.getAllFreguesias()
    .then(plantas => {
      res.jsonp(plantas)
    })
    .catch(erro => {
      console.log("Erro na obtenção da lista de plantas: " + erro)
    })
});

router.get('/plantas/especies', function(req, res, next) {
  Planta.getAllEspecie()
  .then(plantas => {
    res.jsonp(plantas)
  })
  .catch(erro => {
    res.jsonp({error: erro, message: "Erro na obtenção da lista de plantas "})
  })
});

router.get('/plantas/:id', function(req, res, next) {
  Planta.getPlanta(req.params.id)
    .then(planta=>{
      res.jsonp(planta)
    })
    .catch(erro=>{
      res.jsonp({error:erro, message:"Erro na obtencao da planta"})
    })
});

router.get('/plantas', function(req, res, next) {
  if(req.query.especie){
    Planta.getEspecie(req.query.especie)
      .then(plantas =>{
        res.jsonp(plantas)
      })
      .catch(erro=>{
        res.jsonp({error:erro, message:"Erro na obtencao da lista de plantas"})
    })
    
  } else if(req.query.implant){
      Planta.getImplantacao(req.query.implant)
        .then(plantas =>{
          res.jsonp(plantas)
        })
        .catch(erro=>{
          res.jsonp({error:erro, message:"Erro na obtencao da lista de plantas"})
      })

  } else {
      Planta.list()
        .then(plantas  => {
          res.json(plantas)
        })
        .catch(erro => {
          res.jsonp({error: erro, message: "Erro na obtenção da lista de plantas "})
      })
  }
  
});

router.post('/plantas', function(req, res, next) {
  Planta.addPlanta(req.body)
    .then(Planta => {
      res.jsonp(Planta)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na inserção da Planta"})
    })
});

router.delete('/plantas/:id', function(req, res) {
  Planta.deletePlanta(req.params.id)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na eliminacao de um Planta"})
    })
})

module.exports = router;
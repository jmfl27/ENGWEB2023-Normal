var express = require('express');
var router = express.Router();
var axios = require('axios')

router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0,16)
  axios.get('http://localhost:15030/plantas')
    .then(resposta =>{
      res.render('index', { plantas:resposta.data, d:data});
    })
    .catch(erro =>{
      res.render('error',{error:erro})
    })
});


router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0,16)
  axios.get('http://localhost:15030/plantas/' + req.params.id)
    .then(resposta => {
        res.render('planta', {d:data, planta:resposta.data})
    })
    .catch(erro =>{
      res.render('error',{error:erro})
    })
});

router.get('/especies/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0,16)
  axios.get('http://localhost:15030/plantas?especie=' + req.params.id)
    .then(resposta => {
      for (var k in resposta.data) 
      {
      var name =resposta.data[k].Espécie 
      var cname = resposta.data[k]["Nome Científico"]
      break;
      }
      res.render('especie', {d:data, plantas:resposta.data, nomeE:name ,desigC:cname})
      })
    .catch(erro =>{
      res.render('error',{error:erro})
    })
});

module.exports = router;

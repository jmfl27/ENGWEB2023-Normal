var Planta = require("../models/planta")

module.exports.list = () => {
    return Planta
    .find()
    .sort({_id:1})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })

}

module.exports.getPlanta = id => {
    return Planta
    .findOne({_id:id})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}

module.exports.getEspecie = esp => {
    return Planta
    .find({Espécie:esp})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}

module.exports.getImplantacao = imp => {
    return Planta
    .find({Implantação:{$regex: imp, $options: 'i' }})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}

module.exports.getAllFreguesias = () => {
    return Planta
    .distinct("Freguesia").sort()
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}

module.exports.getAllEspecie = () => {
    return Planta
    .distinct("Espécie").sort()
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}

module.exports.addPlanta = c => {
    return Planta
    .create(c)
        .then(dados=>{
            return dados
        })
        .catch(erro =>{
            return erro
        })

}


module.exports.deletePlanta = id => {
    return Planta
    .deleteOne({_id:id})
        .then(dados=>{
            return dados
        })
        .catch(erro =>{
            return erro
        })
}
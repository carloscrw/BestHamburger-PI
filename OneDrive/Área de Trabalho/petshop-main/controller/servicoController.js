let modelServico = require("../model/servico.json")

const servicoController = {
    index:(req,res)=>{
        res.render('servicos')
    },
    listaServicos:(req,res)=>{
        res.send(modelServico);
    },
    criarServico:(req,res)=>{
        let servico =req.body
        modelServico.push(servico)
        res.redirect('/')
    },
    criarServicoGet:(req,res)=>{
      console.log(req.query)
      let servico = req.query
      modelServico.push(servico)
      res.redirect('/')
    },     

}

module.exports = servicoController
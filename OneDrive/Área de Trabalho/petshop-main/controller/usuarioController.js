const usuarioController = {
    cadastro:(req,res)=>{
        res.render('cadastro');
    },
    contato:(req,res)=>{
        res.render('contato');
    },
    login:(req,res)=>{
        res.render('login');
    }
}
module.exports = usuarioController
import { connection } from "../database/connection.js";
import { filmes } from "../model/filmes.js";


export const getIndex = async (req, res) => { 
    try {

    // const listFilmes = await connection.query('SELECT * FROM filmes', {
    //     model: filmes
    // })
    const listFilmes = await filmes.findAll()
    console.log(listFilmes)
    res.render ('index.ejs', {listFilmes});

   
    }catch(error) {
        res.send(error.message)
    }
}


export const getDetalhes = async (req, res) => {
try{
    const filmesDetalhes = await filmes.findByPk( req.params.id)
res.render('detalhes.ejs', {
    filmesDetalhes
})


}catch(error) {
    res.send(error.message)
}

}

export const getDeletar = async (req, res) => {
    try{
        await connection.query(`DELETE FROM filmes WHERE id= ${req.params.id}`)
        res.redirect('/')
    } 
    catch(error){
        res.send(error.message)
    }
}



export const getCreate = (req, res) => {
    res.render('create.ejs')
}    

export const postCriar = async (req,res) =>{
    
    const { nome, diretor, img, duracao, ano, iframe, sinopse, genero, assista, nota } = req.body
    try{
        if(!nome || !diretor || !img || !duracao || !ano || !iframe || !sinopse || !genero || !assista || !nota ) {
            res.send('Não banque o(a) espertinho(a), TODOS os campos são obrigatórios!')

        } else {
            await filmes.create({ nome, diretor, img, duracao, ano, iframe, sinopse, genero, assista, nota })
            res.redirect('/')
        
        }
    } 
    catch(error) {
        res.send(error.message)

    }

}
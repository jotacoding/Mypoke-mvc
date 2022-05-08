import express from 'express'
import { 
    getIndex, 
    getDetalhes,
    getDeletar,
    getCreate,
    postCriar
} from '../controller/controlador.js'

export const routers = express.Router()

routers.get("/", getIndex)
routers.get("/detalhes/:id", getDetalhes )
routers.get("/deletar/:id", getDeletar)
routers.get("/criar", getCreate)
routers.post("/criar",postCriar)






// app.get('/create', (req, res) =>{
//     res.render ('create');
    
// });



// app.get("/update/:id", (req, res) => {

//     const id = +req.params.id;
//     pokemon = pokedex.find(pokemon => pokemon.id === id)
   

//     res.render("create", {pokemon, pokedex});
// });




// app.get('/details/:id', (req,res) => {

//     let id = +req.params.id;
//     pokemon = pokedex.find(pokedex => pokedex.id === id)
//     res.render ('details', {pokemon});


// });


// app.get("/alldetails", (req, res) => { // get é um método HTTP/HTTPS que serve para trazer uma pagina
//     res.render ('tDetails', {pokedex});
// })





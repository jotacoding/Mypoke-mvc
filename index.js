import dotenv from 'dotenv';
dotenv.config();
import express from 'express' // importando o express
import path from 'path' // servir para defirnir caminhos padrões

const __dirname = path.resolve(path.dirname('')) // __dirname serve para informar qual é o caminho padrão da minha pasta

const app = express() // instanciando o express dentro da const app

app.use(express.urlencoded({extended: true})) // O corpo (body) da requisição
app.use(express.json()) // converter para JSON

app.set("view engine", "ejs") // faz com que o express reconheça o EJS como motor de visualização
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded ())


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => // listen é uma função do express para criar servidor
{    console.log(`Rondando na porta ${PORT}`)
})



const pokedex = [ // banco de dados fake
{   
    id: 1,
    name: 'Pikachu',
    height: '0.4 m',
    category: 'Mouse',
    weight: '6.0 kg',
    img: '/img/pikachu.gif',
    desc: 'That can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
    abilities: 'Static',
    type:'Eletric',
    details:'Basic stage: Pichu || Intermediate stage: Pikachu || Final stage: Raichu',
    imgD:'/img/raichu.gif',
    maxEvol:'Raichu'
},
{   
    id: 2,
    name: 'Bulbasaur',
    height: '0.7 m',
    category: 'Seed ',
    weight: '6.9 kg',
    img: '/img/bulbasaur.gif',
    desc: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    abilities: 'Overgrow',
    type:'Grass and Poison',
    details:'Basic stage: Bulbasaur || Intermediate stage: Ivysaurus || Final stage: Venusaur',
    imgD:'/img/venusaur.gif',
    maxEvol:'Venusaur'
},
{
    id: 3,
    name: 'Charmander',
    height: '0.6 m',
    category: 'Lizard',
    weight: '8.5 kg',
    img: '/img/char.gif',
    desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    abilities: 'Blaze',
    type:'Fire',
    details:'Basic stage: Charmander || Intermediate stage: Charmeleon || Final stage: Charizard',
    imgD:'/img/charizard.gif',
    maxEvol:'Charizard'
},

{
    id: 4,
    name: 'Meowth',
    height: '0.4 m',
    category: 'Scratch Cat',
    weight: '4.2 kg',
    img: '/img/meowth.gif',
    desc: 'It loves to collect shiny things. He it might even let its Trainer have a look at its hoard of treasures.',
    abilities: 'Pickup',
    type:'Normal',
    details:'Basic stage: Meowth  || Final stage: Persian',
    imgD:'/img/persian.gif',
    maxEvol:'Persian'
},

]
 
let pokemon = undefined;

app.get('/create', (req, res) =>{
    res.render ('create', {pokemon});
    
});


    


app.get("/", (req, res) => { 
    res.render ('index', {pokedex});
})


app.post("/create", (req,res) =>{
    pokemon = req.body
    
    pokemon.id = pokedex.length + 1;
    
    pokedex.push(pokemon);

    
    
    res.redirect("/");
})


app.get("/update/:id", (req, res) => {

    const id = +req.params.id;
    pokemon = pokedex.find(pokemon => pokemon.id === id)
    // const newPokemon = req.body;

    // newPokemon.id = id + 1
    // pokedex[id] = newPokemon;
    // pokemon = undefined; 


    res.render("create", {pokemon, pokedex});
});




app.get('/details/:id', (req,res) => {

    let id = +req.params.id;
    pokemon = pokedex.find(pokedex => pokedex.id === id)
    res.render ('details', {pokemon});


});


app.get("/alldetails", (req, res) => { // get é um método HTTP/HTTPS que serve para trazer uma pagina
    res.render ('tDetails', {pokedex});
})





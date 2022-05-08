import express from 'express' 
import { routers } from './src/routers/routers.js';
import path from 'path'


const app = express() 
let __dirname = path.resolve(path.dirname(''))


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set("view engine", "ejs") 
app.use(routers)
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
{    console.log(`Rondando na porta ${PORT}`)
})




const express = require ("express")
const db = require ("./db.js")

const app = express ()
app.listen (5000, ()=> {
console.log("mi servidor esta escuchando")
})

app.get ("/",(req,res) =>{
    const datos = db.prepare("SELECT * FROM productos; ").all()
    res.send(datos)
})

app.get ("/:id",(req,res) =>{
    const id = req.params.id
    const datos = db.prepare('SELECT * FROM productos WHERE id=?;').get(id)
    res.send(datos)
})

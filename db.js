const Database=require("better-sqlite3")
const db=new Database("./basedatos.db")

db.exec(`
    CREATE TABLE IF NOT EXISTS productos(
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        nombre TEXT,
        stock INT,
        precio REAL
    );    
    `)

const insert = db.prepare('INSERT INTO productos(nombre,stock,precio) VALUES (?,?,?);')
const count = db.prepare('SELECT COUNT(*) as total FROM productos;').get();

if(count.total === 0){
    insert.run('Cafe',8,5.0);
    insert.run('Té',10,8.0);
}



module.exports=db;
const express = require("express"); // Se manda llamar el modulo express
const app = express(); //Se coloca app como el modulo express

//Se instala 'npm install -g nodemon' para poder utilizar el servidor

app.get("/", (req, res) => {
  //Este establece la pantalla iniciar al entrar en el servidor
  //route handler
  res.send("Hello World, this is the root route"); //Esto se mostrara como texto plano en el servidor
});

app.listen(3000); //El servidor se localizara en el puerto local 3000
app.get("/uno", (req, res) => {
  //Este establece que aparecera cunado se valla en la dirección "uno" del servidor
  //route handler
  res.send("Hello World, frome route One");
});

app.get("/own", (req, res) => {
  //Este establece que aparecera cunado se valla en la dirección "own" del servidor
  //route handler
  res.send("Hello World, this is my own route");
});

app.get("/prueba", (req, res) => {
  //Este establece que aparecera cunado se valla en la dirección "prueba" del servidor
  //route handler
  res.send("<html> Hello World, frome route Prueba </>");
});

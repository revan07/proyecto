const datos = [
    {
        nombre: "sol",
        edad: 25,
        ComidaFavorita: "sopa de pescado",
    },
    {
        nombre: "alberto",
        edad: 20,
        ComidaFavorita: "locrio de cerdo"
    },
    {
        nombre: "ovidio",
        edad: 21,
        ComidaFavorita: "arroz con pollo"
    },
    {
        nombre: "jose",
        edad: 19,
        ComidaFavorita: "moro con res"
    },
];

for (var key = 0; key < datos.length; key++) {
    console.log("===========")
    console.log("Nombre " + datos[key].nombre)
    console.log("edad " + datos[key].edad)
    console.log("Comida favorita " + datos[key].ComidaFavorita)
}


/*var obj ={
    edad: 40,
    nombre: "xin ping"
}
var tao = "edad"
console.log(obj[tao])*/

var obj = {
    edad: 40,
    nombre: "xin ping"
}

for (let Key in obj) {
    
    console.log("--------------------")
    console.log(Key, obj[Key])
} 
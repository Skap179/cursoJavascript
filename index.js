// La función está pensada para ser usada en un carrito de compras en una web de venta de figuras
class Articulo {
    constructor(nombreArt, precioArt) {
    this.nombre = nombreArt;
    this.precio = precioArt;
    }
}

function cargoArticulos(){

const nombre= prompt('Ingresar nombre del artículo: ')
const precio= parseInt(prompt('Ingresar precio del artículo: '))

return {nombre,precio};
}

  // Función que suma los artículos seleccionados por el usuario
function sumarArticulos(articulosSeleccionados) {
    let total = 0;

    for (let i = 0; i < articulosSeleccionados.length; i++) {
        total += articulosSeleccionados[i].precio;
    }

    return total;
}


  // cargo articulos para hacer la prueba

const articulo1= cargoArticulos();
const articulo2= cargoArticulos();
const articulo3= cargoArticulos();


const articulosSeleccionados = [articulo1, articulo3];

const totalArts = sumarArticulos(articulosSeleccionados);
// console.log(totalArts); 
console.log(articulo1);
console.log(articulo2);
console.log(articulo3);
alert("La suma de los productos es: " + totalArts);
// La función está pensada para ser usada en un carrito de compras en una web de venta de figuras
class Articulo {
    constructor(nombreArt, precioArt) {
    this.nombre = nombreArt;
    this.precio = precioArt;
    }
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
const articulo1 = new Articulo("FiguraDC", 100);
const articulo2 = new Articulo("FiguraMarvel", 300);
const articulo3 = new Articulo("FiguraAnime", 600);

const articulosSeleccionados = [articulo1, articulo3];

const totalArts = sumarArticulos(articulosSeleccionados);
console.log(totalArts); 
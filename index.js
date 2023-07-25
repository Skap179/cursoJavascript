// La función está pensada para ser usada en un carrito de compras en una web de venta de figuras
class Articulo {
    constructor(idArt, nombreArt, precioArt) {
    this.nombre = nombreArt;
    this.precio = precioArt;
    this.productoID= idArt;
    }
}

let articulosEnStock = [];

function cargoArticulos(id,nombre,precio){
    let articuloNuevo= {
        idArt: id,
        nombreArt:nombre,
        precioArt:precio
    }

articulosEnStock.push(articuloNuevo);
}

cargoArticulos(01,'Batman',90);
cargoArticulos(02,'Superman',45);
cargoArticulos(03,'Robin',40);
cargoArticulos(04,'Linterna',35);
cargoArticulos(05,'Flash',44);
cargoArticulos(06,'Joker',43);
cargoArticulos(07,'Capitan',47);
cargoArticulos(08,'Daredevil',50);
cargoArticulos(09,'Hulk',60);
cargoArticulos(10,'Ironman',62);
cargoArticulos(11,'Mole',72);
cargoArticulos(12,'Punisher',37);


  // Función que suma los artículos seleccionados por el usuario
function sumarArticulos(articulosSeleccionados) {
    let total = 0;

    for (let i = 0; i < articulosSeleccionados.length; i++) {
        total += articulosSeleccionados[i].precio;
    }

    return total;
}

let carrito=[];

function agregarAlCarrito(productoID){
    carrito.push(productoID);
}

document.getElementById('btn1').addEventListener('click', function() {
agregarAlCarrito('01');});

document.getElementById('btn2').addEventListener('click', function() {
agregarAlCarrito('02');});

document.getElementById('btn3').addEventListener('click', function() {
agregarAlCarrito('03');});

document.getElementById('btn4').addEventListener('click', function() {
agregarAlCarrito('04');});

document.getElementById('btn5').addEventListener('click', function() {
agregarAlCarrito('05');});

document.getElementById('btn6').addEventListener('click', function() {
agregarAlCarrito('06');});

document.getElementById('btn7').addEventListener('click', function() {
agregarAlCarrito('07');});

document.getElementById('btn8').addEventListener('click', function() {
agregarAlCarrito('08');});

document.getElementById('btn9').addEventListener('click', function() {
agregarAlCarrito('09');});

document.getElementById('btn10').addEventListener('click', function() {
agregarAlCarrito('10');});

document.getElementById('btn11').addEventListener('click', function() {
agregarAlCarrito('11');});

document.getElementById('btn12').addEventListener('click', function() {
agregarAlCarrito('12');});


let precio = document.getElementsByTagName('h5')
console.log(precio.innerHTML)
precio.innerHTML = '100'
console.log(precio.innerHTML)

const guardarLocal =(clave,valor) =>{localStorage.setItem(clave,valor)}

guardarLocal('listaProductos', JSON.stringify(articulosEnStock))
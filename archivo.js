
alert("¡Bienvenidos a nuestra página!")

let nombreProductoA = "Rolls"
let precioProductoA = 80;
let stockProductoA = 120;

let nombreProductoB = "Sashimis"
let precioProductoB = 60;
let stockProductoB = 40;

let nombreProductoC = "Ceviche"
let precioProductoC = 650;
let stockProductoC = 10;


function menu (){
    let opciones = prompt("Inicio: \n1 - Menu \n2 - Info Adicional \nEsc- Salir")
    switch(opciones){
        case "1":
            listaProductos();
            comprarProductos();
            alert("Gracias por su compra");
            break;
        case "2":
            infopagina();
            menu();
        case "Esc":
            despedir ("Gracias por visitar");
            break;
        default:
            alert("Opcion incorrecta");
            menu();
    }
}

function despedir (despido){
    alert(despido + " nuestra pagina")
}

function listaProductos(){
    alert("Estos son nuestros productos : \n1 - " + nombreProductoA + "\n2 - " + nombreProductoB + "\n3 - " + nombreProductoC);
}

function infopagina(){
    alert("Vendemos el mejor sushi de Buenos Aires, hacenos tu pedido y disfruta de la verdadera comida japonesa.")
}

let cantidadComprada;
let precioTotalProductos = 0;

function stockInsuficiente(stock){
    alert("No tenemos stock suficiente de ese producto, puede comprar hasta" + stock + " unidades")
}

function stockSuficiente(stock, nombre){
    stock-= cantidadComprada;
    console.log("El stock remanente es de: " + stock + "  " + nombre);
}

function calcularPrecio(precio){
    precioTotalProductos += cantidadComprada * precio;
}


function compra(stock, precio, nombre){
    cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar:"));
    if(cantidadComprada <= stock){
        stockSuficiente(stock, nombre)
        }
    else{
        stockInsuficiente(stock)
    }
}

function comprarProductos(){
    
    let cantidadProductosComprados = parseInt(prompt('Ingrese la cantidad de productos distintos que quiere comprar'));

    for(let i = 0; i < cantidadProductosComprados; i++){
    
        let nombreCompra = prompt("Ingrese el nombre del producto que quiere comprar")
    
        if (nombreCompra == nombreProductoA){
            compra(stockProductoA, precioProductoA, nombreProductoA)
        }
        else if (nombreCompra == nombreProductoB){
            compra(stockProductoB, precioProductoB,nombreProductoB)
        }
        else if(nombreCompra == nombreProductoC){
            compra(stockProductoC, precioProductoC, nombreProductoC)
        }
        else{
            alert("No tenemos lo que estas buscando")
        }
    }
    alert("El precio de su compra es de: $" + precioTotalProductos)
}

menu()
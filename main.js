let producto ="";
let precio = 0;
let seguirComprando = false;
let cantidad = 0;
let precioTotal = 0;

function calcularPrecio(producto,precio){
    return precioTotal += producto * precio;
}
do{
    producto = prompt("Querés comprar Teclado, Raton, Microfono, Monitor, o todo?");
    cantidad = parseInt(prompt("Cuántos queres comprar?"));

    switch(producto){
        case "Teclado" :
            precio = 8200;
            break;

        case "Raton" :
            precio = 5500;
            break;
        
        case "Microfono":
            precio = 10300;
            break;

        case "Monitor":
            precio = 39400;
            break;

        default :
            alert("Ningun producto fue seleccionado, intente nuevamente");
            precio = 0;
            cantidad = 0;
    }

    calcularPrecio(precio,cantidad);

    seguirComprando = confirm("¿Querés agregar otro/s productos?");
        
}while(seguirComprando);

alert("El precio total es de: " + precioTotal);

let FinCompra = confirm("¿Desea Finalizar Su Compra?");

if(FinCompra) alert("Su compra fue realizada con exito");
if(!FinCompra) alert("Vuelva pronto");

//-----------------ejercicio de preentrega: Arrays--------------------------------//


console.log('Carrito de compras de la Joyeria');

//interaccion con el usuario-----------------//

let nombre = prompt("ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");
alert("Hola " + nombre + " " + apellido);
alert("consulte nuestros productos");

//---------------------------------------------------if------------------------------------------

alert("para consultar producto  y precio ingrese 1, para consultar stock ingrese 2 ");
let consultaProducto = parseInt(prompt("ingrese"));

if (consultaProducto==1){


for (const anillo of Anillos){
    alert("producto: " + anillo.nombre +" y su precio es: " + anillo.precio)}
};

if (consultaProducto==2) {

        for (const anillo of Anillos){
    alert("producto: " + anillo.nombre + " tenemos: " + anillo.stock + " unidades")}
};


//----------------------------------------find-----------------------------


let consultaNombre= prompt("ingrese el nombre del anillo que desea comprar");

let anilloEncontrado=Anillos.find((anillo)=> anillo.nombre==consultaNombre);

console.log(anilloEncontrado);


//------------------siclo-----------------------------------//

alert("Formas de pago: ingrese 1 para efectivo, ingrese 2 para cuotas");

let pago = parseFloat(prompt("ingrese la 1 o 2"));
let precioAnillo =parseFloat (prompt(nombre + " ingrese el precio de su producto y sabra el precio en efectivo"));
let carritoEfectivo;
while (pago == 1){
    alert(nombre + " usted ingreso efectivo");
    carritoEfectivo = precioAnillo * 0.8;
    alert(nombre +" el precio en efectivo de tu producto es: " + carritoEfectivo);
    pago = prompt("ingrese 2 para salir");
    
}
//hacer bien la salida del while y pasar a las cuotas, con la calculadora.

//----------------------------------funcion-----------------------------//


if (pago == 2) {


function cuotas (valorAnillo, cantidadCuotas, division) {
    switch (division) {
        case "/":
            return valorAnillo / cantidadCuotas;
            break;
        default:
            return 0;
            break;
}
}

let valorAnillo = parseFloat(prompt(nombre + " ingrese el valor de su anillo"));
let cantidadCuotas = parseFloat(prompt(nombre + " ingrese la cantidad de cuotas que desea"));
let division = prompt(nombre + " ingrese / para realizar las cuotas");
let resultado = cuotas(valorAnillo, cantidadCuotas, division);
alert (nombre + " el valor de cuota de su anillo es: "+ resultado);
}


//-----------------------------------------------------------------------------------------





alert("busque su anillo por su tipo, los tipos de anillo son: oro, plata, quirurgico");


let busquedaAnillo=prompt("ingrese el material que desea su anillo");
let busquedaOro = Anillos.filter((anillo) => anillo.tipo == busquedaAnillo );

console.log(busquedaOro);



//-------------------------------------------cards--------------------------------//



let contenedor=document.getElementById("contenedor");



function impresionCards(Anillos) {
    
    for (const anillo of Anillos) {
        let card = document.createElement("div");
        card.innerHTML =`
        <div class="card" style="width: 18rem;">
        <img src="${anillo.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${anillo.nombre}</h5>
        <p class="card-text">${anillo.precio}.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`;
contenedor.appendChild(card);


};

impresionCards(anillo);



//-------------------------------evento en el nav---------------------//

let btn=document.getElementById("btn");

btn.onmouseover=()=>{
    btn.style.background="yellow";


};


//-----------------------evento en el search----------------------------//
        
let search=document.getElementById("search");
search.onkeydown=()=>{alert("esta buscando que comprar?")};





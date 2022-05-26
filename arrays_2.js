
//-----------------ejercicio de preentrega: Arrays--------------------------------//


console.log('Carrito de compras de la Joyeria');

//interaccion con el usuario-----------------//

let nombre = prompt("ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");
alert("Hola " + nombre + " " + apellido);
alert("consulte nuestros productos");


const Anillos=[     
{
        id: "1",
        nombre: "anilloOro",
        tipo :"oro",
        accesorio : "ninguno",
        precio : "1500",
        stock : "20",
        img:"./img/anillo_4.jpg"
},    
{

        id: "2",
        nombre : "anilloDiamantes",
        tipo : "oro",
        accesorio : "diamantes",
        precio : "1600",
        stock : "10",
        img:"./img/anillo_7.jpg"
},        	
{    
        id: "3",
        nombre : "anilloPlata",
        tipo : "plata",
        accesorio : "ninguno",
        precio : "2300",
        stock : "20",
        img:"./img/anillo_6.jpg"
},        	
{    
        id:"4",   
        nombre : "anilloRegalo",
        tipo : "quirurgico",
        accesorio : "fantasia",
        precio : "0",
        stock : "100",
        img:"./img/anillo_3.jpg"
},        	
{    
        id:"5",
        nombre : "anilloOnice",
        tipo : "plata",
        accesorio : "ninguno",
        precio : "2000",
        stock : "10",
        img:"./img/anillo_5.jpg"
},        	
{    
        id:"5",
        nombre : "anilloPurpura",
        tipo : "plata",
        accesorio : "rubi",
        precio : "4000",
        stock : "30",
        img:"./img/anillo_2.jpg"
},        	
{    
        id: "6",
        nombre : "anilloSello",
        tipo : "oro",
        accesorio : "ninguno",
        precio : "2500",
        stock : "10",
        img:"./img/anillo_1.jpg"
    }    	
    ];

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




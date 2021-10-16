//Archivo encargado de contener las variables generales para el uso de una tienda de articulos de arte
//----------ARRAYS-------------------------
// ESTA FUNCION PERMITE ALMACENAR UN CONJUNTOS DE DATOS, AQUI EL ARRAYS SE LLAMA materials el cual contiene varios datos
let materials = [
    {id: 1, name:"lienzo", price: 10, stock:20},
    {id: 2, name:"pincel", price: 5, stock:10},
    {id: 3, name:"bastidor", price: 15, stock:15},
    {id: 4, name:"caballete", price: 200, stock:20},
    {id: 5, name:"paleta", price: 20, stock:60}
];//si se necesita se puede seguir agregando mas productos

//Variables Generales
let cart = 0;
let qty = 0;
let resp = 'si';

const selectedQty = 'Indicanos la cantidad que deseas del producto ingresado';


//----------------------------------DESAFIO 6--------------------
//-------------------------------INCORPORANDO ARRAYS-------------
//Archivo principal para el desarrollo de UNA TIENDA DE ARTE

//--------------------------------------------Ciclo Principal--------------------------------------------//

alert(`Bienvenido! a tu tienda de arte Camacho`);

do{
    let option = showMenu();
    if(option ===( materials.length + 1)) break; //Opcion 6 es Salir
    let qty = parseInt(prompt(selectedQty));

    addToCart(option,qty);

    resp = prompt('¿Desea agregar mas productos? Escribe: \nsi/no');
    resp.toLocaleLowerCase()//Esta opcion permite  retorna minuscula o mayuscula y va en reemplazo de resp==="SI"
    

}while(resp === 'si'); //|| resp === 'SI');se anula por que se escibio toLocaleLowerCase


if(cart > 0){
    alert(`El total a pagar es ${cart} soles`);
};

alert("Gracias, vuelva pronto");

//las funciones y las variables se hicieron en oTro documento para una mejor organizacion
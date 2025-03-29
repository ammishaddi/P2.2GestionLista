const listaDeCompras = [];
//CON FUNCIONES ARROW

const agregar = (...producto) => listaDeCompras.push(...producto)
agregar ("Piña", "Coco", "Melon", "Servilletas","Jabón")



const eliminar = producto => {
    const index =  listaDeCompras.indexOf (producto);
    if (index !== -1) {listaDeCompras.splice(index, 1);}  
}


eliminar ("Coco");


const mostrarLista = () => console.log(listaDeCompras)
mostrarLista();



//FUNCIONES QUE HICE ANTES DE PASARLAS A ARROW (captura en el READ ME)


/*  function agregar (...producto) {
    listaDeCompras.push (...producto);
    
}
agregar ("Piña")
agregar ("Fresa")
agregar ("Melon", "Nuez") */


/*
 function eliminar (producto) {
    const index = listaDeCompras.indexOf(producto); // Busca el índice del nombre
    if (index !== -1) {
        listaDeCompras.splice(index, 1); // Si existe, lo elimina
    }
}
  */





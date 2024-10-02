// Posicionarnos en el elemento #contenedorCartas y mostrarme por consola los siguientes elementos:
const contenedor = document.getElementById("contenedorCartas");

// 1) Su primer hijo
const primerHijo = contenedor.firstElementChild;

// 2) Su tercer hijo
const tercerHijo = contenedor.children[2];

// 3) El siguiente hermano del tercer hijo
const hermano = tercerHijo.nextElementSibling;

// 4) Su último hijo
const ultimoHijo = contenedor.lastElementChild;

// 5) Su padre
const padre = contenedor.parentNode;

// 6) El padre del padre
const padre2 = padre.parentNode;

// 7) Su hermano anterior
const hermanoAnterior = padre.previousElementSibling;

// 8) Las clases del último hijo
const claseUltimo = ultimoHijo.classList;
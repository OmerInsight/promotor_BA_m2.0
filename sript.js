// en la siguiente linea se procedera a definir una variable
// que nos ayude a selecionar el boton "enviar" del formulario
const botonEnviar = document.querySelector('.boton-servicios');

// Aqui tambien hacemos una asignacion de variables para los
// otros elementos que vamos a tocar con el codigo
// que son tanto el formulario como una imagen que agragaremos
// a esta ultima le agregaremos la ruta donde se encuentre
const formulario = document.querySelector('.conteneform');
const imagen = document.createElement('img');
imagen.src = "Imagen Codigo Java Script.png"; 

// a aprtir de este codigo se lleva a cabo la accion que 
// pretendemos que el codigo realice a traves de un "add.EnvenLis..."
// este es uno de los metodos mas conocidos y una funcion flecha
botonEnviar.addEventListener('click', () => {
    // aca le decimos que nos oculte el formulario
    formulario.style.display = 'none';
    
    // y aqui que nos agregue la imagen
    formulario.parentNode.insertBefore(imagen, formulario);
});

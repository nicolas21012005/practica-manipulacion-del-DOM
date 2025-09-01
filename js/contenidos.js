// CAMBIAR CONTENIDOS A ELEMENTOS UNICOS


const caja_unica = document.getElementById('caja-unica');
const manipulacion_title = document.querySelector('#manipulationTitle');


caja_unica.innerText = 'Cambio en el texto #1 con INNERTEXT';
caja_unica.innerHTML = 'Cambio en el texto #2 con INNERHTML';
caja_unica.textContent = 'Cambio en el texto #3 con TextContent';
manipulacion_title.textContent = 'Manipulación de estilos CSS y clases'


// cambiar contenidos a elementos multiples

const cajas_de_contenido = document.querySelectorAll('.caja-contenidos');


cajas_de_contenido.forEach(
    (caja, index) => {
        caja.textContent = 'Caja multiple numero ' + index;
        caja.style.fontSize = '10px';
        caja.style.textAlign = 'center'
    }
);

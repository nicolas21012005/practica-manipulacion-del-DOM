//  manipulacion de estilos de un elemento unico

const caja_variable = document.getElementById('estilo-unico');

// manipulaciion de estilos teniendo en cuenta su contenedor padre para que no se aplique a todos los divs que tengan esa misma clase
const cajasEstilos = document.querySelectorAll('#estilos .caja');

caja_variable.style.backgroundColor = 'gray';
caja_variable.style.textAlign = 'center';
caja_variable.style.color = '#b80000';
caja_variable.style.fontSize = '70px';

cajasEstilos.forEach((caja, index) => {
    caja.style.border = '2px dashed blue';
})

// manipulacion de clases / jugando con clases

caja_variable.classList.add('active');
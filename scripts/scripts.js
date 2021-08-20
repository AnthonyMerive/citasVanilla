let formulario = document.getElementById('formulario');
let listarCitas = document.getElementById('listarCita');
let listarBusqueda = document.getElementById('busqueda');
let btnBuscar = document.getElementById('btnBuscar');
let limpiarForm = document.getElementById('limpiarForm');

let citas = [];

formulario.addEventListener('submit', e => {
    e.preventDefault();
    capturaDatos();
})

btnBuscar.addEventListener('click', e => {
    e.preventDefault();
    busqueda();
})

limpiarForm.addEventListener('click', e=>{
    e.preventDefault();
    formulario.reset();
})


const capturaDatos = () => {
    let nombre = document.getElementById('nombre').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let sintomas = document.getElementById('sintomas').value;

    let registro = {
        nombre,
        fecha,
        hora,
        sintomas
    }

    citas.unshift(registro);
    localStorage.setItem('citas', JSON.stringify(citas));
    getLocalStorage();
}

const getLocalStorage = () => {
    listarCitas.innerHTML = '';
    let citasLocalStorage = JSON.parse(localStorage.getItem('citas'));
    if (citasLocalStorage == null) {
        citasLocalStorage = [];
    } else {
        citasLocalStorage.map(cita => {
            const { nombre, fecha, hora, sintomas } = cita;
            listarCitas.innerHTML += `
        <div class = "card mt-1">
            <table class = "table">

                <tr>
                    <td>${nombre}</td>
                    <td>${fecha}</td>
                    <td>${hora}</td>
                    <td>${sintomas}</td>
                </tr>
            </table>
        </div>
        `
        })
    }
}

document.addEventListener('DOMContentLoaded', getLocalStorage);

const busqueda = () => {
    let busqueda = document.getElementById('inputBuscar').value;
    let data = JSON.parse(localStorage.getItem('citas'));

    let filtro = data.filter(cita => cita.nombre.toLowerCase() === busqueda.toLowerCase())
    
    listarBusqueda.innerHTML = '';

    if (filtro.length === 0) {
        listarBusqueda.innerHTML += `
        <div style="color:white;"> ${busqueda} no tiene cita asignada
        </div>
        <button id="btnBorrar">Borrar</button>
        `
        let borrarBusqueda = document.getElementById('btnBorrar');
        borrarBusq(borrarBusqueda);
    } else {
        filtro.map(cita => {

            const { nombre, fecha, hora, sintomas } = cita;
            listarBusqueda.innerHTML += `
            <br>
            <div style="color:white;">¡PACIENTE ENCONTRADO!</div>
            <br>
            <div style="color:white;">Paciente ${nombre}</div>
            <div style="color:white;">cita para el dia ${fecha}</div>
            <div style="color:white;">a las ${hora}</div>
            <div style="color:white;">por motivo ${sintomas}</div>
            <br>
            <button id="btnBorrar">Borrar</button>
            `
        })
        let borrarBusqueda = document.getElementById('btnBorrar');
        borrarBusq(borrarBusqueda);
    }

}

const borrarBusq =(borrar) => {
    borrar.addEventListener('click', e =>{
        e.preventDefault();
        listarBusqueda.innerHTML = '';
        document.getElementById('inputBuscar').value = "";
    })
}




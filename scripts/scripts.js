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

limpiarForm.addEventListener('click', e => {
    e.preventDefault();
    formulario.reset();
})


const capturaDatos = () => {
    let nombre = document.getElementById('nombre').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let sintomas = document.getElementById('sintomas').value;
    let dataLocalStorage = JSON.parse(localStorage.getItem('citas'));

    if (dataLocalStorage == null) {
        let registro = {
            nombre,
            fecha,
            hora,
            sintomas
        }

        citas.unshift(registro);
        localStorage.setItem('citas', JSON.stringify(citas));
    } else {
        let registro = {
            nombre,
            fecha,
            hora,
            sintomas
        }

        dataLocalStorage.unshift(registro);
        localStorage.setItem('citas', JSON.stringify(dataLocalStorage));
    }
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
    let buscar = data.find(dato => dato.nombre.toLowerCase() === busqueda.toLowerCase())
    let indice = data.indexOf(buscar);
    let filtro = data.filter(cita => cita.nombre.toLowerCase() === busqueda.toLowerCase())

    listarBusqueda.innerHTML = '';

    if (filtro.length === 0) {
        listarBusqueda.innerHTML += `
        <div class="card mt-5 container">
        <div style="text-align:center;"> ${busqueda} no tiene cita asignada
        </div>
        <br>
        <br>
        <button class="btn btn-success" id="continuar">OK</button>
        </div>
        `
        let continuar = document.getElementById('continuar');

        continuarBusq(continuar);
    } else {
        filtro.map(cita => {

            const { nombre, fecha, hora, sintomas } = cita;
            listarBusqueda.innerHTML += `
            <br>
            <div class="card mt-5 container"">
            <div style="text-align:center;">¡PACIENTE ENCONTRADO!</div>
            <br>
            <div style="text-align:center;">Paciente ${nombre}</div>
            <div style="text-align:center;">cita para el dia ${fecha}</div>
            <div style="text-align:center;">a las ${hora}</div>
            <div style="text-align:center;">por motivo ${sintomas}</div>
            <br>
            <button class="btn btn-success" id="confirmar">Confirmar</button>
            <br>
            <button class="btn btn-danger" id="btnBorrar">Cancelar cita</button>
            </div>
            
            `
        })
        let borrarBusqueda = document.getElementById('btnBorrar');
        let confirmar = document.getElementById('confirmar');
        borrarBusq(borrarBusqueda, indice);
        confirmarCita(confirmar);
    }

}

const borrarBusq = (borrar, index) => {
    let citasLocalStorage = JSON.parse(localStorage.getItem('citas'));
    borrar.addEventListener('click', e => {
        citasLocalStorage.splice(index, 1);
        localStorage.setItem('citas', JSON.stringify(citasLocalStorage));
        getLocalStorage();
        e.preventDefault();
        listarBusqueda.innerHTML = '';
        document.getElementById('inputBuscar').value = "";
        alert('Su cita ha sido cancelada')
    })
}

const continuarBusq = (con) => {
    con.addEventListener('click', e => {
        e.preventDefault();
        listarBusqueda.innerHTML = '';
        document.getElementById('inputBuscar').value = "";
    })
}

const confirmarCita = (con) => {
    con.addEventListener('click', e => {
        e.preventDefault();
        listarBusqueda.innerHTML = '';
        document.getElementById('inputBuscar').value = "";
        alert('Su cita ha sido confirmada')
    })
}


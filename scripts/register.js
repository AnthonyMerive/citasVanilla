let register = document.getElementById('register');
let regresar = document.getElementById('regresar');


register.addEventListener('submit', e => {
    e.preventDefault();
    registrarUsuario();
})

regresar.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = "./login.html"
})

let dataUser = [];
let dataRenew = [];


const registrarUsuario = () => {
    let dataLocalStorage = JSON.parse(localStorage.getItem('usuarios'));
    let user = document.getElementById('user').value;
    let pass = document.getElementById('password').value;

    if (user === '' || pass === '') {
        alert('¡Rellene todos los campos!')

    }else if (dataLocalStorage == null) {  

        let usuarios = {
            user,
            pass
        }

        dataUser.unshift(usuarios);

        localStorage.setItem('usuarios', JSON.stringify(dataUser));

        alert('usuario creado correctamente')
        window.location.href = "./login.html"

    } else {

        let user = document.getElementById('user').value;
        let pass = document.getElementById('password').value;

        let usuarios = {
            user,
            pass
        }
        dataRenew.unshift(usuarios);
        let newData = dataRenew.concat(dataLocalStorage);

        localStorage.setItem('usuarios', JSON.stringify(newData));

        alert('usuario creado correctamente')
        window.location.href = "./login.html"
    }

}
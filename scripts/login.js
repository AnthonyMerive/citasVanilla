let login = document.getElementById('login');

login.addEventListener('submit', e => {
    e.preventDefault();
    validarUsuario();
})
userIngresado = [];
const validarUsuario = () => {
    let usuario = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    let userData = JSON.parse(localStorage.getItem('usuarios'));

    if(userData === null){
        alert('Usuario no reconocido')
        window.location.href = "./register.html"
    }

    let filtro = userData.filter(data => data.user === usuario)

    if (filtro.length == 0) {

        alert('Usuario no reconocido')
        window.location.href = "./register.html"
    } else {

        filtro.map(data => {
            const { pass } = data;
            if (password === pass) {
                alert('Usuario Reconocido')
                window.location.href = "./index.html"
            } else {
                alert('Usuario no reconocido')
                window.location.href = "./register.html"
            }
        })
    }

    //Metodo for que repite las alerts (no optimizado) recorre todos los arrays y los compara

    // if (userData === null) {
    //     alert('Usuario no registrado')
    // } else {
    //     for (i = 0; i <= userData.length - 1; i++) {
    //         if (userIngresado.user === userData[i].user && userIngresado.pass === userData[i].pass) {
    //             alert('Usuario Reconocido')
    //             window.location.href = "./index.html"
    //         }

    //     }
    // }
}
// Ejemplo 1

let askAgain = true;

do {
    let userEmail = prompt('Ingrese su correo electronico');
    let confirmUserEmail = prompt('Confirme su correo electronico');

    if (userEmail === confirmUserEmail){
        alert('El correo ha sido guardado con exito!');
        askAgain = false;
    }else{
        alert('Los correos deben no coniciden')
    }
} while (askAgain);

//Ejemplo 2

let entrada = promp('Ingrese un nombre').toUpperCase();

while ( entrada != 'ESC'){

    switch (entrada) {
        case 'ANA':
            alert('Hola Ana!');
            break;
        case 'JUAN':
            alert('Hola Juan');
            break;
        default:
            alert('Quien sos?');
            break;
    }

    entrada = prompt('Ingrese otro nombre').toUpperCase();
}

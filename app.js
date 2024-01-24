let numerSecreto = 0;
let cont = 0;
let lista=[];
let numero_max=10;
condicionesIniciales()

function condicionesIniciales (){
    titulo_asig('h1','Juego del numero secreto');
    titulo_asig('p','Coloca un numero del uno al '+ numero_max);
    numerSecreto = secreto();
    cont=1;
}

function titulo_asig(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}
function usuario(){
    let numberUsuario = parseInt(document.getElementById('valorusuario').value);

    if(numberUsuario == numerSecreto){
        titulo_asig('p','Acertaste el numero secreto en '+ cont + (cont == 1 ? ' vez' : ' veces'));
        //Activar boton solo en caso de que el usuario acierte
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //Usuario no acerto
         if(numberUsuario > numerSecreto){
            titulo_asig('p','El numero secreto es menor'); 
        }else{
            titulo_asig('p','El numero secreto es mayor');    
        }
        cont++;
        clean();
    }
    return;
}
function clean (){
    let valorclean = document.querySelector('#valorusuario');
    valorclean.value = '';
}
function secreto(){
    let secret = Math.floor(Math.random()*numero_max)+1;
    console.log(secret)
    console.log(lista)
    //Ya sorteamos todos los numeros?
    if (lista.length == numero_max){
        titulo_asig('p','Ya se usaron todos los numeros');
    }else{
            //Si en lumero generado esta en la lista, hacer una operacion, de lo contrrio no
            if(lista.includes(secret)){
                //recursividad
                return secret();

            }else{
            lista.push(secret);
                return secret;
            }
        }
}
function reiniciarJuego (){
    //basiar caja
    clean();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Reiniciar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el bóton
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}



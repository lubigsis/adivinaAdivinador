let numeroRandom = Math.ceil(Math.random() * 10);

//agrego evento al boton y que al presionarlo ejecute la función que declaro
document.getElementById('botonJS').addEventListener('click', function(){
    let entradaUser = document.getElementById('datoJS').value;

    if (entradaUser == numeroRandom){
        document.getElementById('entradaJS').innerHTML =`Correcto, el número que pensé era ${numeroRandom}`;
       // location.reload();
    }
    else{
        document.getElementById('entradaJS').innerHTML= `Lo siento, el número que pensé es: ${numeroRandom}.
        Puedes intentarlo otra vez`;
      //  location.reload();
      //le saqué momentáneamente la función reload porque se borra la rta. en el HTML.
      //poner en un boton 'actualizar' un evento click que desencadene la función reload.
    }

});


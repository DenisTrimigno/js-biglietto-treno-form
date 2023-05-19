let button = document.getElementById('calculate');

button.addEventListener('click' , function(){
    let km = parseInt(document.getElementById('km').value);
    let age = parseInt(document.getElementById('age').value);

    let price = km * 0.21;
    let message = '';

    if(age === 0){
        message += `il biglietto costa: ${price}€`;
    }

    else if (age === 1) {
        price = price * 0.8;
        message += `il prezzo del biglietto è di ${price}€`;
    }

    else {
        price = price - price * 0.4; 
        message += `il prezzo del biglietto è di ${price}€`;

    }

    document.getElementById('price').innerText = message;
});

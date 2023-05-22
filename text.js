let button = document.getElementById('calculate');



button.addEventListener('click' , function(){
    let km = parseInt(document.getElementById('km').value);
    let age = parseInt(document.getElementById('age').value);
    let name = document.getElementById('name').value;

    let discount_perc;
    let price = km * 0.21;
  


if(isNaN(km) === false){
    if(age === 0){
        discount_perc = '/';
        // message += `il biglietto costa: ${price}€`;
    }

    else if (age === 1) {
        discount_perc = '20%';
        price *= 0.8;
        
        // message += `il prezzo del biglietto è di ${price.toFixed}€`;
    }

    else {
        discount_perc = '40%';
        price *= 0.6; 
        // message += `il prezzo del biglietto è di ${price.toFixed}€`;

        }

        document.getElementById('show-name').innerText = name;
        document.getElementById('show-km').innerText = km;
        document.getElementById('show-discount').innerText = discount_perc;
        document.getElementById('show-price').innerText = price.toFixed(2)+'€';

        document.querySelector('.show-error').innerText = '';
    }
    else {
        document.querySelector('.show-error').innerText = 'inserisci km da percorrere';
    }

   
    
});

document.getElementById('reset').addEventListener('click' , function() {
    document.getElementById('km').value = '';
    document.getElementById('name').value = '';

    document.getElementById('show-name').innerText = '';
    document.getElementById('show-km').innerText = '';
    document.getElementById('show-discount').innerText = '';
    document.getElementById('show-price').innerText = '';

    document.querySelector('.show-error').innerText = '';
    
} )
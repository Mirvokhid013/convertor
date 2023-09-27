let elForm = document.querySelector(".forma");
let elInput = document.querySelector(".forma-input");
let elSelect = document.querySelector(".select-key");

let elMoney = document.querySelector(".money");
let elKurs = document.querySelector(".kurs");
let elValyuta = document.querySelector(".valyuta");

let USD_c = 12206;
let EURO_c = 12932;
let RUBL_c = 128;

let total;

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    if (elSelect.value == 'USD') {
        total = (elInput.value / USD_c).toFixed(2);
        elMoney.textContent = elInput.value;
        elKurs.textContent = `${total} Dollarga teng`;
    }

    if (elSelect.value == 'EURO') {
        total = (elInput.value / EURO_c).toFixed(2);
        elMoney.textContent = elInput.value;
        elKurs.textContent = `${total} Euroga teng`;
    }

    if (elSelect.value == 'RUBL') {
        total = (elInput.value / RUBL_c).toFixed(2);
        elMoney.textContent = elInput.value;
        elKurs.textContent = `${total} Rublga teng`;
    }
    
})

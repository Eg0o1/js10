let inp1 = document.querySelector(".input");
let exp = document.querySelector(".exp-date");
let holder = document.querySelector(".holder");
let cardNum = document.getElementById("card-num");
let cardName = document.getElementById("card-name");
let MM = document.getElementById("MM");
let YY = document.getElementById("yy");
let cvc = document.getElementById("cvc");
let lab = document.getElementById("lab");
let labe1 = document.getElementById("labe1");
let labe2 = document.getElementById("labe2");
let btn = document.getElementById("confirm");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let inp = document.querySelector(".inp");
let myForm = document.forms[0];
let com = document.querySelector(".complete");




cardName.addEventListener("input", function(e) {
    holder.innerText = cardName.value;
    if (cardName.value ==="")
    {
        holder.innerText = "Jane Appleseed"
    }
});
cardNum.addEventListener("input", function(ev) {
    inp1.innerText = cardNum.value;
    if (cardNum.value === "")
    {
        inp1.innerText = "0000 0000 0000 0000"
    }
});
MM.addEventListener("input", function(e) {
    month.innerText = MM.value;
    if (MM.value ==="")
    {
        month.innerText = "00"
    }
});
YY.addEventListener("input", function(e) {
    year.innerText = YY.value;
    if (YY.value ==="")
    {
        year.innerText = "00"
    }
});
cvc.addEventListener("input", function(e) {
    inp.innerText = cvc.value;
    if (cvc.value === "")
    {
        inp.innerText = "000"
    }
})





myForm.onsubmit= function (e) {
    let cardNumValid = false;
    let mmValid = false;
    let yyValid = false;
    let cvcValid = false;
    let nameValid = false;
    let numbers = /[0-9]/
    let months = /[1-12]/
    let years = /[1950-2023]/
    
    if(cardNum.value !=="" && MM.value !== "" && YY.value !== "" && cvc.value !== "" && cardName.value !== "")
    {
        myForm.classList.add("hide");
        com.classList.remove("hide")
    }
    if ( cardNum.value.match(numbers) && cardNum.value !== "" && cardNum.value.length == 16)
    {
        cardNumValid === true
        lab.classList.add("hide");
        cardNum.style.border = "none"

    } else {    
        e.preventDefault();
        lab.classList.remove("hide");
        cardNum.style.border = "1px solid red"
    };

    if (MM.value !== "" && MM.value.match(months) && MM.value.length <= 2 )
    {
        mmValid === true;
        labe1.classList.add('hide');
        MM.style.border = "none"  
    } else {
        e.preventDefault();
        labe1.classList.remove('hide');
        MM.style.border = "1px solid red"

    }
    if (YY.value !== "" && YY.value.match(years))
    {
        yyValid === true;
        labe1.classList.add('hide');
        YY.style.border = "none"

    } else {
        e.preventDefault();
        labe1.classList.remove('hide');
        YY.style.border = "1px solid red"
    }
    if(cvc.value === "")
    {
        e.preventDefault();
        labe2.classList.remove('hide');
        cvc.style.border = "1px solid red"

    } else {
        cvcValid === true;
        labe2.classList.add('hide');
        cvc.style.border = "none"
    }
};




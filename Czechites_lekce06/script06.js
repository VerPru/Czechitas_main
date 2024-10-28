/*PRVNÍ INFO 

na začátku si připnu knihovny dvě - mrkni do html, dky tomu mohu využívat ty knihovny, ale musím dodržovat pravidla, ta mám napsaná v dokumentaci na odkazu níže)

console.log(validator)
console.log(validator.isEmail("pepik@seznam.cz")) //v konzoli se mi zobrazi true/false
/*
const email = prompt("Prosím tě člověče, zadej e-mail")

if(validator.isEmail(email)){
    document.body.innerHTML = "<h1>Vítej na stránce</h1>"
} else {
    document.body.innerHTML = "<h1>Špatně zadaný email, zkus to znova! </h1>"
}
*/
/*
console.log(validator.isMobilePhone ("111 222 333", "cs-CZ")) //ověřím v doku jak přesně to chtějí zadat - doku je https://github.com/validatorjs/validator.js/#validatorsv
console.log(validator.isMobilePhone ("111222333", "cs-CZ"))
console.log(validator.isMobilePhone ("1113", "cs-CZ")) //tohle ukáže false

console.log(validator.isPostalCode("16900", "CZ"))


const cas = new Date()
console.log(cas) //vypíše všechno info
console.log(cas.getDate())
console.log(cas.getHours())
console.log(cas.getTime()) //vypíše Unixový čas počítá sekundy od 1.1.1970 - např. 1730136780880 - https://www.epochconverter.com/

const cas2 = dayjs() //tohle je ten cas z knihovny
console.log(cas2)
console.log(cas2.format("DD-MM-YY"))
console.log(cas2.format("DD/MM/YYYY"))

const novyRok = dayjs("2025-01-01")
console.log(novyRok)
console.log(cas2.isAfter(novyRok))
*/


//UKOL-1 Cvičení: Knihovny

const email = prompt("Prosím tě člověče, zadej e-mail");
const msgElement = document.getElementById("msg");

if (validator.isEmail(email)) {
    msgElement.textContent = "Vítej na stránce";
    msgElement.classList.add("msg--valid");
    msgElement.classList.remove("msg--invalid");
} else {
    msgElement.textContent = "Špatně zadaný email, zkus to znova!";
    msgElement.classList.add("msg--invalid");
    msgElement.classList.remove("msg--valid");
}

console.log(validator.isEmail("ja@seznam.cz"));
console.log(validator.isCreditCard("4125010001000208"));
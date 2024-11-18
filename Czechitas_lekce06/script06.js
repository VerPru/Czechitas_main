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


/*UKOL-1 Cvičení: Knihovny

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

*/

/*PO PŘESTÁVCE - JEDNA

tohle se jmenuje arrow funkce, pokazde kdyz se zavolat ta funkce ahoj, pokazde se napíše i to "Nečum" mohu do něj doplnovat informace, jsou ruzne druhy jak dostat tu informaci - vypisovat, pak matematicke operace, pak i s podminkou

const ahoj = (jmeno, idZamestnance) => {
    console.log(`Nečum na mě ${jmeno} - ${idZamestnance}`)
}


ahoj("Michale", 123)
ahoj("Jano", 12)
ahoj("Eriku")
ahoj("Lucie", 1234)


const nasobeni = (cislo1, cislo2) => {
    return cislo1 * cislo2
}
console.log(nasobeni(10, 10))
const spravneTelCislo = (tel) => {
    if(validator.isMobilePhone(tel, "cs-CZ")) {
        return true
    } else {
        return false
    }
}
console.log(spravneTelCislo("123456789"))
*/

/*
//DALŠÍ PŘÍKLAD OD MICHALA - tady si definuju tu funkci, takže když se něco změní, tak to měním jen na tomhle místě - třeba když bude muset mít 16míst místo 12ti míst :) Nemusím to měnit na dalších tisících místech jen tady prostě

const bezpecneHeslo =(heslo)=> {
    if(heslo.lenght > 12 && heslo.contains("@")){
        return true
    }

    return false
}

const heslo = prompt ("Zadej heslo")

if(bezpecneHeslo(heslo)) {
    console.log("Super!")
} else {
    console.log("Ne-bezpečné heslo")
}
*/

// ÚKOL - Obsah elipsy

document.body.innerHTML += '<h1>Obsah elipsy</h1>'

const ellipseArea = (vyska, sirka) => {
    return (vyska / 2) * (sirka / 2) * Math.PI;
}

// Funkce pro zobrazení výsledků na stránce
const displayEllipseArea = (vyska, sirka) => {
    const area = ellipseArea(vyska, sirka);
    document.body.innerHTML += `<p>Obsah elipsy pro šířku ${vyska} a výšku ${sirka} je: ${area}</p>`;
}

// Testování funkce s různými hodnotami a zobrazení výsledků na stránce
displayEllipseArea(1, 2);  // Očekávaný výsledek: 1.5707963267948966
displayEllipseArea(2, 2);  // Očekávaný výsledek: 3.141592653589793
displayEllipseArea(3, 5);  // Další testovací hodnota

//ÚKOL - MAX ZE DVOU ČÍSEL

document.body.innerHTML += '<h1>Max ze dvou čísel</h1>'

const max2 = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Funkce pro zobrazení výsledků na stránce
const displayMax2Result = (num1, num2) => {
    const maxNumber = max2(num1, num2);
    document.body.innerHTML += `<p>Větší číslo z ${num1} a ${num2} je: ${maxNumber}</p>`;
}

// Testování funkce s různými hodnotami a zobrazení výsledků na stránce
displayMax2Result(10, 20);   // Očekávaný výsledek: 20
displayMax2Result(30, 25);   // Očekávaný výsledek: 30
displayMax2Result(7, 7);     // Očekávaný výsledek: 7 (v případě shody vrátí jedno z nich)

//ÚKOL - Kontrola DIČ

document.body.innerHTML += '<h1>Kontrola DIČ - v konzoli</h1>'

const isDIC = (inputStr) => {
    // Zkontrolujeme, zda je řetězec kratší než 11 znaků
    if (inputStr.length < 11) {
        return false;
    }

    // Zkontrolujeme, zda je řetězec delší než 12 znaků
    if (inputStr.length > 12) {
        return false;
    }

    // Uložíme první dva znaky do proměnné prefix
    const prefix = inputStr.slice(0, 2);

    // Zkontrolujeme, jestli prefix je "CZ"
    if (prefix !== "CZ") {
        return false;
    }

    // Uložíme zbytek řetězce (od třetího znaku dál) do proměnné digits
    const digits = inputStr.slice(2);

    // Zkontrolujeme, zda jsou všechny znaky v proměnné digits číslice
    if (!validator.isInt(digits)) {
        return false;
    }

    // Pokud funkce došla až sem, všechny testy prošly, vrátíme true
    return true;
};

// Testování funkce s různými vstupy
console.log(isDIC("CZ123456789"));    // Očekávaný výsledek: true (platné DIČ)
console.log(isDIC("CZ12345678"));     // Očekávaný výsledek: false (méně než 11 znaků)
console.log(isDIC("CZ1234567890"));  // Očekávaný výsledek: true (platné DIČ)
console.log(isDIC("CZ123456789012")); // Očekávaný výsledek: false (více než 12 znaků)
console.log(isDIC("SK123456789"));    // Očekávaný výsledek: false (neplatný prefix)
console.log(isDIC("CZ12345abc"));     // Očekávaný výsledek: false (obsahuje nečíselné znaky)

/*
const jmeno = "      Michal       "
const heslo = "afnlanfjlaneegsegsehghčýzščý"
//             0123456789

const rodneCislo = 915415/4724
const telCislo = "721327182"

console.log(jmeno)
console.log(jmeno.trim()) //umaže tu hnusnou mezeru, píšeme prvně jméno.trim() protože to používám jen v textovém řetězci

console.log(heslo.length) //vlastnost, vráti to počet znaků řetězce
console.log(jmeno.length) //vrati počet znaků s těmi mezerami

const castHesla = heslo.slice(0,4) //funknce, uřízne jedu od nuly do 4 - tzn první 4

console.log(castHesla)

console.log(heslo.indexOf("fnla")) //vyhodí mi na které pozici začínají ty znaky

//const poziceLomitka = rodneCislo.indexOf("/") + 1

//console.log(rodneCislo.slice(poziceLomitka, poziceLomitka + 5))

console.log(jmeno.toLoweCase())
console.log(jmeno.toUpperCase())

console.log(telCislo.padStart(13, "+420"))


*/
/* tohle to je to stejné akorát to psal lektor, já tam někde mám chybu:


const jmeno = "     Michal     "
const heslo = "QWKH3912qidakjeqw@(#("
//             0123456789
const rodneCislo = "980514/3366"
const telCislo = "111222333"

console.log(jmeno)
console.log(jmeno.trim())

console.log(heslo.length) // vlastnost, která vrátí počet znaků
console.log(jmeno.length)

const castHesla = heslo.slice(0, 4)

console.log(castHesla)


console.log(heslo.indexOf("KH"))

const poziceLomitka = rodneCislo.indexOf("/") + 1

console.log(rodneCislo.slice(poziceLomitka, poziceLomitka + 5))

console.log(jmeno.toLowerCase())
console.log(jmeno.toUpperCase())

console.log(telCislo.padStart(13, "+420")) //přidala to k tomu - tzn. +420111222333
console.log(telCislo.padEnd(13, "0")) //přidala to k tomu tzn. 1112223330000

*/

/* Interpolace řetězců - tomuhle `` se říká backtiky :D 
//je to mnohem rychlejší na napsání, nemusím všude dělat ty debilní úvozovky a navíc nevadí ani pluska
const zprava = ` 
<h1>Ahoj svete</h1>
<p>Tve dnesni stastne cislo je ${Math.floor(Math.random() * 1000)}</p>

<p>Tvoje mys je prave na souradnicich ${100 * 100}</p>
`

document.body.innerHTML = zprava
*/




/*

úkoly!!! nemám je dodělané!!!


document.body.innerHTML += "<h1> Vlastnosti a metody - Oblíbený film</h1>"

const title = "Pán prstenů";

console.log("Počet znaků názvu:", title.length);

console.log("Název velkými písmeny:", title.toUpperCase());

console.log("Prvních pět písmen:", title.substring(0, 5));

console.log("Posledních pět písmen:", title.slice(-5)); //nebo title.slice(title.length - 5, title.length)


document.body.innerHTML += "<h1> Vlastnosti a metody - Emaily</h1>"

const email = "jmeno.prijmeno@domena"

console.log("Pozice @: ", email.indexOf("@"))

// Najdeme pozici zavináče
const atIndex = email.indexOf("@")

// Použití slice k získání uživatelského jména (od začátku do pozice zavináče)
const userName = email.slice(0, atIndex);
console.log(userName)

// Použijeme slice k získání domény (od pozice po zavináči až do konce)
const domain = email.slice(atIndex + 1);
console.log(domain)

const parsedEmail = {
    userName: 'jouda.houda',
    domain: 'gmail.com',
  };

console.log(parsedEmail)

*/

// PODMÍNKY!!!

/*
const vek = 18

// < <= > >= === !== 
if(vek >= 18) {
  document.body.innerHTML = "<h1>Vitej na strance </h1>"

const kategorie = prompt("Jakou kategorii chceš? (pivo, vino, tvrdy)").toLocaleLowerCase()

if(kategorie === "pivo"){
    document.body.innerHTML += "<p> Máme nejlepší pivo</p>"
} else if (kategorie === "vino") {
    document.body.innerHTML += "<p> Máme nejlepší barevné víno</p>"
} else if (kategorie === "tvrdy") {
    document.body.innerHTML += "<p> Máme nejlepší becherovku</p>"
} else {
    document.body.innerHTML += "<p>Error 404: Alcohol not found </p>"
}
} else {
  document.body.innerHTML = "<h1>Na tuto stranku nemuzes vstoupit</h1>"
}

const vek = 18

// < <= > >= === !== 
if(vek >= 18) {
  document.body.innerHTML = "<h1>Vitej na strance s nejlepsim alkoholem v CR</h1>"

  const kategorie = prompt("Jakou kategorii alkoholu si prejes? (pivo, vino, tvrde)")

  if(kategorie.toLowerCase() === "pivo") {
    document.body.innerHTML += "<p>Mame nejlepsi piva, treba StaroBrno </p>"
  } else if(kategorie.toLowerCase() === "vino") {
    document.body.innerHTML += "<p>Mame nejlepsi cervena, bila a mozna i jinak barevna vina</p>"
  } else if(kategorie.toLowerCase() === "tvrde") {
    document.body.innerHTML += "<p>Mame nejlepsi Becherovku, odebira od nas i Zeman</p>"
  } else {
    document.body.innerHTML += "<p>Error 404: alkohol not found</p>"
  }
} else {
  document.body.innerHTML = "<h1>Na tuto stranku nemuzes vstoupit</h1>"
}

*/


/*
const vek = 18
const pravda = true
const nepravda = false

const pizzerie = {
  pizza1: "Hawaii",
  pizza1Roznaska: true,
}

if(pizzerie.pizza1Roznaska) {
  document.body.innerHTML = "<p>Ano, tuto pizzu rozvazime</p>"
}

if(pravda === true) {
  console.log("Proslo to")
}

if(pravda) {
  console.log("Proslo to")
}

*/



/*
// PRAVDA NEPRAVDA - variabta navíc, která je jen pro dvě možnosti
const pizzerie = {
    pizza1: "Hawaii",
    pizza1Roznaska: true,
  }
  
  
  // Varianta 1
  if(pizzerie.pizza1Roznaska) {
    document.body.innerHTML = "<p>Ano, tuto pizzu rozvazime</p>"
  } else {
    document.body.innerHTML = "<p>Ne, tuto pizzu nerozvazime</p>"
  }
  
  
  // Varianta 2
  document.body.innerHTML += pizzerie.pizza1Roznaska ? "<p>Ano, tuto pizzu rozvazime</p>" : "<p>Ne, tuto pizzu nerozvazime</p>"

  */


  /* Získání hodnot od uživatele a uložení do pojmenovaných proměnných:

V předchozí lekci jsem vytvářeli stránku pro registraci na očkování. Chtěli jsme po uživateli jméno a věk. Nyní budeme chtít, aby uživatel zadal také heslo. To bychom v pozdější verzi aplikaci mohli použít například k přihlášení do systému.

Vytvořte novou stránku, nebo pokračujte ve stránce z předchozí lekce pro registraci na očkování.

Nejdříve nechte uživatele zadat všechny hodnoty, tedy jméno, věk i heslo. Uložte si je do dobře pojmenovaných proměnných.
Napište první podmínku, ve které zkontrolujte, že věk uživatele je větší nebo roven 65. Pokud ano, vypište do stránky „věk v pořádku“. Pokud uživateli není alespoň 65 let, vypište „nízký věk“.
Napište druhou podmínku, která zkontroluje, zda je zadané heslo delší než osm znaků. Pokud není, vypište „slabé heslo“. Heslo se bude kontrolovat pouze v případě, kdy uživatel splnil první podmínku (věk alespoň 65 let).

*/

/*
// VYPRACOVÁNÍ ÚKOLU:
const jmeno = (prompt("Zadejte svoje jméno"))

const vek = (prompt("Zadejte svůj věk"))

const heslo = (prompt("Zadejte svoje heslo"))

if(vek >= 65){
    document.body.innerHTML = "<p>Věk v pořádku.</p>"
  } else {
    document.body.innerHTML = "<p>Nízký věk.</p>"
  }

  if (heslo.length > 8) {

    document.body.innerHTML = "<p>OK</p>"
} else {
  document.body.innerHTML = "<p>Slabé heslo</p>"

  }

  */

/*Pokusme se o základ jednoduchého rezervačního sestému pro vstupenky do divadla.

Založte si webovou stránku s JavaScriptem.
Nechte uživatele zadat jeho věk.
Vytvořte si proměnnou plnaCena, udávající základní cenu vstupenky a uložte do ní hodnotu 12.
Vytvořte podmínku, která do proměnné cena uloží cenu spočítanou podle věku uživatele dle následujících pravidel:
0 euro pro návštěvníky mladší 6 let,
65 % ze základní ceny pro návštěvníky 6 až 26 let (žák, student),
100 % ze základní ceny pro návštěvníky 27 až 64 let (dospělý),
50 % ze základní ceny pro ostatní (senior).
Nezapomeňte na zaokrouhlování, ať nám cena vyjde v celých eurech.
Nakonec spočtenou cenu vypište s nějakou hezkou zprávou na výstup.

*/

//VYPRACOVÁNÍ ÚKOLU:

const vek = (prompt("Zadejte svůj věk"))

const plnaCena = 12

let cena

if (vek < 0) {
    document.body.innerHTML = "Neplatný věk. Prosím, zadejte správný věk.";
} else if (vek < 6) {
  cena = 0; // 0 euro pro návštěvníky mladší 6 let
  document.body.innerHTML = "Vaše vstupné je zdarma.";
} else if (vek <= 26) {
  cena = Math.round(plnaCena * 0.65); // 65 % ze základní ceny
  document.body.innerHTML = "Vaše vstupné je " + cena + " euro (zlevněné pro žáky a studenty).";;
} else if (vek <= 64) {
  cena = plnaCena; // 100 % ze základní ceny
  document.body.innerHTML = "Vaše vstupné je" + cena + "euro (plná cena pro dospělé).";
} else {
  cena = Math.round(plnaCena * 0.5); // 50 % ze základní ceny
  document.body.innerHTML = "Vaše vstupné je" + cena +  "euro (zlevněné pro seniory)." ;
}
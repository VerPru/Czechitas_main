const hodinovka = 300
const pocetHodin = Number(prompt ("Zadej pocet hodin zamestnance", "160")) //díky tomu vyskočí takový cool okno, když pustím Do Live 
const premie = Number(prompt ("Zadej mimořádnou odměnu v Kč")) //musím napsat ot Number aby počítal čísla jako čísla a ne jako string co lepší tím plusíkem věci jen k sobě

const plat = (hodinovka * pocetHodin) + premie

document.body.innerHTML = "<p> Pepa Novák si vydělal: " + plat + "Kč.</p>"

document.body.innerHTML += "<h2>Lekce 03 - Očkování</h2>"

const jmeno = prompt ("Jaké je vaše jméno?")
const vek = Number(prompt("Jaký je váš věk?"))


document.body.innerHTML += "<p>Nejlepší " + jmeno + " má tohoto času právě " + vek + " let.</p>";
document.body.innerHTML += <p>jmeno + " věk: " + vek </p>

document.body.innerHTML += "<h2>Lekce 03 - Výplata jako stránka</h2>"
const nadpis = document.querySelector("h1") //odkazuju se na h1 z indexu
const nadpis2 = document.querySelectorAll("h1") //pak se k němu vrátíme - vytahuju všechny h1 z dokumentu

nadpis.textContent = "toto jsem změnila"
nadpis.style.color="yellow"
nadpis.style.backgroundColor="red"

console.log(nadpis2)
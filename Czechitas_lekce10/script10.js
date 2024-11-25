const jmeno = "Michal"
//       012345
const jmenoPole = ["M", "i", "c", "h", "a", "l"]
//            0    1    2    3    4    5

console.log(jmenoPole[2])
console.log(jmenoPole[5])

console.log(jmeno[2])
console.log(jmeno[5])

const teploty = [10, 11, 12, 15, 20.2, 25, 31.3, 20, 15, 5, -10]

/*
// první pole
console.log(teploty[3])

const mesta = [
    ["Praha", 1000000], // 0
    //  0         1
    ["Brno", 300000], // 1
    //  0        1
    ["Ostrava", 100000] // 2
    //  0        1
]

console.log(mesta[1][1])
console.log(mesta[2][0])

const knihy = [
    {nazev: "Kniha 1", cena: 100, jazyk: "CZ"},
    {nazev: "Kniha 2", cena: 200, jazyk: "CZ", naSklade: true, rozvoz: true},
    {nazev: "Kniha 3", cena: 300, jazyk: "CZ"}
]

const kniha = ["Kniha 1", 200, "CZ", 16000, true, true]

console.log(knihy[2].nazev)
*/

/*
console.log(teploty.length)
console.log(teploty.reverse()) // obraceni pole

teploty.push(100) // prida prvek na konec pole
console.log(teploty)

teploty.pop() // smaze posledni prvek v poli
console.log(teploty)

teploty.unshift(200) // prida prvek na zacatek pole
console.log(teploty)

teploty.shift() // smaze prvni prvek v poli
console.log(teploty)

teploty.sort((a, b) => a - b) // seradi pole
console.log(teploty)

const jmena = ["Michal", "Jana", "Martina"]

console.log(jmena.join(",")) // spoji hodnoty a vytvori jeden retezec

const jmena2 = ["Michal", "Jana", "Martina"]

const vsechnaJmena = jmena.concat(jmena2) // spoji dve pole dohromady

console.log(vsechnaJmena)

console.log(vsechnaJmena.indexOf("Michal")) // najde a vrati prvni index hledane hodnoty

const knihy = [
    {nazev: "Kniha 1", cena: 100, jazyk: "CZ"},
    {nazev: "Kniha 2", cena: 200, jazyk: "CZ"},
    {nazev: "Kniha 3", cena: 300, jazyk: "CZ"},
    {nazev: "Kniha 4", cena: 400, jazyk: "CZ"},
    {nazev: "Kniha 5", cena: 500, jazyk: "CZ"},
    {nazev: "Kniha 6", cena: 600, jazyk: "CZ"},
    {nazev: "Kniha 7", cena: 700, jazyk: "CZ"},
    {nazev: "Kniha 8", cena: 800, jazyk: "CZ"},
    {nazev: "Kniha 9", cena: 900, jazyk: "CZ"},
    {nazev: "Kniha 10", cena: 1000, jazyk: "CZ"},
    {nazev: "Kniha 11", cena: 1100, jazyk: "CZ"},
    {nazev: "Kniha 12", cena: 1200, jazyk: "CZ"},
    {nazev: "Kniha 13", cena: 1300, jazyk: "CZ"},
    {nazev: "Kniha 14", cena: 1400, jazyk: "CZ"},
    {nazev: "Kniha 15", cena: 1500, jazyk: "CZ"},
    {nazev: "Kniha 16", cena: 1600, jazyk: "CZ"},
    {nazev: "Kniha 17", cena: 1700, jazyk: "CZ"},
    {nazev: "Kniha 18", cena: 1800, jazyk: "CZ"},
    {nazev: "Kniha 19", cena: 1900, jazyk: "CZ"},
    {nazev: "Kniha 20", cena: 2000, jazyk: "CZ"},
    {nazev: "Kniha 21", cena: 2100, jazyk: "CZ"},
    {nazev: "Kniha 22", cena: 2200, jazyk: "CZ"},
    {nazev: "Kniha 23", cena: 2300, jazyk: "CZ"},
    {nazev: "Kniha 24", cena: 2400, jazyk: "CZ"},
    {nazev: "Kniha 25", cena: 2500, jazyk: "CZ"},
    {nazev: "Kniha 26", cena: 2600, jazyk: "CZ"},
    {nazev: "Kniha 27", cena: 2700, jazyk: "CZ"},
    {nazev: "Kniha 28", cena: 2800, jazyk: "CZ"},
    {nazev: "Kniha 29", cena: 2900, jazyk: "CZ"},
    {nazev: "Kniha 30", cena: 3000, jazyk: "CZ"}
]

knihy.forEach(item => {
    document.body.innerHTML += `
    <h2>${item.nazev}</h2>
    <p>Cena: ${item.cena}, Jazyk: ${item.jazyk}</p>
    `
})

const ceskaJmena = [
    "Jan", "Petr", "Jakub", "Tomáš", "Michal",
    "Martin", "David", "Jiří", "Lukáš", "Vojtěch",
    "Filip", "Marek", "Ondřej", "Daniel", "Adam",
    "Josef", "Viktor", "Štěpán", "Karel", "Jaroslav",
    "Radek", "Matěj", "Roman", "Miloš", "Jindřich",
    "Vladimír", "Aleš", "Stanislav", "Zdeněk", "Dominik",
    "Patrik", "Antonín", "Richard", "Radim", "Eduard",
    "Tomášek", "Alexandr", "Bohuslav", "Oldřich", "Lubomír",
    "František", "Rudolf", "Dalibor", "Erik", "Vlastimil",
    "Marian", "Sebastian", "Václav", "Tadeáš", "Bohumil"
]

const emails = ceskaJmena.map(item => `${item}@czechitas.cz`)

console.log(emails)

*/

//UKOLY: https://github.com/aellopos/Kurz-JS-1/blob/main/solution/lekce-10.md

// 1. Vytvořte pole celých čísel, například počty diváků na několika po sobě jdoucích divadelních představeních
const divaci = [120, 150, 200, 180, 250];
divaci.push(300); // Přidání počtu diváků na nové představení
console.log("Počty diváků po přidání nového představení:", divaci);

// 2. Vytvořte pole desetinných čísel, například zaplněnost divadla v několika po sobě jdoucích představeních
const zaplnenost = [0.85, 0.75, 0.90, 0.95, 0.80];
zaplnenost.pop(); // Odstranění poslední hodnoty v poli
console.log("Zaplňenost po odstranění poslední hodnoty:", zaplnenost);

// 3. Vytvořte pole řetězců, například seznam názvů několika divadelních představení, která divadlo hraje
const plays = ["Hamlet", "Romeo a Julie", "Plyšáci na útěku", "Lakomec", "Král Lear"];
const druhaPolozka = plays[1]; // Uložení druhé položky do jiné proměnné
console.log("Seznam představení:", plays);
console.log("Druhá položka seznamu:", druhaPolozka);

// 4. Uložte do proměnné reviews pole hodnocení pro divadelní hru Plyšáci na útěku
const reviews = [
    {casopis: "Theater Weekly", hodnoceni: 8},
    {casopis: "Drama Digest", hodnoceni: 9},
    {casopis: "Play Review", hodnoceni: 7},
    {casopis: "Critics' Corner", hodnoceni: 10},
    {casopis: "Stage Magazine", hodnoceni: 6}
];
console.log("Hodnocení hry Plyšáci na útěku:", reviews);


//práce s indexy úkol:

// 1. Funkce `first`
const first = (arr) => {
    return arr.length > 0 ? arr[0] : undefined;
  };
  console.log(first([3, 2, 1])); // → 3
  console.log(first([])); // → undefined
  
  // 2. Funkce `last`
  const last = (arr) => {
    return arr.length > 0 ? arr[arr.length - 1] : undefined;
  };
  console.log(last([3, 2, 1])); // → 1
  console.log(last([])); // → undefined
  
  // 3. Funkce `middle`
  const middle = (arr) => {
    if (arr.length === 0) return undefined;
    if (arr.length % 2 === 0) return arr[Math.floor(arr.length / 2) - 1];
    return arr[Math.floor(arr.length / 2)];
  };
  console.log(middle([3, 2, 1])); // → 2
  console.log(middle([3, 2, 1, 0])); // → 2
  console.log(middle([])); // → undefined
  
  // 4. Funkce `middleMean`
  const middleMean = (arr) => {
    if (arr.length === 0) return undefined;
    if (arr.length % 2 === 0) {
      const mid1 = arr[Math.floor(arr.length / 2) - 1];
      const mid2 = arr[Math.floor(arr.length / 2)];
      return (mid1 + mid2) / 2;
    }
    return arr[Math.floor(arr.length / 2)];
  };
  console.log(middleMean([3, 2, 1])); // → 2
  console.log(middleMean([3, 2, 1, 0])); // → 1.5
  console.log(middleMean([])); // → undefined
  
  // 5. Funkce `insert`
  const insert = (arr, value) => {
    if (arr.includes(value)) return false;
    arr.push(value);
    return true;
  };
  console.log(insert([3, 2, 1], 4)); // → true
  console.log(insert([3, 2, 1], 3)); // → false

  //počítání oveček

  // Pole jmen oveček
const ovciJmena = [
  "Bětuška",
  "Čína",
  "Dolly",
  "Heidy",
  "Líza",
  "Belinda",
  "Celia",
  "Elvíra",
  "Karla",
  "Otylie",
  "Škraboška",
  "Kopretinka",
  "Berta",
  "Růženka",
  "Bobinka",
  "Žofka",
  "Dášenka",
  "Vlnka",
  "Květuše",
  "Pampeliška"
];

// Element na stránce, kam se příběh vloží
const pribehElement = document.querySelector("#pribeh");

// Generování vět pro prvních 10 oveček
ovciJmena.slice(0, 10).forEach((jmeno, index) => {
  const veta = `Ovečka ${jmeno} jako ${index + 1}. přeskočila přes plot. `;
  pribehElement.innerHTML += veta; // Přidání věty do stránky
});

//další od Michala

const selectSmiley = (event) => {
  event.target.classList.add('btn-smiley--selected');
};

const btns = document.querySelectorAll(".btn-smiley")

btns.forEach(btn => { btn.addEventListener("click", selectSmiley) })

// Jeste kratsi varianta - document.querySelectorAll(".btn-smiley").forEach(btn => { btn.addEventListener("click", selectSmiley) }

//ukol z kodim:

const napoje = [
  { nazev: 'Pivo', cena: 12, skladem: true },
  { nazev: 'Rum', cena: 120, skladem: false },
  { nazev: 'Víno', cena: 85, skladem: true },
  { nazev: 'Whisky', cena: 450, skladem: true },
  { nazev: 'Vodka', cena: 280, skladem: false },
  { nazev: 'Becherovka', cena: 210, skladem: true },
  { nazev: 'Kofola', cena: 40, skladem: true },
  { nazev: 'Voda', cena: 15, skladem: false },
]

// ["Pivo", "Rum", "Vino"]

const pojmenovaniNapoju = napoje.map(polozka => polozka.nazev)
const pojmenovaniNapoju2 = napoje.map(function(polozka) { // { nazev: 'Pivo', cena: 12, skladem: true }
  // if(polozka.skladem) {
  //     return polozka.nazev
  // } else {
  //     return "Neni skladem"
  // }

  return polozka.skladem ? polozka.nazev : "Neni skladem"
})

console.log(pojmenovaniNapoju)
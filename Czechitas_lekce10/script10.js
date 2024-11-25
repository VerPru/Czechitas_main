const jmeno = "Michal"
//       012345
const jmenoPole = ["M", "i", "c", "h", "a", "l"]
//            0    1    2    3    4    5

console.log(jmenoPole[2])
console.log(jmenoPole[5])

console.log(jmeno[2])
console.log(jmeno[5])

const teploty = [10, 11, 12, 15, 20.2, 25, 31.3, 20, 15, 5, -10]

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
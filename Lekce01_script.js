var jmeno = "Veronika" //nepoužíváme
let vek = 33 // můžeme upravit
const pozice = "Superstar"//nemůžeme upravit!!!!
//tyhle tři řádky jsou "deklarace proměnné"



//  var/let/const + jemno/vek = Veronika/33
// klíčové slovo + název proměnné = hodnota


document.body.innerHTML += "<p>" + pozice + "</p>"
document.body.innerHTML += "<p>" + vek + "</p>"
document.body.innerHTML += "<p>" + jmeno + "</p>"


vek = 21
vek = Math.floor(Math.random() * 100)

document.body.innerHTML += "<p>" + pozice + "</p>"
document.body.innerHTML += "<p>" + vek + "</p>"
document.body.innerHTML += "<p>" + jmeno + "</p>"


/*
document.body.innerHTML = "<h2>Hello czechitas!!</h2>"
document.body.innerHTML += "<p>" + (1+1) + "</p>"
document.body.innerHTML += "<p>" + (10* 10) + "</p>"

// + - * /
// % - nepochopila jsem co to je :D 

document.body.innerHTML += "<p>Michal" + " Kucera<p/>"

document.body.innerHTML += "<p>" + (Math.ceil(2.2)) + "</p>" //zaokrouhování jen nahoru - je tam 3
document.body.innerHTML += "<p>" + (Math.floor(2.2)) + "</p>" //zaokrouhlování jen dilu - je tam 2
document.body.innerHTML += "<p>" + ((Math.floor(Math.random()* 100))) + "</p>"
*/
const nadpis = document.querySelector("h1") //odkazuju se na h1 z indexu
const nadpis2 = document.querySelectorAll("h1") //pak se k němu vrátíme - vytahuju všechny h1 z dokumentu

nadpis.textContent = "toto jsem změnila"
nadpis.style.color="yellow"
nadpis.style.backgroundColor="red"

console.log(nadpis2)

nadpis.classList.add("ramecek") //pridam ten elememt a definuju si ho v ccs souboru, je to case sensitive

//hastag níže píšu, proto že když zakladam id tak píšu #něco
document.querySelector("#obrazek-kocka").src="https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg="
document.querySelector("#obrazek-kocka").style.width = "200px"
document.querySelector("#obrazek-kocka").alt = "Krásná kočička" //alternativní text
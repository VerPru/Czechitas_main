const jeSude = (cislo) => {
    if(cislo % 2 === 0) {
      return true
    } else { 
      return false
    }
  }
  
  const jeSude2 = (cislo) => {
    return cislo % 2 === 0 ? true : false
    //          vyraz      pravda   nepravda
  }
  
  const jeSude3 = (cislo) => cislo % 2 === 0 ? true : false 
  
  const jeSude4 = cislo => cislo % 2 === 0 ? true : false 
  
  console.log(jeSude(2))
  console.log(jeSude4(2))
  
  const generujNahodneCislo = () => {
    return Math.floor(Math.random() * 100)
  }
  
  const generujNahodneCislo2 = () => Math.floor(Math.random() * 100)
  
  console.log(generujNahodneCislo2())
  
  const produkt1 = {
    nazev: "mikrovlnka",
    cena: 500,
    kategorie: "domaci spotrebice"
  }
  
  const zobrazProdukt = produkt => {
    document.body.innerHTML = `
    <h2>${produkt.nazev}</h2>
    <p>cena: ${produkt.cena}</p>
    <p>kategorie: ${produkt.kategorie}</p>
    `
  }
  
  const vysledek = zobrazProdukt(produkt1)
  
  console.log(vysledek)

  const name = 'Franta';

const greet = (name) => {
  const name = 'Pepa';
  document.body.innerHTML += `<p>${name}</p>`;
};

greet('Jožin');
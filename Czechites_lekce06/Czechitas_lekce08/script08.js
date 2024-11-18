/*const overeniHesla = (heslo) => {
  if (heslo.length > 10) {
    return true;
  } else {
    return false;
  }
};

// Kratší varianta
// return heslo.length > 10 ? true : false;
  
  const registrace = (jmeno, heslo, overeniHesla) => {
    if (!overeniHesla(heslo)) {
      return `<p>Uživatel ${jmeno} nebyl úspěšně registrován! Heslo je příliš krátké.</p>`;
    }
    return `<p>Uživatel ${jmeno} s heslem: '${heslo}' je úspěšně registrován!</p>`;
  };
  
  const jmeno = prompt("Zadej jméno");
  const heslo = prompt("Zadej heslo");
  
  document.body.innerHTML = registrace(jmeno, heslo, overeniHesla);

  */
/*
 //Kalkulačka

 const kalkulacka = (cislo1, cislo2, op) => {
  if (op === "+") {
    return cislo1 + cislo2;
  } else if (op === "-") {
    return cislo1 - cislo2;
  } else if (op === "*") {
    return cislo1 * cislo2;
  } else if (op === "/") {
    if (cislo2 === 0) {
      return "ERROR: nelze dělit nulou";
    } else {
      return cislo1 / cislo2;
    }
  } else {
    return null;
  }
};

const plus = (cislo1, cislo2) => {
  return cislo1 + cislo2;
};

const minus = (cislo1, cislo2) => {
  return cislo1 - cislo2;
};

const kalkulacka2 = (cislo1, op, cislo2) => {
  return op(cislo1, cislo2);
};

console.log(kalkulacka2(5, plus, 3));  // Výsledek: 8
console.log(kalkulacka2(10, minus, 4)); // Výsledek: 6

*/

//pak by měly být úkoly z lekce 08

const vypisZpravu = () => {
  document.body.innerHTML += `<p>Čas vypršel</p>`;
};

const vypisZpravu2 = () => {
  document.body.innerHTML += `<p>Interval vypršel</p>`;
};

setTimeout(vypisZpravu, 5000);
setInterval(vypisZpravu2, 2000);
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
  const hes
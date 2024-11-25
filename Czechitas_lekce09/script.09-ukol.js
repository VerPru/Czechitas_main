// Funkce pro zpracování kliknutí na tlačítka s čísly
const handleDigitClick = (event) => {
    const button = event.target; // Získáme tlačítko, na které bylo kliknuto
    const digit = button.textContent; // Získáme text tlačítka
    const display = document.querySelector('.calculator__display'); // Displej kalkulačky
  
    // Pokud je na displeji "0", nahraďte ji kliknutou číslicí
    if (display.textContent === '0') {
      display.textContent = digit;
    } else if (display.textContent.length < 9) {
      // Přidání číslice na displej (maximálně 9 číslic)
      display.textContent += digit;
    }
  };
  
  // Přidání posluchače na všechna tlačítka s čísly
  const digitButtons = document.querySelectorAll('.calculator__button--digit');
  digitButtons.forEach((button) => {
    button.addEventListener('click', handleDigitClick);
  });
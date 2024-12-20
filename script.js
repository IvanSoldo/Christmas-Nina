const titleText = 'Blagoslovljen Božić, Nina!';
const subtitleText = 'Draga Nina,\n\nNeka Božji blagoslov ispuni tvoje srce mirom, ljubavlju i radošću ovoga Božića. Neka Njegova prisutnost bude tvoja snaga u svakodnevici i svjetlo koje te vodi.\n\nHvala ti što dijeliš vjeru, radost i zajedništvo s nama. Sretan i blagoslovljen Božić te uspješna nova godina ispunjena milostima! 🎄🙏';

let charIndex = 0;

function showMessage() {
  if (charIndex < titleText.length || charIndex < subtitleText.length) {
    const titleElement = document.getElementById('title');
    const subtitleElement = document.getElementById('subtitle');
    if (charIndex < titleText.length) {
      titleElement.innerHTML += titleText.charAt(charIndex);
    }
    if (charIndex < subtitleText.length) {
      subtitleElement.innerHTML += subtitleText.charAt(charIndex);
    }
    charIndex++;
    setTimeout(showMessage, 50);
  }
}

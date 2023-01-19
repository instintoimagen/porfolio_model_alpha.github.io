const $contactDisplay = document.querySelector(".contact-display");

document.getElementById("btn-tel").addEventListener("click", (e) => {
  $contactDisplay.innerHTML = `
     <h3>mi tel y whatsapp es:</h3>
    <a href="https://wa.me/541144556677" target="_blank" rel=”noopener noreferrer”>
    <h2>+54 11 44556677</h2>
    </a>
     `;
});
document.getElementById("btn-mail").addEventListener("click", (e) => {
  $contactDisplay.innerHTML = `
 <h3>mi e-mail es:</h3>
 <a href="mailto:maite.dev@gmail.com">
 <h2>maite.dev@gmail.com</h2>
 </a>
 `;
});

document.getElementById("btn-geo").addEventListener("click", (e) => {
  $contactDisplay.innerHTML = `
     <h3>mi ubicacion es:</h3><a href="https://www.google.com/maps/place/Argentina" target="_blank" rel=”noopener noreferrer”>
    <h2>Argentina</h2>
     `;
});

document.getElementById("btn-linkedin").addEventListener("click", (e) => {
  $contactDisplay.innerHTML = `
     <h3>mi Linkedin es:</h3>
     <a href="https://linkedin.com" target="_blank" rel=”noopener noreferrer”>
    <h2>www.linkedin.com/in/maite</h2>
    </a>
     `;
});

document.getElementById("btn-github").addEventListener("click", (e) => {
  $contactDisplay.innerHTML = `
     <h3>mi repositorio en GitHub es:</h3>
     <a href="https://github.com" target="_blank" rel=”noopener noreferrer”>
    <h2>www.github.com/maite</h2>
    </a>
     `;
});

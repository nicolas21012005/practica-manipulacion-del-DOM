const facebookBtn = document.getElementById("btn-facebook");
const captureImgUnique = document.querySelector('#imagen-unica');

facebookBtn.innerHTML = '<img src="img/Logo_de_Facebook.png" alt="facebook_logo">';
captureImgUnique.setAttribute('alt', 'texto alternativo agregado con JavaScript');
facebookBtn.setAttribute('href', 'https://www.facebook.com')
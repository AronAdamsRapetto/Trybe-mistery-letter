const btnGeraCarta = document.getElementById('criar-carta');

// function validaCarta() {
//   if(carta.length === 0){

//   }
// }

function geraCarta() {
  const textoInput = document.getElementById('carta-texto');
  const palavrasCarta = textoInput.value.split(' ');
  const carta = document.getElementById('carta-gerada');
  carta.innerHTML = '';
  for (let i = 0; i < palavrasCarta.length; i += 1) {
    const palavra = document.createElement('span');
    palavra.innerText = palavrasCarta[i];
    carta.appendChild(palavra);
  }
}

btnGeraCarta.addEventListener('click', geraCarta);

// function separaCarta() {
//     const palavrasCarta = document.getElementById('carta-texto').value.slit(' ');
// }

const mebleg = document.getElementById("mebleg");
const faiz = document.getElementById("faiz");
const ayliq = document.getElementById("ayliq");
const umumiMebleg = document.getElementById("umumiMebleg");
const order = document.getElementById("order");
const isdediyinmebleg = document.getElementById("isdediyinmebleg");
const LAbelFaiz = document.getElementById("LabelFaiz");
const LabelAy = document.getElementById("LabelAy");
const muddet = document.getElementById("muddet");



let bankinfaizi = 0;
let bankaodeyeceyim = 0;
let ayliqodenis = 0;


function kredit() {
  isdediyinmebleg.innerText = mebleg.value;
  LAbelFaiz.innerText = faiz.value;
  LabelAy.innerText = ayliq.value
  bankinfaizi = (Number(mebleg.value) * Number(faiz.value)) / 100;
  bankaodeyeceyim = Number(mebleg.value) + Number(bankinfaizi);
  ayliqodenis = Number(bankaodeyeceyim) / Number(ayliq.value);
  console.log(bankinfaizi.toFixed(2));
  console.log(bankaodeyeceyim.toFixed(2));
  console.log(ayliqodenis.toFixed(2));

  umumiMebleg.textContent = ayliqodenis;
}






document.getElementById("mebleg").addEventListener("input", kredit);
document.getElementById("umumiMebleg").addEventListener("umumiMebleg.textContent", kredit);
document.getElementById("ayliq").addEventListener("input", kredit);
document.getElementById("faiz").addEventListener("input", kredit);





const kartMelumatlari = [
  {
    id: 1,
    title: 'Miles taksit',
    description: ' Kartla edilən nağdsız ödənişlərə 1 AZN-ə 1 mil bonus qazandıran, pulsuz səyahət, faizsiz və komissiyasız taksit imkanı verən unikal bir kartdır. ',
    features1Name: '1.5%-dən başlayan',
    features1Desc: 'Keşbek ',
    features2Name: '1.5%-dən başlayan',
    features2Desc: 'Keşbek ',
    features3Name: '1.5%-dən başlayan',
    features3Desc: 'Keşbek ',
    image: 'https://www.kapitalbank.az/images/cards/B/birbank-umico-premium-home.png?v=5'
  },
  {
    id: 2,
    title: 'Cashback taksit',
    description: ' Kartla edilən nağdsız ödənişlərə 1 AZN-ə 1 mil bonus qazandıran, pulsuz səyahət, faizsiz və komissiyasız taksit imkanı verən unikal bir kartdır. ',
    features1Name: '1.5%-dən başlayan',
    features1Desc: 'Keşbek ',
    features2Name: '1.5%-dən başlayan',
    features2Desc: 'Keşbek ',
    features3Name: '1.5%-dən başlayan',
    features3Desc: 'Keşbek ',
    image: 'https://www.kapitalbank.az/images/cards/B/birbank-cashback-home.png?v=5'
  },
  {
    id: 3,
    title: 'Umico taksit',
    description: ' Kartla edilən nağdsız ödənişlərə 1 AZN-ə 1 mil bonus qazandıran, pulsuz səyahət, faizsiz və komissiyasız taksit imkanı verən unikal bir kartdır. ',
    features1Name: '1.5%-dən başlayan',
    features1Desc: 'Keşbek ',
    features2Name: '1.5%-dən başlayan',
    features2Desc: 'Keşbek ',
    features3Name: '1.5%-dən başlayan',
    features3Desc: 'Keşbek ',
    image: 'https://www.kapitalbank.az/images/cards/B/birbank-umico-home.png?v=5'
  },
]
const cardName = document.getElementById('cardName')
const cardDescription = document.getElementById('cardDescription')
const cardImage = document.getElementById('cardImage')
let saygac = 0

function melumatiGoster(saygac){
  cardName.innerText = kartMelumatlari[saygac].title;
  cardDescription.innerText = kartMelumatlari[saygac].description;
  cardImage.src = kartMelumatlari[saygac].image;
}

function previousSlideFunction() {
  if (saygac < 0) {
    saygac = kartMelumatlari.length-1;
    melumatiGoster(saygac)
  } else {
    saygac--;
    melumatiGoster(saygac)
  }
}
function nextSlideFunction() {
  saygac++
  if (saygac == kartMelumatlari.length) {
    saygac = 0;
    melumatiGoster(saygac)
  } else {
    melumatiGoster(saygac)
  }
}


previousSlide.addEventListener('click', previousSlideFunction)
nextSlide.addEventListener('click', nextSlideFunction)
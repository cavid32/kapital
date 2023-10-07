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





const kartMelumatlari2=[
  {
    id:1,
      title:"The interest rate",
      description:'you have been waiting for!',
      image:"https://www.kapitalbank.az/images/slider/version_111/gtk-109den-baslayan-kredit1685446155.png",  

},
{
  id:2,
  title:"Mortgage",
  description:" For those who want to own or renovate an apartment ",
    href:"More Details",
    image:"https://www.kapitalbank.az/images/slider/version_48/ipoteka-krediti1655890221.png",
},
{
  id:3,
  title:"Weekend work hours",
  description:" Many of our branches are open on Saturdays and Sundays.",
  image:"https://www.kapitalbank.az/images/slider/version_1/heftesonu-is-rejimi1639578179.webp",

},
{
id:4,
title:"Maaşın 20 mislinədək",
description:"kredit imkanı ödəyin!",
image:"https://www.kapitalbank.az/images/slider/version_6/neft-iscilerine-ozel-kampaniya1694781620.png",  


},

]
const online =document.getElementById("online");
const up=document.getElementById("up");
const order1= document.getElementById("order-a");
const img1=document.getElementById("img2");
const PrevIcon=document.getElementById("prev-icon");
const nexticon=document.getElementById("next-icon");

let change=0;

function gosder(change){
  console.log(change);
  online.innerText=kartMelumatlari2.at(change).title;
  up.textContent=kartMelumatlari2.at(change).description;
  img2.src=kartMelumatlari2.at(change).image;
}

function PrevIconFunciton(){
  change--;
  if(change<0){
    change=kartMelumatlari2.length-1
    gosder(change)
    
  }
  else{
    change--;
    gosder(change)  
  }
}


function nexticonFunction(){
  change++;
  if(change==kartMelumatlari2.length){
    change=0;
    gosder(change)
  }
  else{
    gosder(change)
  }
}

setInterval(nexticonFunction, 3000)

PrevIcon.addEventListener("click",PrevIconFunciton);
nexticon.addEventListener("click",nexticonFunction);
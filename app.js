const mebleg = document.getElementById("mebleg");
const faiz = document.getElementById("faiz");
const ayliq = document.getElementById("ayliq");
const umumiMebleg = document.getElementById("umumiMebleg");
const order = document.getElementById("order");
const isdediyinmebleg = document.getElementById("isdediyinmebleg");
const LAbelFaiz=document.getElementById("LabelFaiz");
const LabelAy=document.getElementById("LabelAy");
const muddet=document.getElementById("muddet"); 



let bankinfaizi = 0;
let bankaodeyeceyim = 0;
let ayliqodenis = 0;


function kredit() {
  isdediyinmebleg.innerText=mebleg.value;
  LAbelFaiz.innerText=faiz.value;
  LabelAy.innerText=ayliq.value
  bankinfaizi = (Number(mebleg.value) * Number(faiz.value)) / 100;
  bankaodeyeceyim = Number(mebleg.value) + Number(bankinfaizi);
  ayliqodenis = Number(bankaodeyeceyim) / Number(ayliq.value);
  console.log(bankinfaizi.toFixed(2));
  console.log(bankaodeyeceyim.toFixed(2));
  console.log(ayliqodenis.toFixed(2));

  umumiMebleg.textContent=ayliqodenis;
}






document.getElementById("mebleg").addEventListener("input", kredit);
document.getElementById("umumiMebleg").addEventListener("umumiMebleg.textContent",kredit);
document.getElementById("ayliq").addEventListener("input",kredit);
document.getElementById("faiz").addEventListener("input",kredit);
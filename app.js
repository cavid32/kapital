const meblegInputu = document.getElementById('mebleg');
const faizInputu = document.getElementById('faiz');
const ayInputu = document.getElementById('ay');
const ayliqOdenisXanasi = document.getElementById('ayliqOdenis');


let goturmekIstediyim = 0;
let yekunFaizDaxilMebleg = 0;
let yekunNetice = 0;

meblegInputu.addEventListener('input', function () {
    yekunFaizDaxilMebleg = Number(meblegInputu.value) + ((Number(meblegInputu.value) * Number(faizInputu.value)) / 100);
    yekunNetice = yekunFaizDaxilMebleg / ayInputu.value;
    ayliqOdenisXanasi.textContent = yekunNetice.toFixed(2)
})

// salam

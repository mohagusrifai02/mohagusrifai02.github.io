let result='';
function ubahAtribut(value){
    result = value;
    const img = document.querySelector('img');
    img.setAttribute('src',value);
}

let hasil = '';
const template = document.getElementById('template');
function navKonten(value){
    hasil = value;
    template.innerHTML= hasil.innerHTML;
}

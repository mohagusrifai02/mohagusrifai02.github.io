let hasil = '';
const template = document.getElementById('template');
function navKonten(value){
    hasil = value;
    template.innerHTML= hasil.innerHTML;
}

function navbar(){
    const navigasi = document.querySelector('.navigasi');
    navigasi.classList.toggle('active');
}

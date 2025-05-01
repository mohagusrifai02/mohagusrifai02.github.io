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

 
// slider

let nilaiSekarang = 0;
function updateSlider(){
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(${-nilaiSekarang * 100}%)`;
}
function prevSlide(){
    if(nilaiSekarang > 0){
        nilaiSekarang --;
        updateSlider();
    }
}
function nextSlide(){
    const slider = document.getElementById('slider');
    if(nilaiSekarang < slider.children.length -1){
        nilaiSekarang ++;
        updateSlider();
    }
}

// slider home
let currentHone = 0;
function updateHome(){
    const slideHome = document.getElementById('slideHome');
    slideHome.style.transform= `translateX(${-currentHone * 100}%)`;
}
function prevHome(){
    if(currentHone > 0){
        currentHone --;
        updateHome();
    }
}
function nextHome(){
    const slideHome = document.getElementById('slideHome');
    if(currentHone < slideHome.children.length -1){
        currentHone ++;
        updateHome();
    }
}
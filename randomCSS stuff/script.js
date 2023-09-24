'use-strict';

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/11");

const btnThreeD = document.querySelector('.btn-3d-1');
btnThreeD.addEventListener('click',function(){
    audio.play();
});
const btnThreeD2 = document.querySelector('.btn-3d-2');
btnThreeD2.addEventListener('click',function(){
    audio.play();
});
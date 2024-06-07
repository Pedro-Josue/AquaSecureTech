let imagens=['src/img/img-sessao1.webp','src/img/img2-s1.jpg','src/img/img3-s1.jpg'];
let index =0;
let time=5000;
function slideShow(){
    document.getElementById('img1').src=imagens[index];
    index++;
    if(index == imagens.length){
        index=0;
    }
    setTimeout('slideShow()',time);
}
slideShow();
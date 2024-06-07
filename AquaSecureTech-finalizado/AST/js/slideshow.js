let imagens=['img/img-sessao1.webp','img/img2-s1.jpg','img/img3-s1.jpg'];
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
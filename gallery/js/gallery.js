const IMAGES = document.getElementsByClassName('preview');
const DIV_BG_IMAGE = document.getElementById('image');

for (let i = 0; i < IMAGES.length; i++) {
    IMAGES[i].setAttribute("tabindex","0");
}

function upDate(previewPic){

    for (let i = 0; i < IMAGES.length; i++) {
        if(IMAGES[i].src === previewPic.src){
            DIV_BG_IMAGE.style.backgroundImage= "url("+IMAGES[i].src+")";
            DIV_BG_IMAGE.innerHTML = previewPic.alt;
            break;
        }
    } 

}


window.addEventListener("load", ()=>{
    for (let i = 0; i < IMAGES.length ; i++) {
        var randNbr = Math.floor(Math.random() * IMAGES.length); 
        IMAGES[i].src = IMAGES[randNbr].src;
        IMAGES[i].alt = IMAGES[randNbr].alt;
    }
});

function unDo(){
    DIV_BG_IMAGE.style.backgroundImage= "url('')";
    DIV_BG_IMAGE.innerHTML = "Hover over an image below to display here.";
}

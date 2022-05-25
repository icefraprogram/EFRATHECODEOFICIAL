/* =============== typing animacion =========== */
var typed = new Typed(".typing", {
    strings: ["","Web Designer","Web Developer ","Graphic Designer","Comunity manager"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
let id=check.checked;
if (id==true) {
    location.href="enindex.html"
}
else{
    location.href="index.html"
}

}
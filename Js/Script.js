window.addEventListener("scroll", function(){
    var header = document.querySelector(".menu-container");
    header.classList.toggle("abajo", window.scrollY>0);
})
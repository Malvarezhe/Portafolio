//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0); //atribuye la clase sticky a header al hacer scroll
});
/*Si dichiare la costante associata alla classe ".fa-bars" che apre il menu*/
const menuOn = document.querySelector(".fa-bars");

menuOn.addEventListener("click", function() {
    let visible = document.querySelector(".hamburger-menu");
    visible.style.display = "block";
});


/*Si dichiare la costante associata alla classe ".fa-times" che chiude il menu*/
const menuOff = document.querySelector(".fa-times");

menuOff.addEventListener("click", function(){
    let notVisible = document.querySelector(".hamburger-menu");
    notVisible.style.display = "none";
});


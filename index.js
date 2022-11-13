const menuToggle = Array.from(document.getElementsByClassName("menu-toggle"))

console.log(menuToggle)


menuToggle.forEach(e => e.addEventListener("click", function(){
    let navbar = document.getElementsByClassName('navbar')[0]
    navbar.classList.toggle("show")}))



    /*
menuToggle.addEventListener("click", function(){
    console.log("I am clicked")
    navbar.classList.toggle("show")
})

*/
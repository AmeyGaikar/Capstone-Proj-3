
const changeInDisplay = () => {
    const disWidth = window.innerWidth;
    const navItems = document.querySelectorAll(".nav-items");


    if (disWidth < 850) {
        navItems.forEach(item => {
            item.classList.add("hide-nav-items");
        });

        document.querySelector(".hamburger-menu").classList.remove("hamburger-menu-function");
    } else {
        navItems.forEach((item) => {
            item.classList.remove("hide-nav-items");
        });
        document.querySelector(".hamburger-menu").classList.add("hamburger-menu-function");
    }
    document.body.classList.remove("expanded");
}

changeInDisplay();

document.querySelector(".hamburger-menu").addEventListener("click", function () {

    //declaring variables for navbar and body.
    const navbar = document.querySelector(".navbar");
    const body = document.body;

    //unhiding the hidden nav-elements.
    const navbarItems = document.querySelectorAll(".nav-items");
    navbarItems.forEach((item) => {
        item.classList.toggle("hide-nav-items");
    });

    // adding the logic for the navbar expanding and shrinking when clicked.
    //1. collapsing and uncollapsing the navbar whenever clicked.

    if (body.classList.contains("expanded")) {
        
        //add slide up animation!
        navbar.classList.add("slide-up")

       //setting timeout function for when the navbar is clicked for uncollapsing
        setTimeout(() => {

            //removing expanded class
            body.classList.remove("expanded");

            //removing slide-down class if any.
            navbar.classList.remove("slide-down");

            //removing slide-up class after sometime so that we can see elements which were hidden by slideup animation
            navbar.classList.remove("slide-up");
            
            navbarItems.forEach((item) => {
                item.classList.add("slide-up");
            })
        }, 500);



    } else {
        //expanding the navbar
        body.classList.add("expanded");

        //removing slide up for nav items and navbar if any!
        navbarItems.forEach((item) => {
            item.classList.remove("slide-up");
        })
        navbar.classList.remove("slide-up");

        //adding slide down animation
        navbar.classList.add("slide-down");
    }



});


window.addEventListener("resize", changeInDisplay);

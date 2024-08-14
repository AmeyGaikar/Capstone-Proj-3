// const tags = document.body.querySelectorAll(".seperator");

const techPages = document.body.querySelectorAll(".tech-page");
const etfPages = document.body.querySelectorAll(".etf-page");
const foodPages = document.body.querySelectorAll(".food-page");
const autosPages = document.body.querySelectorAll(".autos-page");
const gridItems = document.body.querySelectorAll(".item");




function techSorting() {
    gridItems.forEach((griditem) => {

        griditem.style.opacity = 0;
    
        setTimeout(() => {
            griditem.style.transition = "opacity 1s"
            griditem.style.opacity = 1;
        }, 200);
    })

    gridItems.forEach((griditem) => {

        
            griditem.style.opacity = 0;
        
            setTimeout(() => {
                griditem.style.transition = "opacity 1"
                griditem.style.opacity = 1;
            }, 200);
        

        if (griditem.classList.contains("hiding-grid-items")) {
             griditem.classList.remove("hiding-grid-items"); 
            }
    })

    etfPages.forEach((etfPage) => {
        etfPage.classList.add("hiding-grid-items");
    })

    foodPages.forEach((foodPage) => {
        foodPage.classList.add("hiding-grid-items");
    })

    autosPages.forEach((autoPage) => {
        autoPage.classList.add("hiding-grid-items");
    })

}

function etfSorting() {
    gridItems.forEach((griditem) => {

        griditem.style.opacity = 0;
    
        setTimeout(() => {
            griditem.style.transition = "opacity 1s"
            griditem.style.opacity = 1;
        }, 200);
    })


    gridItems.forEach((griditem) => {
        if (griditem.classList.contains("hiding-grid-items")) {
             griditem.classList.remove("hiding-grid-items"); 
            }

    })
    

    techPages.forEach((techPage) => {
        techPage.classList.add("hiding-grid-items")
    })

    foodPages.forEach((foodPage) => {
        foodPage.classList.add("hiding-grid-items");
    })

    autosPages.forEach((autoPage) => {
        autoPage.classList.add("hiding-grid-items");
    })
}

function foodSorting() {
    gridItems.forEach((griditem) => {

        griditem.style.opacity = 0;
    
        setTimeout(() => {
            griditem.style.transition = "opacity 1s"
            griditem.style.opacity = 1;
        }, 200);
    })

    gridItems.forEach((griditem) => {
        if (griditem.classList.contains("hiding-grid-items")) {
             griditem.classList.remove("hiding-grid-items"); 
            }

    })
    
    techPages.forEach((techPage) => {
        techPage.classList.add("hiding-grid-items")
    })

    etfPages.forEach((etfPage) => {
        etfPage.classList.add("hiding-grid-items");
    })

    autosPages.forEach((autoPage) => {
        autoPage.classList.add("hiding-grid-items");
    })
}

function autosSorting() {
    gridItems.forEach((griditem) => {

        griditem.style.opacity = 0;
    
        setTimeout(() => {
            griditem.style.transition = "opacity 1s"
            griditem.style.opacity = 1;
        }, 200);
    })

    gridItems.forEach((griditem) => {
        if (griditem.classList.contains("hiding-grid-items")) {
             griditem.classList.remove("hiding-grid-items"); 
            }

    })

    techPages.forEach((techPage) => {
        techPage.classList.add("hiding-grid-items")
    })

    etfPages.forEach((etfPage) => {
        etfPage.classList.add("hiding-grid-items");
    })

    foodPages.forEach((foodPage) => {
        foodPage.classList.add("hiding-grid-items");
    })
}

function allSorting() {
    gridItems.forEach((griditem) => {

        griditem.style.opacity = 0;
    
        setTimeout(() => {
            griditem.style.transition = "opacity 1s"
            griditem.style.opacity = 1;
        }, 200);
    })

    gridItems.forEach((griditem) => {
        if (griditem.classList.contains("hiding-grid-items")) {
             griditem.classList.remove("hiding-grid-items"); 
            }
    })
}

document.body.querySelector(".TECH").addEventListener("click", () => {
techSorting();
});

document.body.querySelector(".ETF").addEventListener("click", () => { etfSorting(); });

document.body.querySelector(".FOOD").addEventListener("click", () => { foodSorting(); });

document.body.querySelector(".AUTOS").addEventListener("click", () => { autosSorting(); });

document.body.querySelector(".ALL").addEventListener("click", () => { allSorting(); });
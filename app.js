
// NOTIFICATION

const button = document.querySelector(".btn1")

button.addEventListener("click", () => {
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            new Notification("Whatup!", {
                icon: "favicon.png",
                body: "Ready to explore?"

            })

        }

    }
    )
})


//CHAT POPUP

const pic = document.querySelector(".pic-container1")
const chat = document.querySelector(".chat")

pic.addEventListener("mouseenter", () => {
    chat.classList.toggle("active")

})
pic.addEventListener("mouseleave", () => {
    chat.classList.remove("active")

})

// FLIGHT PATH 
const flightpath = {
    curviness: 1.23,
    autorotate: true,
    values: [
        { x: 100, y: -20 },
        { x: 300, y: 10 },
        { x: 500, y: 100 },
        { x: 750, y: -100 },
        { x: 350, y: -50 },
        { x: 600, y: -100 },
        { x: -800, y: 0 },
        { x: window.innerWidth, y: -250 }

    ]


}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.plane', 1, {
        bezier: flightpath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElemnet: '.animate',
    duration: 3000,
    triggerHook: 1

})


    .setTween(tween)
    .addIndicators()
    .addTo(controller);



console.log(window.innerWidth);








//  TEXT ANIMATION

const container = document.querySelector(".help")
const texts1 = document.querySelector(".header9")
const texts2 = document.querySelector(".header10")

container.addEventListener("mouseenter", () => {
    texts2.classList.toggle("active")
    texts1.classList.toggle("active")
})
container.addEventListener("mouseleave", () => {
    texts2.classList.remove("active")
    texts1.classList.remove("active")
})


// BOX ANIMATION

const boxes = document.querySelectorAll(".box")

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    //    console.log(triggerBottom);

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        }

        else {
            box.classList.remove('show');
        }

    })
})



// DROP DOWN MENU ANIMATION


// -------------BOX1 (PRODUCT)------------------------

const navLink1 = document.querySelector(".nav-link1")
const navLink2 = document.querySelector(".nav-link2")
const navLink3 = document.querySelector(".nav-link3")
const navLink4 = document.querySelector(".nav-link4")
const navLink5 = document.querySelector(".nav-link5")


const Actuator = document.querySelector(".drop-down-menu")






const menuBox = document.querySelector(".drop-down-menu")
const Arrow = document.querySelector(".arrow")
const pictureContainer = document.querySelector(".pic-container1")
const prod = document.querySelectorAll(".prod")
const container1 = document.querySelector(".cont1")

// THIS CODE DISPLAYS THE FIRST DROP DOWN MENU "PRODUCT"
const A1 = navLink1.addEventListener("click", () => {
    menuBox.classList.toggle("active")
    Arrow.classList.toggle("active")
    pictureContainer.classList.toggle("active")

    console.log(A1); //it gives an undefined value

})


// LOOPING THROUGH THE CONTENT OF THE DROP DOWN MENU TO PERFORM CLOSE OPERATION WHEN AN ITEM IS SELECTED FROM ITS OPTIONS
prod.forEach(n => n.
    addEventListener("click", () => {
        menuBox.classList.remove("active")
        Arrow.classList.remove("active")
        pictureContainer.classList.remove("active")
    })
    
)

//THIS CODE CLOSES THE DROP DOWN MENU WHEN YOU CLICK ON THE OUTSIDE SURROUNDING DIVS
container1. addEventListener("click", () => {
    menuBox.classList.remove("active")
    Arrow.classList.remove("active")
    pictureContainer.classList.remove("active")
})

//Selecting on the second item in the navbar closes the *immediate opened* drop down box
function Dothis() {
    if (A1 === undefined ) {

        // A1 === undefined && B1 ===UNDEFINED

       
        menuBox.classList.remove("active")
        Arrow.classList.remove("active")
        pictureContainer.classList.remove("active")
       
    }
    
}





















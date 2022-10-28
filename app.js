const button = document.querySelector(".btn1")

button.addEventListener("click", () =>{
    Notification.requestPermission().then( (permission) => {
        if (permission === "granted") {
            new Notification("Whatup!", {
                icon: "favicon.png", 
                body: "Ready to explore?"

            })

        } 

    }
    )
} )
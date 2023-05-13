const circles = document.querySelectorAll(".circle"),
    indicator = document.querySelector(".indicator"),
    buttons = document.querySelectorAll("button");

let currentSteps = 1;

const updateSteps = (e) =>{

    
    currentSteps = (e.target.id === "next") ? ++currentSteps : --currentSteps;
    
    circles.forEach((circle, index) => {
        circle.classList[`${index < currentSteps ? "add" : "remove" }`]("active")
    });

    indicator.style.width = `${((currentSteps-1)/(circles.length -1 ))*100}%`;

    if(currentSteps === circles.length){
        buttons[1].disabled = true;
    }else if(currentSteps == 1){
        buttons[0].disabled = true;
    }else{
        buttons.forEach(button => button.disabled = false)
    }
}

buttons.forEach((button)=>{
    button.addEventListener('click', updateSteps)
})



//<------------------------------------JS when button is pressed with a mouse click------------------------------------------------------>

for(var i=0; i<document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var character = this.innerHTML;
        makeSound(character); 
        buttonAnimation(character);
    });

}

//<------------------------------------JS when keyboard key is pressed with hand------------------------------------------------------> 

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

//<------------------------------------function which makes sounds for the action taken by user---------------------------------------->

function makeSound(key){
    switch(key){
        case 'w' : 
            var audio1 = new Audio('./sounds/crash.mp3');
            audio1.play();
            break;
        case 'a' : 
            var audio2 = new Audio('./sounds/kick-bass.mp3');
            audio2.play();
            break;
        case 's' : 
            var audio3 = new Audio('./sounds/snare.mp3');
            audio3.play();
            break;
        case 'd' : 
            var audio4 = new Audio('./sounds/tom-1.mp3');
            audio4.play();
            break;
        case 'j' : 
            var audio5 = new Audio('./sounds/tom-2.mp3');
            audio5.play();
            break;
        case 'k' : 
            var audio6 = new Audio('./sounds/tom-3.mp3');
            audio6.play();
            break;
        case 'l' : 
            var audio7 = new Audio('./sounds/tom-4.mp3');
            audio7.play();
            break;
        
    }
}

//<------------------------------------function which gives animation to the button---------------------------------------->

function buttonAnimation(pressedKey){

    var activeButton = document.querySelector("." + pressedKey);
    
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}
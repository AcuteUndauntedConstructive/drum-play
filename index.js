// eke eke button pe jake class check kar ke click hono par button jo mouse se click ho ga eventlistenr use ka html jo ki letter hai use send kar dega sound produce kar ne wale function
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
       var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
         buttonAnimation(buttonInnerHTML);
    });
}



// key ko sun ke kam karega

document.addEventListener("keydown",function (event){
    console.log(event.key);
    makeSound(event.key);
     buttonAnimation(event.key);
});


// same function for both to take a value check what to do

function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
                break;
                case "s":
                    var audio = new Audio('./sounds/tom-3.mp3');
                    audio.play();
                    break;
                    case "d":
                        var audio = new Audio('./sounds/tom-4.mp3');
                        audio.play();
                        break;
                        case "j":
                            var audio = new Audio('./sounds/snare.mp3');
                            audio.play();
                            break;
                            case "k":
                                var audio = new Audio('./sounds/crash.mp3');
                                audio.play();
                                break;
                             case "l":
                              var audio = new Audio('./sounds/kick-bass.mp3');
                                 audio.play();
                                 break;        


        default:console.log(buttoninnerHTML);
          
    }

}

// to give buttons a timer
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}





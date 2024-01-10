const input = document.querySelector(".inputForm_field");
const output = document.getElementById("output");

input.addEventListener("keydown", function (event) {

    if (event.key == "Enter") {
        console.log("test")
        if (input.value >= "16") {
            output.innerHTML = "you may play the game"
        } else if (input.value <= "16") {
            output.innerHTML = "you are to young to play the game!"
        }     if (output.innerHtml = "you may play the game!")    

        function isAdult(age) {
            return age
        }
        
        let result = isAdult(20);
        console.log(result);
        
        
        if (input.value == "run") {
            output2.innerHTML = stories[8]
        } else if (input.value == "yes") {
            output2.innerHTML = stories[9]
        } else if (input.value == "no") {
            output2.innerHTML = stories[10]
        }
        
        if (input.value == "play dead") {
            output.innerHTML = stories[11]
        } else if (input.value == "yes") {
            output.innerHTML = stories[12]
        } else if (input.value == "no") {
            output.innerHTML = stories[13]
        }
              
    }
  
    


})

const stories = [
    "it is a dark winter night",
    "you left work and made your way home. you have to walk through a dark alley. As you were running down the street you heard loud yelling. You instantly decide to hide behind a big trashcan.",
    "as you try to be as quit as possible, you see a shadow of a long man killing another person",
    "you have just witnessed a murder",
    "the murderer is slowly walking toward your hiding spot",
    "will you play dead or run for your life?",
    "are you faster than the murderer?",
    "you have survived the encounter with the murderer",
    "you have been murderd in a dark alley",
    "are you sure?",
    "you have survived the encounter with the murderder",
    "you have decided to stay in your hiding spot. the murderer saw your winter coat and you have been murderd",
]








output.innerHTML = output.innerHTML
        input.value = ""
      


        
       









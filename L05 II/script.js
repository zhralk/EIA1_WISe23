
const stories = [
    "how old are you?",
    "it is a dark winter night",
    "you left work and made your way home. you have to walk through a dark alley. As you were running down the street you heard loud yelling. You instantly decide to hide behind a big trashcan.",
    "as you try to be as quit as possible, you see a shadow of a long man killing another person",
    "you have just witnessed a murder",
    "the murderer is slowly walking toward your hiding spot",
    "will you play dead or run for your life?",
]


function isAdult() {     
    
    let age = prompt(stories[0])
    
    if (age >= 16) {
       alert("you may play the game");
    } else if(age <= 16){
       alert("you are to young to play the game!");
    }

    return age
}

 let result = isAdult(20);
 console.log(result);


alert(stories[1])
alert(stories[2])
alert(stories[3])
alert(stories[4])
alert(stories[5])
alert(stories[6])

let decision = prompt (stories[7])


if(decision == "run"){

    let run = prompt("are you faster than the murderer?");

    if(run == "yes"){
        alert("you have survived the encounter with the murderer");
    }
    
    else if(run == "no"){
        alert("you have been murderd in a dark alley");
    }
} 


if(decision == "play dead"){

    let playDead = prompt("are you sure?");
    

    if (playDead == "yes"){
        alert("you have survived the encounter with the murderder");
    }
    else if(playDead == "no"){ 
        alert("you have decided to stay in your hiding spot. the murderer saw your winter coat and you have been murderd");
    }
}



"are you faster than the murderer?"
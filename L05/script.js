prompt("it is a dark winter night");

prompt("you left work and made your way home. you have to walk through a dark alley. As you were running down the street you heard loud yelling. You instantly decide to hide behind a big trashcan.");

prompt("as you try to be as quit as possible, you see a shadow of a long man killing another person");

prompt("you have just witnessed a murder");

prompt("the murderer is slowly walking toward your hiding spot");

let decision = prompt("will you play dead or run for your life");

if(decision == "run") {

    let run = prompt("are you faster than the murderer?")
    if(run == "yes") {prompt("you have survived the encounter with the murderer")}
    if(run == "no") {prompt("you have been murderd in a dark alley")}

} else if(decision == "play dead"){
    let playDead = prompt("are you sure you want to play dead?")
    if(playDead == "yes") {prompt("you have survived the encounter with the murderder")}
    if(playDead == "no") {prompt("you have decided to stay in your hiding spot. the murderer saw your winter coat and you have been murderd")}

}

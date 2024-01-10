let gameStage = 0; // Variable zur Steuerung des Spielverlaufs

const input = document.querySelector(".inputForm_field");
const output = document.getElementById("output");    //patrk



function startGame() {
    gameStage = 1; // Start des Spiels
    showOutput("Du befindest dich in einem daunklen Raum. Vor dir sind zwei Buttons, das eine leuchtet Blau das andere Rot entscheide dich für eine Farbe")
}
  
input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        console.log("test")
        if (input.value = "Rot") {
            output.innerHTML = "du bist "
        } else if (input.value = "Blau") {
            output.innerHTML = "du bist zurück in deiner realität"
        }               
    }    
})





function showOutput(text) {
  const output = document.getElementById("output");
  output.innerHTML += "<p>" + text + "</p>";
}

function getInput() {
  const input = document.getElementById("input").value.toLowerCase();
  return input;
}

function gameLogic() {
  if (gameStage === 1) {
    const userInput = getInput();

    if (userInput.includes("licht")) {
      showOutput("Du hast das Licht eingeschaltet und siehst zwei Türen vor dir. Entscheidest du dich für die Rechts oder Linke Tür");
      gameStage = 2;
    } else {
      showOutput("Ich verstehe nicht. Versuche es erneut.");
    }
  } else if (gameStage === 2) {
    const userInput = getInput();

    if (userInput.includes("rechst")) {
      showOutput("Glückwunsch! Du hast es geschafft, du bist aus dem zimmer entkommen.");
      gameStage = 0; // Spiel beenden
    } else if (userInput.includes("links")) {
      showOutput("Schade! Das Spiel ist zu Ende.");
      gameStage = 0; // Spiel beenden
    } else {
      showOutput("Ich verstehe nicht. Versuche es erneut.");
    }
  }
}


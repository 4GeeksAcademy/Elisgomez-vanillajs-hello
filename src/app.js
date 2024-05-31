/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["shakira", "juanes", "j balvin", "karol G"];
  let action = ["cantar", "pintar", "bailar", "dormir"];
  let when = [" esta hoy", " va mañana", " viene pasadomañana", "nunca esta"];
  let what = [" con guitarra", "el piano", "tu violin", "en acapela"];

  const generateExcuse = () => {
    let numeroAleatorioDecimal = Math.random();
    let indiceWho = Math.floor(numeroAleatorioDecimal * who.length);
    let indiceAction = Math.floor(numeroAleatorioDecimal * action.length);
    let indiceWhen = Math.floor(numeroAleatorioDecimal * when.length);
    let indiceWhat = Math.floor(numeroAleatorioDecimal * what.length);

    let wordwho = who[indiceWho];
    let wordaction = action[indiceAction];
    let wordwhen = when[indiceWhen];
    let wordwhat = what[indiceWhat];

    let excuse = wordwho + " " + wordaction + " " + wordwhen + " " + wordwhat;

    return excuse;
  };

  console.log(generateExcuse());

  document.querySelector("#excuse").innerHTML = generateExcuse();
};

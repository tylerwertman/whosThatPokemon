
async function newPoke() {
    var rng = Math.floor(Math.random() * 152);
    console.log("running newPoke");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+rng);
    var pokeData = await response.json();
    var pokeImg = document.querySelector(".js img");
    var pokeText = document.querySelector(".js p");
    pokeText.innerText = "Who's that Pokemon?"
    pokeImg.classList.add("sillhouette")
    pokeText.style.textTransform = "";
    console.log(pokeData);
    pokeImg.src = pokeData.sprites.front_default
    currentPoke = rng;
    return currentPoke;
}
var currentPoke = newPoke();

async function revealPoke() {
    console.log("running revealPoke");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+currentPoke);
    var pokeData = await response.json();
    var pokeImg = document.querySelector(".js img");
    var pokeText = document.querySelector(".js p");
    pokeText.innerText = `It's ${pokeData.name}!`;
    console.log(pokeImg.classList);
    pokeImg.classList.remove("sillhouette")
    pokeText.style.textTransform = "Capitalize";

}
async function shinyPoke() {
    console.log("running shinyPoke");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+currentPoke);
    var pokeData = await response.json();
    var pokeImg = document.querySelector(".js img");
    if (pokeImg.classList.length == 0 && pokeImg.src == pokeData.sprites.front_default) {
        pokeImg.src = pokeData.sprites.front_shiny;
    }
    else if (pokeImg.classList.length == 0 && pokeImg.src == pokeData.sprites.back_default) {
        pokeImg.src = pokeData.sprites.back_shiny;
    }
}
async function defaultPoke() {
    console.log("running defaultPoke");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+currentPoke);
    var pokeData = await response.json();
    var pokeImg = document.querySelector(".js img");
    if (pokeImg.classList.length == 0 && pokeImg.src == pokeData.sprites.front_shiny) {
        pokeImg.src = pokeData.sprites.front_default;
    }
    else if (pokeImg.classList.length == 0 && pokeImg.src == pokeData.sprites.back_shiny) {
        pokeImg.src = pokeData.sprites.back_default;
    }
}

async function frontPoke() {
    console.log("running frontPoke");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+currentPoke);
    var pokeData = await response.json();
    var pokeImg = document.querySelector(".js img");
    if (pokeImg.classList.length == 0 && pokeImg.src == pokeData.sprites.back_default) {
        pokeImg.src = pokeData.sprites.front_default;
    }
    else if (pokeImg.classList.length == 0 && pokeImg.src == pokeData.sprites.back_shiny){
        pokeImg.src = pokeData.sprites.front_shiny
    }
}
async function backPoke() {
    console.log("running backPoke");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+currentPoke);
    var pokeData = await response.json();
    var pokeImg = document.querySelector(".js img");
    if (pokeImg.classList.length == 0 && pokeImg.src == pokeData.sprites.front_default) {
        pokeImg.src = pokeData.sprites.back_default;
    }
    else if (pokeImg.classList.length == 0 && pokeImg.src == pokeData.sprites.front_shiny){
        pokeImg.src = pokeData.sprites.back_shiny
    }
}
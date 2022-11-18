async function pokeNew() {
    console.log("pokeNew is running");
    var pokeNewID = Math.floor(Math.random()*152);
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokeNewID);
    var pokeData = await response.json(); 
    pokeScreenImg = document.querySelector("img");
    pokeScreenText = document.querySelector("p");
    sprites = pokeData.sprites 
    var pokeImg = sprites.front_default;
    // var pokeName = pokeData.name;
    // console.log(pokeNewID);
    pokeScreenImg.src = pokeImg;
    pokeScreenImg.classList = "darken";
    pokeScreenText.innerText = "Who's that Pokemon?";
    pokeScreenText.style.textTransform = "";
    pokeCurrentID = pokeNewID;
}

async function pokeReveal() {
    console.log("pokeReveal is running");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokeCurrentID);
    var pokeData = await response.json(); 
    // console.log(pokeData);
    var pokeImg = sprites.front_default;
    var pokeName = pokeData.name;
    if (pokeScreenImg.src == pokeImg) {
        pokeScreenImg.src = pokeImg
    }else {sprites.front_shiny};
    // pokeScreenImg.src = pokeImg;
    pokeScreenImg.classList = "";
    pokeScreenText.innerText = `It's ${pokeName}!`
    pokeScreenText.style.textTransform = "Capitalize";
}

async function pokeShiny() {
    console.log("pokeShiny is running");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokeCurrentID);
    var pokeData = await response.json();
    if (pokeScreenImg.classList == "" && pokeScreenImg.src == sprites.front_default) {
        pokeScreenImg.src = sprites.front_shiny
    }else if (pokeScreenImg.classList == "" && pokeScreenImg.src == sprites.back_default) {
        pokeScreenImg.src = sprites.back_shiny
    }
}

async function pokeDefault() {
    console.log("pokeDefault is running");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokeCurrentID);
    var pokeData = await response.json(); 
    if (pokeScreenImg.src == sprites.front_shiny) {
        pokeScreenImg.src = sprites.front_default
    }else if (pokeScreenImg.src == sprites.back_shiny) {
        pokeScreenImg.src = sprites.back_default
    }
}


async function pokeFront() {
    console.log("pokeFront is running");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokeCurrentID);
    var pokeData = await response.json(); 
    if (pokeScreenImg.src == sprites.back_shiny) {
        pokeScreenImg.src = sprites.front_shiny
    }else if (pokeScreenImg.src == sprites.back_default) {
        pokeScreenImg.src = sprites.front_default
    }
}
async function pokeBack() {
    console.log("pokeBack is running");
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokeCurrentID);
    var pokeData = await response.json(); 
    if (pokeScreenImg.classList == "" && pokeScreenImg.src == sprites.front_shiny) {
        pokeScreenImg.src = sprites.back_shiny
    }else if (pokeScreenImg.classList == "" && pokeScreenImg.src == sprites.front_default) {
        pokeScreenImg.src = sprites.back_default
    }
}


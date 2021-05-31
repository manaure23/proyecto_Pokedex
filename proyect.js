let pokemonesPantala ="";
const pokemon = [
    {
    thumbnail: "https://raw.githubusercontent.com/mfrcodingproject/Homework/master/pokedex/media/001.png",
    id: 1,
    name: "Bulbasaur",
    type: ["planta", "veneno"]
    },

    {
    thumbnail: "https://raw.githubusercontent.com/mfrcodingproject/Homework/master/pokedex/media/002.png",
    id: 4,
    name: "Charmander",
    type: ["fuego"]
    },

    {
    thumbnail: "https://raw.githubusercontent.com/mfrcodingproject/Homework/master/pokedex/media/003.png",
    id: 10,
    name: "Caterpie",
    type: ["bicho"]
    },

    {
    thumbnail: "https://raw.githubusercontent.com/mfrcodingproject/Homework/master/pokedex/media/004.png",
    id: 14,
    name: "Kakuna",
    type: ["bicho", "veneno"]
    },

    {
    thumbnail: "https://raw.githubusercontent.com/mfrcodingproject/Homework/master/pokedex/media/005.png",
    id: 19,
    name: "Ratata",
    type: ["normal"]
    },

    {
    thumbnail: "https://raw.githubusercontent.com/mfrcodingproject/Homework/master/pokedex/media/006.png",
    id: 25,
    name: "Pikachu",
    type: ["electrico"]
    },

    {
    thumbnail: "https://raw.githubusercontent.com/mfrcodingproject/Homework/master/pokedex/media/007.png",
    id: 37,
    name:  "Vulpix",
    type: ["fuego"]
    },

    {
    thumbnail: "https://raw.githubusercontent.com/mfrcodingproject/Homework/master/pokedex/media/008.png",
    id: 39,
    name: "Jigglypuff",
    type: ["normal", "hada"]
    },

    {
    thumbnail: "https://raw.githubusercontent.com/mfrcodingproject/Homework/master/pokedex/media/009.png",
    id: 50,
    name: "Diglett",
    type: ["tierra"]
    },

    {
    thumbnail: "https://raw.githubusercontent.com/mfrcodingproject/Homework/master/pokedex/media/010.png",
    id: 52,
    name: "Meowth",
    type: ["normal"]
    },

    {
    thumbnail: "https://raw.githubusercontent.com/mfrcodingproject/Homework/master/pokedex/media/011.png",
    id: 73,
    name: "Tentacruel",
    type: ["agua", "veneno"]
    },

    {
    thumbnail: "https://raw.githubusercontent.com/mfrcodingproject/Homework/master/pokedex/media/012.png",
    id: 77,
    name: "Ponyta",
    type: ["fuego"]
    },

    {
    thumbnail: "https://raw.githubusercontent.com/mfrcodingproject/Homework/master/pokedex/media/013.png",
    id: 91,
    name: "Cloyster",
    type:["agua", "hielo"]
    },

    {
    thumbnail: "https://raw.githubusercontent.com/mfrcodingproject/Homework/master/pokedex/media/014.png", 
    id: 104,
    name: "Cubone",
    type: ["tierra"]
    },

    {
    thumbnail: "https://raw.githubusercontent.com/mfrcodingproject/Homework/master/pokedex/media/015.png",
    id: 133,
    name: "Evee",
    type: ["normal"]
    },

    {
    thumbnail: "https://raw.githubusercontent.com/mfrcodingproject/Homework/master/pokedex/media/016.png",
    id: 137,
    name: "Porygon",
    type: ["normal"]
    }
];

let i = 0;

for (i; i<pokemon.length; i++){
    pokemonesPantala += '<div class="pokemones-pokedex"><img src="' + pokemon[i]["thumbnail"] +'"/> </div>';
}

document.querySelector("#lista-pokemones").innerHTML = pokemonesPantala;
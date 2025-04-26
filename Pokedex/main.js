const pokemonList = document.getElementById("pokemonList");
const pokemonDetail = document.getElementById("pokemonDetail");
const pokemonInfo = document.getElementById("pokemonInfo");
const btnBack = document.getElementById("btnBack");
const searchInput = document.getElementById("searchInput");
const btnSearch = document.getElementById("btnSearch");
const btnPrevPage = document.getElementById("btnPrevPage");
const btnNextPage = document.getElementById("btnNextPage");
const pageNumber = document.getElementById("pageNumber");

let currentPage = 1;
const pokemonPerPage = 20;  // Número de Pokémon por página

/* FUNCION QUE LLAMA A LA API */
async function getPokemonData(pokemonID) {
    try {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
        let pokemon = await res.json();
        return pokemon;
    } catch (error) {
        console.error(error.message);
    }
}


function displayPokemon(pokemon) {
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");
    pokemonCard.innerHTML = `
        <img src="${pokemon.sprites.front_default}">
        <h3>${pokemon.name}</h3>
        <p>ID: ${pokemon.id}</p>
    `;
    pokemonCard.addEventListener("click", () => showPokemonDetail(pokemon));
    pokemonList.appendChild(pokemonCard);
}


function showPokemonDetail(pokemon) {
    pokemonList.style.display = "none";  // Oculta la lista de Pokémon
    pokemonDetail.style.display = "flex";  // Muestra los detalles

    
    let types = pokemon.types.map(t => t.type.name).join(", ");  

    pokemonInfo.innerHTML = `
        <div class="detail-container">
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}" alt="Front view of ${pokemon.name}">
            <img src="${pokemon.sprites.back_default}" alt="Back view of ${pokemon.name}">
            <p>ID: ${pokemon.id}</p>
            <p>Type: ${types}</p>  <!-- Agrega los tipos -->
        </div>
    `;
}


async function loadPokedex() {
    pokemonList.innerHTML = ''; // Limpiar la lista antes de cargar nuevos Pokémon
    const start = (currentPage - 1) * pokemonPerPage + 1;
    const end = currentPage * pokemonPerPage;

    for (let i = start; i <= end; i++) {
        let pokemon = await getPokemonData(i);
        displayPokemon(pokemon);
    }

    // Actualizar el número de la página
    pageNumber.innerText = `Página ${currentPage}`;
}


function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        loadPokedex();
    }
}


function nextPage() {
    currentPage++;
    loadPokedex();
}


async function searchPokemonByID() {
    const pokemonID = parseInt(searchInput.value);

    if (pokemonID && pokemonID > 0) {
        let pokemon = await getPokemonData(pokemonID);
        if (pokemon) {
            pokemonList.innerHTML = ''; // Limpiar la lista de Pokémon
            displayPokemon(pokemon);   // Mostrar el Pokémon buscado
        }
    } else {
        alert("Por favor, ingresa un ID válido.");
    }
}


btnBack.addEventListener("click", () => {
    pokemonList.style.display = "flex";
    pokemonDetail.style.display = "none";
});


btnSearch.addEventListener("click", searchPokemonByID);


btnPrevPage.addEventListener("click", prevPage);
btnNextPage.addEventListener("click", nextPage);

loadPokedex();

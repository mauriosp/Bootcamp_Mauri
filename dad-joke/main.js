let btnJokke = document.getElementById("btnJoke");
let joke = document.getElementById("joke");
let jokeList = document.getElementById("jokeList"); // Nueva lista de chistes

btnJokke.addEventListener("click", getJoke);

async function getJoke() {
    try {
        const res = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                "Accept": "application/json"
            }
        });
        const data = await res.json();
        
        // Mostrar el chiste actual
        joke.textContent = data.joke;

        // Guardar el chiste en la lista
        let newJokeItem = document.createElement("li");
        newJokeItem.textContent = data.joke;
        jokeList.appendChild(newJokeItem); // Agregar chiste a la lista

    } catch (error) {
        console.error("Error en la consulta");
        joke.textContent = "Hubo un error al obtener el chiste.";
    }
}

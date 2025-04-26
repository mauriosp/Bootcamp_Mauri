const baseUrl = 'http://127.0.0.1:3000/api/v1/';

async function getMovies() {
    try {
        const movies = await fetch(`${baseUrl}movies`);
        const result = await movies.json();

        console.log(result.data);
        showMovies(result.data);
    } catch (error) {
        console.error("Error al obtener las películas", error);
    }
}

getMovies();

function formatDateToSpanish(dateString) {
    const fecha = new Date(dateString);
    const opciones = { weekday: 'long',
         year: 'numeric', 
         month: 'long', 
         day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', opciones);
}

function showMovies(movies) {
    const container = document.getElementById("movies");
    container.innerHTML = "";

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");

        const fechaEstreno = formatDateToSpanish(movie.release_date);

        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>Estreno: ${fechaEstreno}</p>
            </div>
        `;

        container.appendChild(movieElement);
    });
}


movieElement.addEvenListener("click",() => {
    //Redirige a  detail.html pasando el ID de la película
    window.location.href = `detail.html?movieId${movie.id}`;
});

    container.appendChild(movieElement);
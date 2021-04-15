// Function that fetches movie information
document.querySelector("#searchMovies").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = new FormData(e.target);

    const response = await fetch(
        `https://www.omdbapi.com/?apikey=daf6b48b&s=${input.get("name")}`
    );

    // Error handling
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const movies = await response.json();

    for (const movie of movies.Search) {
        const article = document.createElement("article"),
            title = Object.assign(document.createElement("h2"), {
                textContent: movie.Title
            }),
            poster = Object.assign(document.createElement("img"), {
                src: movie.Poster
            }),
            year = Object.assign(document.createElement("p"), {
                textContent: movie.Year
            });

        article.append(title, poster, year);
        document.querySelector("#movies").append(article);
    }
});
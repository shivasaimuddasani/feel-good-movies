const movieForm = document.getElementById('movieForm');
const movieList = document.getElementById('movieList');
const suggestionText = document.getElementById('suggestion');
const suggestBtn = document.getElementById('suggestBtn');

let movies = [];

movieForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();

  if (title) {
    const movie = { title, description };
    movies.push(movie);
    displayMovies();
    movieForm.reset();
  }
});

function displayMovies() {
  movieList.innerHTML = '';
  movies.forEach((movie, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${movie.title}</strong>: ${movie.description}`;
    movieList.appendChild(li);
  });
}

suggestBtn.addEventListener('click', function() {
  if (movies.length === 0) {
    suggestionText.textContent = 'No movies to suggest yet!';
    return;
  }
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  suggestionText.innerHTML = `🎥 <strong>${randomMovie.title}</strong>: ${randomMovie.description}`;
});

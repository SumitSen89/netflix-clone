
const movies = [
  {
    name: "Movie One",
    image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
  },
  {
    name: "Movie Two",
    image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
  },
  {
    name: "Movie Three",
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
    name: "Movie Four",
    image: "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
  }
];

function MovieRow({ title }) {
  return (
    <section className="movie-row">
      <h2>{title}</h2>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.image} alt={movie.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieRow;

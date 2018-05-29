var MovieListEntry = (props) => {
  return (
    <div>
      <p>{props.movie.title}</p>
    </div>
  );
};

window.MovieListEntry = MovieListEntry;
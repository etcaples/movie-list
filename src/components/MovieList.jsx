var MovieList = (props) => {
  if (props.matches.length < 1) {
    return (
      <div>
      {
        props.movies.map((movie, index) => 
          <MovieListEntry key={index} movie={movie}/>
        )
      }
      </div>
    );
  } else if (props.matches.length > 0) {
    return (
      <div>
      {
        props.matches.map((match, index) => 
          <MovieListEntry key={index} movie={match}/>
        )
      }
      </div>
    );
  }







};

window.MovieList = MovieList;
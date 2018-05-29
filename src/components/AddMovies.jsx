var AddMovies = (props) => {
  return (
    <div>
      <form>
        <input type="text" onChange={props.handleAddChange} id="add" placeholder="Add a movie title..."></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

window.AddMovies = AddMovies;
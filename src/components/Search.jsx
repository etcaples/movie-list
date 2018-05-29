var Search = (props) => {
  return (
    <div>
      <form>
        <input type="search" onChange={props.handleSearchChange} id="search" placeholder="Enter a movie title, keyword, or keywords..."></input>
        <button type="submit" onClick={props.handleSearch}>Search</button>
      </form>
    </div>
  );
};

window.Search = Search;
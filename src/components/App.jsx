class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
      addVal: '',
      data: movieListData,
      userData: [],
      matches: []
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleAddChange = this.handleAddChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({searchVal: event.target.value});
  }

  handleAddChange(event) {
    this.setState({addVal: event.target.value});
    console.log(this.state.addVal);
  }

  handleSearch(event) {
    event.preventDefault();
    let value = this.state.searchVal.toLowerCase();
    let movies = this.state.data;
    let results = [];

    for (var i = 0; i < movies.length; i++) {
      if (movies[i].title.toLowerCase() === value) {
        results.push(movies[i]);
      }
    }

    if (results.length < 1) {
      for (var i = 0; i < movies.length; i++) {
        if (movies[i].title.toLowerCase().includes(value)) {
          results.push(movies[i]);
        }
      }
    }

    if (results.length === 0) {
      results.push({title: "no movies match that title or keyword"})
    }

    this.setState({matches: results});
  }

  render() {
    var movies = this.state.userData.length === 0 ? this.state.data : this.state.userData;

    return (
      <div>
        <div>
        <AddMovies handleAddChange={this.handleAddChange}/>
          <Search handleSearchChange={this.handleSearchChange} handleSearch={this.handleSearch}/>
        </div>
        <div>
          <MovieList matches={this.state.matches}movies={movies}/>
        </div>
      </div>
    )
  }
};

window.App = App;

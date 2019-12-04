import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import queryString from 'query-string';
import ArtistCard from './artistCard';

class Search extends React.Component {

  constructor(){
    super();
    this.state = {
      search : "",
      accessToken: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.hash)
    this.setState({accessToken: values.access_token})
  }

  handleChange(event) {
    this.setState({search : event.target.value});

    if(this.state.search.length >= 2){
      this.search();
    }
  }

  search() {
    this.props.searchArtist(this.state.accessToken, this.state.search)
  }

  render() {
    console.log(this.props)

    if(this.accessToken !== "") {


      if(this.props.artists.items) {
        const artistRender = this.props.artists.items.map((artist) => {
          return <ArtistCard key={artist.name} {...artist}/>
        })
        return (
          <div>
            <TextField id="outlined-basic"
              placeholder="Search for an artist"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
              value={this.state.search}
              onChange={this.handleChange}
              />
            {artistRender}
          </div>
        )
      }
        return (
          <div>
            <TextField id="outlined-basic"
              placeholder="Search for an artist"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
              value={this.state.search}
              onChange={this.handleChange}
              />
          </div>
        )
    } else {
      //send to login
    }
  }
}


export default Search;

import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import queryString from 'query-string';
import ArtistCard from './artistCard';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './style.css';
import { throttle } from "throttle-debounce";

class Search extends React.Component {

  constructor(){
    super();
    this.state = {
      search : ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.search = this.search.bind(this);
    this.searchThrottled = throttle(1000, this.search);
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.hash)
    this.props.addAuthToken(values.access_token)
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      if(this.state.search.length !== 0) {
        this.searchThrottled(this.state.search);
      } else {
        this.props.removeArtists()
      }
    }
  }

  handleChange(event) {
    this.setState({search : event.target.value}, () => {
      if(this.state.search.length !== 0){
        this.searchThrottled(this.state.search);
      } else {
        this.props.removeArtists()
      }
    });
  }

  search(val) {
    this.props.searchArtist(this.props.accessToken, val)
  }

  render() {
    if(this.props.accessToken !== "") {

      const searchBar = () => {
        return (
          <TextField
            placeholder="Search for an artist"
            variant="outlined"
            className="search-bar"
            InputProps={{
              className:"search-bar-input",
              startAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
            value={this.state.search}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            />
        )
      }

      const loadMore = (next) => {
        if(next) {
          return (
            <Button className="button-load-more sm-button" onClick={()=>{
                this.props.fetchMoreArtists(this.props.accessToken, this.props.search.next)
              }}>Load more</Button>
          )
        } else {
          return("")
        }
      };


      if(this.props.artists) {
        let artistRender = this.props.artists.map((artist, index) => {
          return (
            <Grid key={`${artist.name}_${index}`} item xl={2} lg={3} sm={4} xs={6}>
              <ArtistCard {...artist}/>
            </Grid>
          )
        })

        return (
          <Grid container className="search-container">
            {searchBar()}
            <Grid container spacing={4} >
                {artistRender}
            </Grid>
            {loadMore(this.props.search.next)}
          </Grid>
        )
      }
        return (
          <Grid container className="search-container">
            {searchBar()}
          </Grid>
        )
    } else {
      return(
        <div></div>
      )
    }
  }
}


export default Search;

import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

class Search extends React.Component {

  constructor(){
    super();
    this.state = {
      search : ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange(event) {
    this.setState({search : event.target.value});
    this.search();
  }

  search() {
    if(this.state.search.length > 3){
      this.props.searchArtist(this.state.search)
    }
  }

  render() {
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
  }
}


export default Search;

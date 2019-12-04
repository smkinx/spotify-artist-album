import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

class Search extends React.Component {

  render() {
    return (
      <div>

        <TextField id="outlined-basic"
          placeholder="Search"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          />
      </div>
    )
  }
}


export default Search;

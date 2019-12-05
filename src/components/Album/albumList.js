import React from 'react';
import AlbumCard from './albumCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class AlbumList extends React.Component {

  constructor() {
    super();
    this.state = {
      artistName: "",
      albums: []
    }
  }

  componentDidMount() {
    if(this.props.location.state.artistName){
      this.setState({
        artistName: this.props.location.state.artistName
      })
    }
    this.props.fetchAlbum(this.props.accessToken, this.props.match.params.artistId);
  }

  componentWillUnmount() {
    this.props.removeAlbums();
  }

  render() {
      if(this.props.albums) {
        let albumRender = this.props.albums.map((artist, index) => {
          return (
            <Grid key={`${artist.name}_${index}`} item xl={2} lg={3} sm={4} xs={6}>
              <AlbumCard {...artist}/>
            </Grid>
          )
        })

        const loadMore = (next) => {
          if(next) {
            return (
              <Button className="button-load-more sm-button" onClick={()=>{
                  this.props.fetchMoreAlbums(this.props.accessToken, this.props.albumRequest.next)
                }}>Load more</Button>
            )
          } else {
            return("")
          }
        };

        return (
          <Grid container className="artist-container">
            <Grid item className="artist-header">
              <Typography variant="h3" gutterBottom>
                {this.state.artistName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Albums
              </Typography>
            </Grid>
            <Grid container spacing={5}>{albumRender}</Grid>
            {loadMore(this.props.albumRequest.next)}
          </Grid>
        )
      } else {
        return (
          <div></div>
        )
      }
  }
}

export default AlbumList;

import React from 'react';
import AlbumCard from './albumCard';
import Grid from '@material-ui/core/Grid';

class AlbumList extends React.Component {

  componentDidMount() {
    this.props.fetchAlbum(this.props.accessToken, this.props.match.params.artistId);
  }

  render() {
    console.log(this.props)


      if(this.props.albums) {
        let albumRender = this.props.albums.map((artist, index) => {
          return (
            <Grid key={`${artist.name}_${index}`} item xl={2} lg={3} sm={6} xs={6}>
              <AlbumCard {...artist}/>
            </Grid>
          )
        })

      return (
        <Grid container spacing={4} className="artist-container">{albumRender}</Grid>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default AlbumList;

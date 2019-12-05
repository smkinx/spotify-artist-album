import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './style.css'

const AlbumCard = (props) => {
  let imageUrl = "https://via.placeholder.com/500";
  if(props.images[1]){
    imageUrl = props.images[1].url;
  }
  return (
      <Card className="album-card" elevation={0}>

        <div className="album-image" style={{backgroundImage: `url(${imageUrl})`}}>
        </div>
          <CardContent>
            <div className="album-info">
              <Typography variant="h5" gutterBottom>
                {props.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {props.artists[0].name}
              </Typography>
            </div>
            <div className="album-attr">
              <Typography variant="body2" gutterBottom>
                {props.release_date}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {props.total_tracks} tracks
              </Typography>
            </div>
            <Button target="_blank" onClick={(event) => {event.preventDefault(); window.open(props.external_urls.spotify);}} className="button-album-preview sm-button">Preview in Spotify</Button>
          </CardContent>
      </Card>
  )
}

export default AlbumCard;

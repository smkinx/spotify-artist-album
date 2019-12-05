import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom'
import './style.css'

const ArtistCard = (props) => {
  let ratings = props.popularity / 100 * 5;
  let imageUrl = "https://via.placeholder.com/500";
  let followers = props.followers.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if(props.images[2]){
    imageUrl = props.images[2].url;
  }
  return (
    <Link className="artist-link" to={`/artist/${props.id}`}>
      <Card className="artist-card" elevation={0}>

        <div className="artist-image" style={{backgroundImage: `url(${imageUrl})`}}>
        </div>
          <CardContent>
            <div className="artist-info">
              <Typography variant="h4" gutterBottom>
                {props.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {followers} followers
              </Typography>
            </div>
            <Rating name="half-rating" className="artist-ratings" value={ratings} precision={0.1} size="large" readOnly/>
          </CardContent>
      </Card>
    </Link>
  )
}

export default ArtistCard;

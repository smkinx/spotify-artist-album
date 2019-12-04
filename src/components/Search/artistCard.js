import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const ArtistCard = (props) => {
  console.log(props)
  let imageUrl = "";
  if(props.images[2]){
    imageUrl = props.images[2].url;
  }
  return (
    <Card>
      <CardMedia
        component="img"
        alt={props.name}
        image={imageUrl}
        title={props.name}
        />
        <CardContent>
          {props.name}

          {props.followers.total}

          {props.popularity}
        </CardContent>
    </Card>
  )
}

export default ArtistCard;

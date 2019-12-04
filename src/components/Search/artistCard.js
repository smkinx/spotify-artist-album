import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const useStyles =  makeStyles(theme => ({
  image: {
    [theme.breakpoints.down('xs')]: {
       height: "150px",
     },
    [theme.breakpoints.up('sm')]: {
       height: "150px",
     },
     [theme.breakpoints.up('md')]: {
       height: "400px"
     },
     [theme.breakpoints.up('lg')]: {
       height: "350px"
     },
  },
  artistCard: {
    height: "100%",
    textAlign: "left"
  }
}));


const ArtistCard = (props) => {
  const classes = useStyles();
  let ratings = props.popularity / 100 * 5;
  let imageUrl = "https://via.placeholder.com/500";
  let followers = props.followers.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if(props.images[2]){
    imageUrl = props.images[2].url;
  }
  return (
    <Card className={classes.artistCard}>
      <CardMedia
        component="img"
        alt={props.name}
        image={imageUrl}
        title={props.name}
        className={classes.image}
        />
        <CardContent>
          <Typography variant="h5">
            {props.name}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {followers} followers
          </Typography>
          <Rating name="half-rating" value={ratings} precision={0.1} />
        </CardContent>
    </Card>
  )
}

export default ArtistCard;

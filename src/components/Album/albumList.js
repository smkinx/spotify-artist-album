import React from 'react';

class AlbumList extends React.Component {

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.artistId);
  }

  render() {
    console.log(this.props)
    return (
      <div></div>
    )
  }
}

export default AlbumList;

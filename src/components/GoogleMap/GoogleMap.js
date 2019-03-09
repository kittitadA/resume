import React, { Component } from 'react';

import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '200%',
    height: '400px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    position: 'absolute',
    borderRadius: '10px'
};

export class MapContainer extends Component {
  render() {

    return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                 lat: 7.0086,
                 lng: 100.4746
                }}
            />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDuZKur8X9yZAiD3GDtR-Ul5vAuPFQ0YeY'
})(MapContainer);

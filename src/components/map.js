import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 10.789825,
      lng: 106.680267
    },
    zoom: 15
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '200px', width: '300px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyCHbFwhMOMzHLjIJwqKMq9krc_geGNba9M"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={10.789825}
            lng={106.680267}
            text="Shoes Store"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
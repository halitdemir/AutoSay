import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const API_KEY = "AIzaSyCLUJJUG30jiHw_HF_aA_D6m7-4dfih1D4"

const mapStyles = {
    width: '100%',
    height: '400px',
  };

export class MapContainer extends Component {
  render() {
    return (
        <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{ lat: 41.025303, lng: 29.023950}}
        >
            <Marker position={{ lat: 41.025303, lng: 29.023950}} />
        </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer)
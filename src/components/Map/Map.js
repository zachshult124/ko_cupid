import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
    width: '100%',
    height: '500px'
}

export class MapContainer extends React.Component {
    render() {
        return (
            <Map google={this.props.google}
                style={style}
                initialCenter={{
                    lat: 41.878876,
                    lng: -87.635918
                }}
                zoom={14}
                onClick={this.onMapClicked}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{ lat: 37.778519, lng: -122.405640 }} />
                <Marker
                    name={'Dolores park'}
                    position={{ lat: 37.759703, lng: -122.428093 }} />
                <Marker />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>Welcome To The Darknesss</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC2WljOFv9ujHKJWIgMsrE4Wj3bZA5nBZk')
})(MapContainer)
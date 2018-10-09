import React, { Component } from 'react';
import './MapSolo.css';

class MapSolo extends Component {

    componentDidMount() {
        this.renderMap()
    }

    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyC2WljOFv9ujHKJWIgMsrE4Wj3bZA5nBZk&callback=initMap")
        window.initMap = this.initMap
    }

    initMap = () => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 41.878876, lng: -87.635918 },
            zoom: 14
        });
    }

    render() {
        return (
            <main>
                <div id="map"></div>
            </main>
        )
    }
}

function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}

export default MapSolo;
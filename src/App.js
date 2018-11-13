import React, { Component } from 'react';
import './App.css';
import MapContainer from './Components/MapContainer';
import MapNav from"./Components/MapNav";
import * as FourSquareAPI from './FourSquare';

class App extends Component {
  state = {
    places: [
      {
        name: "Stevens Institute of Technology",
        location: {
          lat: 40.7445421,
          lng: -74.02419689
        },
        img: '',
        likes: ''
      },
      {
        name: "Carlo's Bake Shop",
        location: {
          lat: 40.7370972,
          lng: -74.03081039
        },
        img: '',
        likes: ''
      },
      {
        name: "Bow Tie Cinemas",
        location: {
          lat: 40.7541757,
          lng: -74.0323959
        },
        img: '',
        likes: ''
      },
      {
        name: "W Hotel",
        location: {
          lat: 40.73930439,
          lng: -74.0279008
        },
        img: '',
        likes: ''
      },
      {
        name: "La Isla",
        location: {
          lat: 40.7507544,
          lng: -74.0252864
        },
        img: '',
        likes: ''
      }
    ],
    currentPlaces: [],
    requestAvailable: true
  };

  componentDidMount() {
    this.getFourSquareData();
  }

  // Fetch FourSquare data from API
  getFourSquareData = () => {
    const newPlaces = this.state.places.map((place) => {
      const size = 150
      FourSquareAPI.getFourSquareVenueID(place.location.lat, place.location.lng, place.name)
        .then((venueId) => {
          FourSquareAPI.getFourSquareVenueInfo(venueId)
            .then((venueInfo) => {
              place.likes = venueInfo.likes.count
              place.img = venueInfo.bestPhoto.prefix + size + venueInfo.bestPhoto.suffix
            })
            .catch(() => this.setState({ requestAvailable: false })
        )})
        .catch((e) => alert(e));
      return place;
    });
    this.setState({ currentPlaces: newPlaces });
  }

  // Filter a new array of current places based on user query
  filterPlaces = (query) => {
    if (!query) {
      this.setState({ currentPlaces: [] });
    }
    const filteredPlaces = this.state.places.filter((place) => place.name.toLowerCase().includes(query.toLowerCase()));
    this.setState({ currentPlaces: filteredPlaces });
  }

  // Set active marker when clicking list item
  setActiveMarker = (marker) => {
    document.querySelector(`[title="${marker}"]`).click();
  }

  render() {
    return (
      <div className="App">
        <MapNav places={this.state.currentPlaces} onQuery={this.filterPlaces} setActiveMarker={this.setActiveMarker}/>
        <MapContainer places={this.state.currentPlaces} centerCoords={this.state.places[0].location} activeMarker={this.state.activeMarker} showingInfoWindow={this.state.showingInfoWindow} requestAvailable={this.state.requestAvailable}/>
      </div>
    );
  }
}

export default App;

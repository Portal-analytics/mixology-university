var React = require('react');
var transparentBg = require('../styles/index.js').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var BarPage = React.createClass({

  getInitialState: function () {
    return {
      barArray: [],
      lat: 0,
      lng: 0,
    };
  },

  componentDidMount: function () {

    var googleURL = 'https://www.googleapis.com/geolocation/v1/geolocate?key=';
    googleURL += 'AIzaSyBYTqKvFfX5oAQOVFL8G7dcY26H8-nNU9Q';
    console.log(googleURL);

    $.post(googleURL, {},
      function (googleData) {
        console.log(googleData);
        this.setState({
            lat: googleData.location.lat,
            lng: googleData.location.lng,
          });
      }.bind(this));

    var url = 'https://api.foursquare.com/v2/venues/search?';

    //App Stuff
    url += 'client_id=302XBJMGHNZG4CRCPB2HXC51JP35LIDFM35FAQPIJ5U0MOKG';
    url += '&client_secret=PJLEIJHCFSAGOPRHJBYMXNEH322WCKZB2HTCLJPVYR0PZVVY';
    url += '&v=20160521';

    //Parameters for 'near' and 'restaurant'
    url += '&ll=';
    console.log(this.state.lat);
    url += this.state.lat + ',' + this.state.lng;
    url += '&query= bar';
    url += '&limit=50';

    $.getJSON(url,
      function (data) {
        var tempBarArray = [];

        console.log(data);

        $.each(data.response.venues, function (i, venues) {
              name = venues.name;
              tempBarArray.push(name);
            });

        this.setState({
              barArray: tempBarArray,
            });

      }.bind(this));

  },

  sortBarArrayByDistance: function () {

  },

  printBars: function () {
    return this.state.barArray.map(function (name, index) {
      //console.log({name});
      return <p key={index}>{name}</p>;
    });
  },

  render: function () {

    return (
      <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
        <h1> Nearest Bar </h1>
        <p> Coupe DeVilles </p>
        <h3> Other Nearby Bars </h3>
        {this.printBars()}
      </div>

    );
  },
});

module.exports = BarPage;

var React = require('react');
var transparentBg = require('../styles/index.js').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var BarPage = React.createClass({

  getInitialState: function () {
    return {
      barArray: [],
      firstBar: '',
      lat: 0,
      lng: 0,
    };
  },

  componentDidMount: function () {

    var googleURL = 'https://www.googleapis.com/geolocation/v1/geolocate?key=';
    googleURL += 'AIzaSyBYTqKvFfX5oAQOVFL8G7dcY26H8-nNU9Q';

    $.post(googleURL, {},
      function (googleData) {
        console.log(googleData);
        this.setState({
            lat: googleData.location.lat,
            lng: googleData.location.lng,
          });
        var url = 'https://api.foursquare.com/v2/venues/search?';

        //App Stuff
        url += 'client_id=302XBJMGHNZG4CRCPB2HXC51JP35LIDFM35FAQPIJ5U0MOKG';
        url += '&client_secret=PJLEIJHCFSAGOPRHJBYMXNEH322WCKZB2HTCLJPVYR0PZVVY';
        url += '&v=20160609';

        //Parameters for 'near' and 'restaurant'
        url += '&ll=';
        url += this.state.lat + ',' + this.state.lng;
        url += '&query=bar,restaurant';
        url += '&limit=50';
        url += '&radius=1000';

        $.getJSON(url,
          function (data) {
            var tempBarArray = [];
            var tempDistanceArray = [];

            console.log(data);

            $.each(data.response.venues, function (i, venues) {
                  name = venues.name;
                  distance = venues.location.distance;
                  tempBarArray.push(name);
                  tempDistanceArray.push(distance);
                });

            for (var i = 0; i < tempDistanceArray.length; i++) {
              for (var j = 0; j < tempDistanceArray.length; j++) {
                if (tempDistanceArray[i] > tempDistanceArray[j + 1]) {
                  tempDistVar = tempDistanceArray[j + 1];
                  tempDistanceArray[j + 1] = tempDistanceArray[i];
                  tempDistanceArray[i] = tempDistVar;
                  tempBarVar = tempBarArray[j + 1];
                  tempBarArray[j + 1] = tempBarArray[i];
                  tempBarArray[i] = tempBarVar;
                }
              }
            }

            tempBarArray.reverse();
            tempFirstBar = tempBarArray.pop();

            tempDistanceArray.reverse();
            tempFirstDistance = tempDistanceArray.pop();

            console.log(tempBarArray);
            console.log(tempDistanceArray);

            this.setState({
                  barArray: tempBarArray,
                  firstBar: tempFirstBar,
                });

          }.bind(this));
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
        <p> {this.state.firstBar} </p>
        <h3> Other Nearby Bars </h3>
        {this.printBars()}
      </div>

    );
  },
});

module.exports = BarPage;

var React = require('react');
var styles = require('../styles');
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
            var tempFirstBar = {};

            $.each(data.response.venues, function (i, venues) {
                  var name = venues.name;
                  var distance = venues.location.distance;
                  tempBarArray.push({
                    name: name,
                    distance: distance,
                    firstAddress: venues.location.formattedAddress[0],
                    secondAddress: venues.location.formattedAddress[1],
                  });

                });

            tempBarArray.sort(function (bar1, bar2) {
              return bar1.distance - bar2.distance;
            });

            tempFirstBar = tempBarArray[0];
            tempBarArray.shift();

            this.setState({
                  barArray: tempBarArray,
                  firstBar: tempFirstBar,
                });

          }.bind(this));
      }.bind(this));

  },

  renderBarComponents: function () {
    return this.state.barArray.map(function (name, index) {
      return <p key={index} style={{color: 'white'}}>{name.name}</p>;
    });
  },

  render: function () {

    return (
      <div>
        <nav className="navbar navbar-light" style={styles.navBg}>
          <Link to='/'>
          <a className="navbar-brand" style={{color: 'black'}}>Mixology University</a>
          </Link>
          <ul className="nav navbar-nav" style={{float: "right"}}>
            <li className="nav-item active" >
              <Link to='/menu'><a className="nav-link"style={{color: 'black'}}>Library <span className="sr-only">(current)</span></a></Link>
            </li>
            <li className="nav-item">
              <Link to='/barpage'><a className="nav-link" style={{color: 'black'}}>Bars</a></Link>
            </li>
            <li className="nav-item">
              <Link to='/homebrew'><a className="nav-link" style={{color: 'black'}}>Brew</a></Link>
            </li>
          </ul>
        </nav>
        <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
          <h1 style={{color: 'white'}}> <b>Nearest Bar</b> </h1>
          <h3 style={{color: 'white'}}> <i>{this.state.firstBar.name} </i></h3>

          <h5 style={{color: 'white'}}> {this.state.firstBar.secondAddress}</h5>
          <h3 style={{color: 'white'}}> <b>Other Nearby Bars </b></h3>
          {this.renderBarComponents()}
        </div>
      </div>
    );
  },
});

module.exports = BarPage;

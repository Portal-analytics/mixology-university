var React = require('react');
var transparentBg = require('../styles/index.js').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var BarPage = React.createClass({
  render: function() {
    return(
      <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
        <h1> Nearest Bar </h1>
        <p> Coupe DeVilles </p>
        <h3> Other Nearby Bars </h3>
        <p> Biltmore </p>
        <p> Crozet </p>
        <p> Trinity </p>
        <p> Boylan </p>
        <p> St. Marteens </p>
      </div>

    )
  }
});

module.exports = BarPage;

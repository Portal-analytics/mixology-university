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
      </div>

    )
  }
});

module.exports = BarPage;

var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function () {
    return (
      <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
        {/*Make the header bigger and possibly cursive font*/}
        <h1> Mixology University </h1>
        {/*Need to link this button to List of Drinks, and add space between buttons*/}
        <Link to='/menu'>
        <div style={styles.space}><button type='button' className='btn btn-lg btn-secondary col-sm-6 col-sm-offset-3'> Menu </button></div>
        </Link>
        <div style={styles.space}>
        <img src='../../Two-Glasses-of-Beer-6.png' />
        </div>
        {/*Need to link this button to Nearest Bar page and make buttons bigger/darker*/}
        <Link to='/barpage'>
        <div style={styles.space}><button type='button' className='btn btn-lg btn-secondary col-sm-6 col-sm-offset-3'> Bars </button></div>
        </Link>
      </div>
    )
  }
});

module.exports = Home;

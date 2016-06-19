var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({

    getInitialState: function (props) {
        return {
            drinkList: this.props.drinkList,
                };
    },

    getFromLocalStorage: function (key) {
        var drinkList = JSON.parse(localStorage.getItem(key)) || null;
    },

    setToLocalStorage: function (key) {
        if(JSON.parse(localStorage.getItem(key)) === null) {
          localStorage.setItem(key, JSON.stringify(this.state.drinkList));
        };
    },

    render: function () {
        this.setToLocalStorage('drinkList');
        this.getFromLocalStorage('drinkList');
        return (
            <div>
              <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
                <h1> Mixology University </h1>
                <Link to='/menu'>
                <div style={styles.space}><button type='button' className='btn btn-lg btn-secondary col-sm-6 col-sm-offset-3'> ◀︎ Menu  </button></div>
                </Link>
                <Link to='/homebrew'>
                <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
                <img src='../../Two-Glasses-of-Beer-6.png' />
                </div>
                </Link>
                <Link to='/barpage'>
                <div style={styles.space}><button type='button' className='btn btn-lg btn-secondary col-sm-6 col-sm-offset-3'> Bars ▶︎ </button></div>
                </Link>
              </div>
            </div>
        );
      }
});

module.exports = Home;

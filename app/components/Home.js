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
              <div className='jumbotron col-sm-12 text-center jumbotron-fluid' style={styles.transparentBg}>
                <img src='../../slack-imgs.com.jpeg'/>
                <h1 style={{color: 'white'}}>The Future is Now</h1>
              </div>

            </div>
        );
      }
});

module.exports = Home;

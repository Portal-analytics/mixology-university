var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ResultsPage = React.createClass({

	getInitialState: function () {
		
		return {
			finalDrinkList: JSON.parse(localStorage.getItem('finalDrinkList')),
		}
	},

	renderDrinks: function () {
	if(this.state.finalDrinkList[0] !== undefined) {
      return this.state.finalDrinkList.map(function(index, name) {
        return (
          <li key={index} style={{color: 'white'}}>
            <a href={index.url} style={{color: 'white'}}>
              <h4 key={index}>{index.name}</h4>
              <p>{index.ingredients}</p>
            </a>
          </li>
          )
      });
  } else {
  	return (
  		<h1 style={{color: 'white'}}>Nothing...</h1>
  		);
  }
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

		        <div className='jumbotron col-sm-12 text-center jumbotron-fluid' style={styles.transparentBg}>
		        	<h1 style={{color: 'white'}}> You can make...</h1>
		        </div>
		        <div className='jumbotron col-sm-12 jumbotron-fluid' style={styles.transparentBg}>
		        	<ol>
		        	{this.renderDrinks()}
		        	</ol>
		        </div>
		        <div className='jumbotron col-sm-12 text-center jumbotron-fluid' style={styles.transparentBg}>
		        <button type='button' className='btn btn-lg text-center btn-primary'> Try Again! </button>
		        </div>
			</div>
			);
	}

});

module.exports = ResultsPage;
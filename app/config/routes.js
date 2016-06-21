var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var BarPage = require('../containers/BarPage');
var Menu = require('../containers/Menu');
var Homebrew = require('../containers/Homebrew');
var ResultsPage = require('../containers/ResultsPage');

var routes = (

  <Router history={hashHistory}>
      <Route path='/' component={Main}/>
      <Route path='/homebrew' component={Homebrew}/>
      <Route path='/barpage' component={BarPage}/>
      <Route path='/menu' component={Menu}/>
      <Route path='/resultspage' component={ResultsPage}/>
  </Router>
);

module.exports = routes;

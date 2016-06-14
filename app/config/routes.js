var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var BarPage = require('../containers/BarPage');
var Menu = require('../containers/Menu');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/barpage' component={BarPage}/>
      <Route path='/menu' component={Menu}/>
    </Route>
  </Router>
);

module.exports = routes;

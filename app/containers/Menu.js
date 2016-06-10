var React = require('react');
var transparentBg = require('../styles/index.js').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Menu = React.createClass({

  drinkList: function() {
		var url = 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';

		/*//App Stuff
		url += 'client_id=302XBJMGHNZG4CRCPB2HXC51JP35LIDFM35FAQPIJ5U0MOKG'
		url += '&client_secret=PJLEIJHCFSAGOPRHJBYMXNEH322WCKZB2HTCLJPVYR0PZVVY'
		url += '&v=20160521'

		//Parameters for 'near' and 'restaurant'
		url += '&near=Charlottesville, VA'
		url += '&query=restaurant, bar'
		url += '&limit=50'*/

		$.getJSON(url,
    		function(data) {

      			console.log(data);


        }
      )
  },


  render: function(){

    this.drinkList();
    return(

      <div>
        <div className ='jumbotron col-sm-12 text-center' style={transparentBg}>
          <h1> Check out these bitchin drinks </h1>
        </div>
        <div className ='jumbotron col-sm-12'>
          <ol class="list-group">
            <li>
            <a href="http://google.com" class="list-group-item active">
            <h4 class="list-group-item-heading">Tequila Sunrise</h4>
            <p class="list-group-item-text"> 3 parts tequila, 6 parts OJ, 1 part Grenadine</p>
            </a></li>
            <li>
            <a href="http://horse-cum.net" class="list-group-item active">
            <h4 class="list-group-item-heading">Horse Jizz</h4>
            <p class="list-group-item-text"> 1/2 Beer, 1/2 Milk</p>
            </a></li>
          </ol>
        </div>
      </div>

      )
    }
});

module.exports = Menu;

var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ingredientList = [];
var selectedIngredients = [];

var Homebrew = React.createClass({

  getInitialState: function () {
    return {
      ingredientList: ['rum', 'tequila', 'vodka'],
    };
  },

  showIngredientList: function () {
    return this.state.ingredientList.map(function (ingredient) {
      return <li className='checkbox'><label><input type='checkbox'></input>{ingredient}</label></li>;
    });
  },

  filterDrinks: function () {
    for (i = 0; i < drinkList.length - 1; i++) {
      for (j = 0; j < selectedIngredients.length - 1; j++) {
        if (drinkList[i].ingredients.includes(this.selectedIngredients[j])) {
          availableDrinks.remove(drinkList[i]);
        }
      }

    }
  },

  render: function () {
    return (
      <div>
      <h1> Show us whatcha got</h1>
      <h2> ingredients </h2>
      <ul>
      {this.showIngredientList()}
      </ul>
      </div>
    );
  },
});

module.exports = Homebrew;

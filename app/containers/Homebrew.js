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

  addIngredient: function (ingredient) {
    return function () {
      selectedIngredients.push(ingredient);
      console.log(selectedIngredients);
    };

  },

  onSubmit: function(){
    for ( i = 0; i > ingredientList.length; i++) {
      for ( j =0; j > selectedIngredients.length; j++ ) {
        if (ingredientList[i].indexOf(selectedIngredients[j] > -1)){
          ingredientList.splice(i, 1, '');
        }
      }
    }
    while (ingredientList.indexOf('') > -1) {
      ingredientList.splice(ingredientList.indexOf(''), 1);
    }
    console.log(ingredientList);
  },

  showIngredientList: function () {
    return this.state.ingredientList.map(function (ingredient, id) {
      return <li key={id} onClick={this.addIngredient(ingredient)}>
                <label>
                <input type='checkbox' value={ingredient}/>
                {ingredient}
                </label>
             </li>;
    }.bind(this));
  },

  filterDrinks: function () {
    for (i = 0; i < drinkList.length - 1; i++) {
      for (j = 0; j < selectedIngredients.length - 1; j++) {
        if (drinkList[i].ingredients.includes(selectedIngredients[j])) {
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
      <button type='button' onClick={this.onSubmit}>Submit to me </button>
      </div>
    );
  },
});

module.exports = Homebrew;

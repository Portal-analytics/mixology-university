var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ingredientList = [];
var selectedIngredients = [];

var Homebrew = React.createClass({

  getInitialState: function () {

    return {
      drinkList: JSON.parse(localStorage.getItem('drinkList')),
      ingredientList: ['Alize Cognac',
                      'Apple Pucker Schnapps',
                      'Bourbon',
                      'Brandy',
                      'Everclear',
                      'Gin',
                      'Butterscotch Schnapps',
                      'Goldschlager',
                      'Grand Marnier',
                      'Hennessy Cognac',
                      'Jameson',
                      'Jägermeister',
                      'Peach Schnapps',
                      'Rum',
                      'Rumpleminze',
                      'Scotch',
                      'Tequila',
                      'Vodka',
                      'Whiskey',
                      'Amaretto',
                      'Banana Liqueur',
                      'Benedictine',
                      'Blue Curacao',
                      'Chambord',
                      'Cointreau',
                      'Creme de Cacao',
                      'Creme de Menthe',
                      'Creme de Cocoa',
                      'Drambuie',
                      'Frangelico',
                      'Hpnotiq',
                      'Irish Cream',
                      'Kahlua',
                      'Midori Melon Liquer',
                      'Raspberry Liqueur',
                      'Sour Apple Pucker',
                      'Triple Sec',
                      '7-Up',
                      'Big Red',
                      'Coke',
                      'Fruit Punch',
                      'Ginger Ale',
                      'Ginger Beer',
                      'Iced Tea',
                      'Kool-Aid',
                      'Lemonade',
                      'Milk',
                      'Red Bull',
                      'Soda Water',
                      'Water',
                      'Bass Pale Ale',
                      'Guinness',
                      'Hard Cider',
                      'Banana',
                      'Cherry',
                      'Coco Lopez',
                      'Cranberry Juice',
                      'Cream of Coconut',
                      'Grapefruit Juice',
                      'Grenadine',
                      'Lemon',
                      'Lime',
                      'Orange Juice',
                      'Pineapple',
                      'Tangelo Juice',
                      'Cinnamon',
                      'Ice-Cream',
                      'Jello',
                      'Light Cream',
                      'Mint',
                      'Nutmeg',
                      'Pina Colada Mix',
                      'Salt',
                      'Skittles',
                      'Sour Mix',
                      'Sugar',
                      'Whipped Cream',
                    ],
    };
  },

  toggleIngredient: function (ingredient) {

    return function () {

      if (selectedIngredients.indexOf(ingredient) === -1) {
        selectedIngredients.push(ingredient);
        this.state.ingredientList.splice(this.state.ingredientList.indexOf(ingredient), 1);
      } else {
        this.state.ingredientList.push(ingredient);
        selectedIngredients.splice(selectedIngredients.indexOf(ingredient), 1);
      }
    }.bind(this);

  },

  onSubmit: function () {
    var finalDrinkList = [];
    for (k = 0; k < this.state.drinkList.length; k++) {
      finalDrinkList[k] = this.state.drinkList[k].ingredients;
    };

    for (i = 0; i < this.state.ingredientList.length; i++) {
      for (j = 0; j < finalDrinkList.length; j++) {
        if (finalDrinkList[j].indexOf(this.state.ingredientList[i]) > -1) {

          this.state.drinkList.splice(j, 1, '');
        };
      };
    };

    while (this.state.drinkList.indexOf('') > -1) {
      this.state.drinkList.splice(this.state.drinkList.indexOf(''), 1);
    };
  },

showIngredientList19: function () {

  return this.state.ingredientList.map(function (ingredient, id) {
    if({ id }.id < 19){
      return (
        <li key={id} >
          <label onClick={this.toggleIngredient(ingredient)}>
            <input type='checkbox' value={ingredient}/>
            {ingredient}
          </label>
        </li>
      );
    }
  }.bind(this));
},

showIngredientList37: function () {
  return this.state.ingredientList.map(function (ingredient, id) {
    if ({ id }.id === 19 || { id }.id > 19 && { id }.id < 37) {
      return(
      <li key={id} >
        <label onClick={this.toggleIngredient(ingredient)}>
          <input type='checkbox' value={ingredient}/>
          {ingredient}
        </label>
      </li>
    );
  }
  }.bind(this));
},
showIngredientList51: function () {
  return this.state.ingredientList.map(function (ingredient, id) {
    if({ id }.id === 37 || { id }.id > 37 && { id }.id < 50){
      return(
      <li key={id} >
        <label onClick={this.toggleIngredient(ingredient)}>
          <input type='checkbox' value={ingredient}/>
          {ingredient}
        </label>
      </li>
    );
    }
  }.bind(this));
},
showIngredientList54: function () {
  return this.state.ingredientList.map(function (ingredient, id) {
    if({ id }.id === 50 || { id }.id > 50 && { id }.id < 53){
      return(
      <li key={id} >
        <label onClick={this.toggleIngredient(ingredient)}>
          <input type='checkbox' value={ingredient}/>
          {ingredient}
        </label>
      </li>
    );
    }
  }.bind(this));
},

showIngredientList66: function () {
  return this.state.ingredientList.map(function (ingredient, id) {
    if({ id }.id === 53 || { id }.id > 53 && { id }.id < 65){
      return(
      <li key={id} >
        <label onClick={this.toggleIngredient(ingredient)}>
          <input type='checkbox' value={ingredient}/>
          {ingredient}
        </label>
      </li>
    );
    }
  }.bind(this));
},

showIngredientList76: function () {
  return this.state.ingredientList.map(function (ingredient, id) {
    if({ id }.id === 65 || { id }.id > 65){
    return(
       <li key={id} >
        <label onClick={this.toggleIngredient(ingredient)}>
          <input type='checkbox' value={ingredient}/>
          {ingredient}
        </label>
      </li>
      );
    }
  }.bind(this));
},

render: function () {
  return (
    <div>
    <Link to='/'>
      <button type='button' className='btn btn-secondary col-sm-12' > Home </button>
    </Link>
    <h1> Show Us Whatchu Got</h1>
    <h2> Ingredients </h2>
    <h3> Liquors </h3>
    <ul>
    {this.showIngredientList19()}
    </ul>
    <h3> Liqueurs </h3>
    <ul> {this.showIngredientList37()} </ul>
    <h3> Mixers </h3>
    <ul> {this.showIngredientList51()} </ul>
    <h3> Beers </h3>
    <ul> {this.showIngredientList54()} </ul>
    <h3> Fruits </h3>
    <ul> {this.showIngredientList66()} </ul>
    <h3> Miscellaneous </h3>
    <ul> {this.showIngredientList76()}</ul>
    <button type='button' onClick={this.onSubmit}>Submit to me </button>
    </div>
    );
  },
});

module.exports = Homebrew;

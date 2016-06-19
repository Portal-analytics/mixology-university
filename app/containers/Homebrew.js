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
      ingredientList: ['Rum',
                      'Coke',
                      'Vodka',
                      'Kahlua',
                      'Whiskey',
                      '7-Up',
                      'Tequila',
                      'Red Bull',
                      'Jägermeister',
                      'Orange Juice',
                      'Irish Cream',
                      'Peach Schnapps',
                      'Grenadine',
                      'Water',
                      'Everclear',
                      'Jello',
                      'Creme de Cacao',
                      'Coco Lopez',
                      'Amaretto',
                      'Nutmeg',
                      'Whipped Cream',
                      'Midori Melon Liqueur',
                      'Sour Mix',
                      'Bourbon',
                      'Triple Sec',
                      'Fruit Punch',
                      'Creme de Menthe',
                      'Creme de Cocoa',
                      'Ice-Cream',
                      'Hpnotiq',
                      'Hennessy Cognac',
                      'Frangelico',
                      'Gin',
                      'Cranberry Juice',
                      'Butterscotch Schnapps',
                      'Blue Curacao',
                      'Sour Apple Pucker',
                      'Banana Liqueur',
                      'Milk',
                      'Apple Pucker Schnapps',
                      'Big Red',
                      'Sugar',
                      'Mint',
                      'Soda Water',
                      'Guinness',
                      'Bass Pale Ale',
                      'Ginger Beer',
                      'Goldschlager',
                      'Chambord',
                      'Drambuie',
                      'Scotch',
                      'Skittles',
                      'Hard Cider',
                      'Salt',
                      'Rumpleminze',
                      'Grand Marnier',
                      'Pineapple',
                      'Ginger Ale',
                      'Jameson',
                      'Banana',
                      'Pina Colada Mix',
                      'Raspberry Liqueur',
                      'Grapefruit Juice',
                      'Cointreau',
                      'Tangelo Juice',
                      'Lemon',
                      'Alize Cognac',
                      'Cinnamon',
                      'Brandy',
                      'Lime',
                      'Cream of Coconut',
                      'Cherry',
                      'Chambord',
                      'Lemonade',
                      'Iced Tea',
                      'Kool-Aid',
                      'Benedictine',
                      'Light Cream',
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
    }

    for (i = 0; i < this.state.ingredientList.length; i++) {
      for (j = 0; j < finalDrinkList.length; j++) {
        if (finalDrinkList[j].indexOf(this.state.ingredientList[i]) > -1) {

          this.state.drinkList.splice(j, 1, '');
        }
      }
    }

    while (this.state.drinkList.indexOf('') > -1) {
      this.state.drinkList.splice(this.state.drinkList.indexOf(''), 1);
    }

  },

  renderIngredientListItems: function () {
    this.state.ingredientList.sort();
    return this.state.ingredientList.map(function (ingredient, id) {
      return <li key={id} >
                <label onClick={this.toggleIngredient(ingredient)}>
                <input type='checkbox' value={ingredient}/>
                {ingredient}
                </label>
             </li>;
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
      <ul>
      {this.showIngredientList()}
      </ul>
      <button type='button' onClick={this.onSubmit}>Submit to me </button>
      </div>
    );
  },
});

module.exports = Homebrew;

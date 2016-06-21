var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ingredientList = [];
var selectedIngredients = [];

var Homebrew = React.createClass({

  getInitialState: function () {
    localStorage.setItem('finalDrinkList', '');
    return {
      finalDrinkList: [],
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
    var ingredientCheckList = [];
    for (var k = 0; k < this.state.drinkList.length; k++) {
      ingredientCheckList[k] = this.state.drinkList[k].ingredients;
    };

    for (var i = 0; i < this.state.ingredientList.length; i++) {
      for (var j = 0; j < ingredientCheckList.length; j++) {
        if (ingredientCheckList[j].indexOf(this.state.ingredientList[i]) > -1) {

          this.state.drinkList.splice(j, 1, '');
        };
      };
    };

    while (this.state.drinkList.indexOf('') > -1) {
      this.state.drinkList.splice(this.state.drinkList.indexOf(''), 1);
    };

    localStorage.setItem('finalDrinkList', JSON.stringify(this.state.drinkList));

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
    <h1 className='text-center' style={{color: 'white'}}> Show Us Whatchu Got</h1>
    <span className='jumbotron col-sm-12 jumbotron-fluid' style={styles.transparentBg}>
    <div className='jumbotron col-sm-3 jumbotron-fluid' style={styles.transparentBg}>
    <h3 style={{color: 'white'}}> Liquors </h3>
    <ul style={{color: 'white'}}>
    {this.showIngredientList19()}
    </ul>
    </div>
    <div className='jumbotron col-sm-3 jumbotron-fluid' style={styles.transparentBg}>
    <h3 style={{color: 'white'}}> Liqueurs </h3>
    <ul style={{color: 'white'}}> {this.showIngredientList37()} </ul>
    </div>
    <div className='jumbotron col-sm-3 jumbotron-fluid' style={styles.transparentBg}>
    <h3 style={{color: 'white'}}> Mixers </h3>
    <ul style={{color: 'white'}}> {this.showIngredientList51()} </ul>
    </div>
    
    
    <div className='jumbotron col-sm-3 jumbotron-fluid' style={styles.transparentBg}>
    <h3 style={{color: 'white'}}> Beers </h3>
    <ul style={{color: 'white'}}> {this.showIngredientList54()} </ul>
    </div>
    </span>
    <span className='jumbotron col-sm-12 jumbotron-fluid' style={styles.transparentBg}>
    <div className='jumbotron col-sm-3 jumbotron-fluid' style={styles.transparentBg}>
    <h3 style={{color: 'white'}}> Fruits </h3>
    <ul style={{color: 'white'}}> {this.showIngredientList66()} </ul>
    </div>
    <div className='jumbotron col-sm-3 jumbotron-fluid' style={styles.transparentBg}>
    <h3 style={{color: 'white'}}> Miscellaneous </h3>
    <ul style={{color: 'white'}}> {this.showIngredientList76()}</ul>
    </div>
    </span>
    <div className='text-center'>
    <Link to='/resultspage'>
    <button type='button' className='btn btn-lg btn-primary' onClick={this.onSubmit}>Submit to me </button>
    </Link>
    <h1> </h1>
    </div>
    </div>
    );
  },
});

module.exports = Homebrew;

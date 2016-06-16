var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Menu = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    /*var tempList = this.props.location.state;
    var newList = [];
    for(i = 0; i < tempList.drinkList.drinkList.length; i ++) {
      newList.push(tempList.drinkList.drinkList[i]);
    };*/

    return {
      lastSort: 'Alphabetical',
      sort: "Popularity",
      popularButtonDisabled: true,
      alphabeticalButtonDisabled: false,
      drinkName: '',
      newDrinkIngredients: '',
      drinkList: JSON.parse(localStorage.getItem('drinkList')),

    };
  },

 handleDrinkNameChange: function (e) {
    this.setState({
      drinkName: e.target.value,
    }, function() {
      console.log(this.state.drinkName);
    });
  },

  handleNewIngredientsChange: function (e) {
    this.setState({
      newdrinkingredients: e.target.value,
    }, function() {
      console.log(this.state.newdrinkingredients);
    });
  },

  handleSubmit: function (e) {
    if(this.state.drinkName !== '') {
    var urlName = this.state.drinkName.replace(/\s/g, '+');
    e.preventDefault();
    var drinkName = this.state.drinkName;
    this.state.drinkList.push({name: this.state.drinkName, ingredients: this.state.newdrinkingredients, rating: 5, drinkNumber: this.state.drinkList.length, url: 'http://google.com/#q=' + urlName + '+cocktail'});
    this.setState({
      drinklist: this.state.drinkList,
      drinkName: '',
      newdrinkingredients: '',
    });
  } else {
    this.setState({
      drinkName: '',
      newdrinkingredients: '',
    });
  }

  },

  handlePopSort: function () {
    this.setState({
      drinkList: this.popularSort(),
    });
  },

  handleAlphSort: function () {
    this.setState({
      drinkList: this.alphabeticalSort(),
    });
  },

  removeDrink: function (name) {
    var index = this.state.drinkList.indexOf(name);
    console.log(index);
    this.state.drinkList.splice(index, 1);
    this.setState({
      drinkList: this.state.drinkList,
    });
  },

  drinkListReturn: function () {
    return this.state.drinkList.map(function (index) {
      return (
        <div>
          <li>
            <div>
            <button type='button' className='btn' style={{float: "right"}} onClick={function() {this.removeDrink(index)}.bind(this)}> X </button>
            <a href={index.url}>
              <h4 key={index}>{index.name}</h4>
              <p>{index.ingredients}</p>
            </a>
            
            </div>
          </li>
        </div>
      );
    }.bind(this)
    );
  },

  popularSort: function () {
    this.state.drinkList.sort(function (drink1, drink2) {
      return drink2.rating - drink1.rating;
    });
    this.setSortingPopularFn();
    return this.state.drinkList;
    console.log(this.state.drinkList);
  },

  alphabeticalSort: function () {
    this.state.drinkList.sort(function (index1, index2) {
        var drink1 = index1.name.toUpperCase();
        var drink2 = index2.name.toUpperCase();
        if (drink1 < drink2) {
          return -1;
        }
        if (drink1 > drink2) {
          return 1;
        }
      return 0;
      });
    this.setSortingAlphabeticalFn();
    return this.state.drinkList;
    console.log(this.state.drinkList);
  },

  setSortingPopularFn: function () {
    if(this.state.sort === "Alphabetical") {
      this.setState({
        sort: "Popularity",
        alphabeticalButtonDisabled: false,
        popularButtonDisabled: true,
      });
    }
  },

  setSortingAlphabeticalFn: function() {
    if (this.state.sort === "Popularity") {
      this.setState({
        sort: "Alphabetical",
        popularButtonDisabled: false,
        alphabeticalButtonDisabled: true,
      });
    }
  },

  setLocalStorage: function () {
        localStorage.setItem('drinkList', JSON.stringify(this.state.drinkList));
  },

  render: function () {
    this.setLocalStorage();
    return (
      <div>
      <div className='col-sm-10'> </div>
        <Link to='/'>
        <button type='button' className='btn btn-secondary col-sm-2' > Home </button>
        </Link>
        <div className ='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
          <h1><i>Cocktail Menu</i></h1>
          <button type='button' className='btn btn-secondary btn-lg' disabled={this.state.popularButtonDisabled} style={styles.rightspace} onClick={this.handlePopSort}> Popular </button>
        <button type='button' className='btn btn-secondary btn-lg' disabled={this.state.alphabeticalButtonDisabled} onClick={this.handleAlphSort}> Alphabetical </button>
        </div>
        <div style={styles.transparentBg}>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group col-sm-4">
        <label>Drink Name*</label>
        <input
          className='form-control'
          type='text'
          placeholder='Drink Name*'
          value={this.state.drinkName}
          onChange={this.handleDrinkNameChange}
        />
        <small className="text-muted">Please input the name of your favorite drink!</small>
        </div>
        <div className="form-group col-sm-6">
           <label for="drinkIngredientsInput">Drink Ingredients</label>
        <input
          className='form-control'
          type='text'
          placeholder='Drink Ingredients'
          value={this.state.newdrinkingredients}
          onChange={this.handleNewIngredientsChange}
        />
        <small className="text-muted">Please input the ingredients to your drink!</small>
        </div>
        <button type='submit' className='btn btn-primary' style={styles.space}> Submit </button>
        </form>
        </div>
        <div className ='jumbotron col-sm-12' style={styles.transparentBg}>
        <ol>
          {/*Gets printed every render*/}
          {this.drinkListReturn()}
        </ol>
        </div>
      </div>
    )
  }
});

module.exports = Menu;

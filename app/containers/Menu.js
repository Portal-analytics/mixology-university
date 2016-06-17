var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Editor = require('./Editor');

var Menu = React.createClass({

  getInitialState: function () {

    return {
      lastSort: 'Alphabetical',
      sort: "Popularity",
      popularButtonDisabled: true,
      alphabeticalButtonDisabled: false,
      editDrinkName: '',
      editDrinkIngredients: '',
      drinkName: '',
      newDrinkIngredients: '',
      drinkList: JSON.parse(localStorage.getItem('drinkList')),
      isEditing: 'Edit',

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
    this.state.drinkList.splice(index, 1);
    this.setState({
      drinkList: this.state.drinkList,
    });
  },

  editName: function (e) {
    this.setState({
      drinkList: e.target.value,
    });
    console.log(this.state.editDrinkName);
    /*var index = this.state.drinkList.indexOf(name);
    this.state.drinkList[index].name = this.state.editDrinkName;
    this.setState({
      drinkList: this.state.drinkList,
    });*/

  },

  editDrinkList: function (e) {
    console.log(this.state.drinkList.indexOf(e));
  },

  /*editIngredients: function (name) {
    console.log(this.state.editIngredients);
    var index = this.state.drinkList.indexOf(name);
    this.state.drinkList[index].ingredients = this.state.EditDrinkIngredients;
    this.setState({
      drinkList: this.state.drinkList,
    });
  },*/

  drinkListReturn: function () {
  if (this.state.isEditing === 'Save') {
    return this.state.drinkList.map(function (drink, index) {
      return (
        <Editor object={drink} index={index}/>
        );
    });
  } else {
    return this.state.drinkList.map(function (index) {
      return (
        <div style={{color: 'black'}}>
          <li>
            <div>
            <button type='button' className='btn btn-danger' style={{float: "right"}} onClick={function() {this.removeDrink(index)}.bind(this)}> X </button>
            <a href={index.url} style={{color: 'black'}}>
              <h4 key={index}>{index.name}</h4>
              <p>{index.ingredients}</p>
            </a>
            </div>
          </li>
        </div>
      );
    }.bind(this)
    );
  };
  },

  popularSort: function () {
    this.state.drinkList.sort(function (drink1, drink2) {
      return drink2.rating - drink1.rating;
    });
    this.setSortingPopularFn();
    return this.state.drinkList;
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

  toggleEditableList: function () {
    if(this.state.isEditing === 'Edit') {
      this.setState({
        isEditing: 'Save',
      });
    } else {
      let drinkList = JSON.parse(localStorage.getItem('drinkList'));
      this.setState({
        isEditing: 'Edit',
        drinkList: drinkList,
      });
    };
  },

  saveDrinkList: function () {
    this.setState({
      drinkList: this.state.drinkList,
    });
  },

  render: function () {
    this.setLocalStorage();
    return (
      <div>
        <Link to='/'>
        <button type='button' className='btn btn-secondary col-sm-2' style={{float: "right"}}> Home </button>
        </Link>
        <div className ='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
          <h1><i>Cocktail Menu</i></h1>
          <button type='button' className='btn btn-secondary btn-lg' disabled={this.state.popularButtonDisabled} style={styles.rightspace} onClick={this.handlePopSort}> Popular </button>
        <button type='button' className='btn btn-secondary btn-lg' disabled={this.state.alphabeticalButtonDisabled} onClick={this.handleAlphSort}> Alphabetical </button>
        </div>
        <div className="jumbotron" style={styles.transparentBg}>
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
        <small className="text-muted">*Must input a drink name*</small>
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
        </div>
        <button type='submit' className='btn btn-primary'> Submit </button>
        </form>
        </div>
        <div className='btn-group'>
        <button type='button' className='btn btn-secondary' style={styles.leftspace} onClick={this.toggleEditableList}>{this.state.isEditing}</button>
        </div>
        <div className =' col-sm-12'>
        <ol>
          {this.drinkListReturn()}
        </ol>
        </div>
      </div>
    )
  }
});

module.exports = Menu;

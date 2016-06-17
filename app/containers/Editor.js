var React = require('react');
var ReactDOM = require('react-dom');
var styles = require('../styles');
var ContentEditable = require('react-contenteditable').default;

var Editor = React.createClass({

	getInitialState: function () {
		var drinkObject= this.props.object;
		return {
			html: drinkObject.name,
			html2: drinkObject.ingredients,
			drinkNumber: drinkObject.drinkNumber,
			drinkList: JSON.parse(localStorage.getItem('drinkList')),
		};
	},

	handleNameChange: function (e) {
		this.setState({
			html: e.target.value,
		});	
	},

	handleIngredientsChange: function (e) {
		this.setState({
			html2: e.target.value,
		});
	},

	setLocalStorage: function () {
		this.state.drinkList[this.props.index].name = this.state.html;
		this.state.drinkList[this.props.index].ingredients = this.state.html2;
		localStorage.setItem('drinkList', JSON.stringify(this.state.drinkList));
	},


	render: function() {
		this.setLocalStorage();
		return (
			<div>
			<h4><ContentEditable
				html={this.state.html}
				disabled={false}
				onChange={this.handleNameChange}
			/></h4>
			<p><ContentEditable
				html={this.state.html2}
				disabled={false}
				onChange={this.handleIngredientsChange}
			/></p>
	        </div>


		);
	}

});

module.exports = Editor;
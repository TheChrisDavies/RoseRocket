import React, { Component } from 'react';
// import { Draggable, Droppable } from 'react-drag-and-drop';
import PropTypes from 'prop-types';
import { DragSource, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
// import { ItemTypes } from './Constants';
// import logo from './logo.svg';
import './App.css';
// import Encounters from './Encounters';
import BoxList from './BoxList';
// import Box from './Box';
import ItemsList from './ItemsList';
// import Item from './Item';
// import Users from './Users';
// import User from './User';
// JSON Import
import items from './items.json';
import boxes from './boxes.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: { id: 'placeholder', name: 'Steven Stevenson' },
      box: { id: 'placeholder', name: 'placeholder', total_allowed_weight: 0 },
      item: { id: "2000", name: "Xbox", weight: "100", box_id: "" },
      itemlist: [],
      boxist: []
    }
    // Bind methods here
    // Example: this.diceRoll = this.diceRoll.bind(this);

  }

  componentWillMount() {
    console.log('ComponentWillRun ran :)');
    let boxCopy = boxes;
    let itemCopy = items;
    console.log(boxCopy, itemCopy);
    this.setState(
      {
        boxlist: boxCopy,
        itemlist: itemCopy
      }
    );
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="App-header">
            <h1 className="App-title">A Packing App</h1>
          </header>
          <div className="col-sm-12" >Users Online: {this.state.user.name}</div>
          <ItemsList itemList={this.state.itemlist}/>
          <div className="col-sm-4" />
          <BoxList boxList={this.state.boxlist}/>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);

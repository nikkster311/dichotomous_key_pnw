import React, { Component } from 'react';
import './App.css';
import { Buttons, buttonOptions } from "./buttonAB";

//turns dictionary in buttonAB into three lists with corresponding keys
var clickedList = buttonOptions.map(x => x.clicked);
console.log(clickedList)
var aList = buttonOptions.map(x => x.a);
console.log(aList)
var bList = buttonOptions.map(x => x.b);
console.log(bList)

var allClickedValuesList = [] //list of all clicked values
var stringAllClicked = ""
var clickedValue = [] //this stores the value of the button clicked
var tempList = [] //because concatenate needs 2 lists, its confusing..

//do these variables need to be states?

class App extends Component {
  //change both buttons with each onClick
  state = {
    buttonA: "conifer", //starting value
    buttonB: "idk", //starting value
    beginDiKey: false, //true when program is running
    allClickedValues: [], //list of all the values they chose previously
    noValues: true, //currently the user has chosen nothing
    stringAll: stringAllClicked //a string of all values chosen
  };

//this allows button a and b to be shown for the first time
    onBegin = () => {
      stringAllClicked = "" //needs to be reset
      allClickedValuesList = [] //needs to be reset
      this.setState({ beginDiKey: true, buttonA: "conifer", buttonB: null, stringAll: stringAllClicked, noValues: true})
    };

    //happens any time a button is clicked besides "start" button
    buttonClickHandler = () => {
      console.log("buttonClickHandler is running.")
      var newStateA = {} //use to set new state
      var newStateB = {} //use to set new state
      for (var key in clickedList) { //keys in each list correspond with each other
        if (clickedList[key] === clickedValue) {
          newStateA = aList[key]
          newStateB = bList[key]
        }
      };
      this.setState({ buttonA: newStateA, buttonB: newStateB, allClickedValues: allClickedValuesList, stringAll: stringAllClicked, noValues: false })
  };

    setLists = (event) => { //updates global variables if buttonA or B is clicked
      clickedValue = event.target.value //set clicked value to a var..
      tempList = allClickedValuesList.concat(clickedValue) //add var to a temporary list..
      allClickedValuesList = tempList //update dynamic list
      stringAllClicked = allClickedValuesList.join(", ") //adds to a string
      this.buttonClickHandler(); //now that all of these are updated, we need to change the buttons
    };



    goBack = () => {
      allClickedValuesList.splice(-1, 1) //remove last value from allClickedValuesList
      stringAllClicked = allClickedValuesList.join(", ") //updates string
      console.log("goback: allClickedValues.length is " + allClickedValuesList.length)
      if (allClickedValuesList.length > 0) { //if there is something in the list of stored clicks..
          clickedValue = allClickedValuesList[allClickedValuesList.length - 1]
          this.buttonClickHandler(); //reassign clickedvalue to the last item in updated allClickedValuesList
        } else { //if the list of stored clicks list is empty, just start over..
          this.onBegin();
        }
    };


  render() {
    return (
      <div className="App">
        <p>dichotomous key</p>
        <header className="App-header">
          {this.state.beginDiKey ? null : <div>
            <button className="startButton" type="button" onClick={this.onBegin.bind(this)}>click here to start</button>
          </div>}
          <div>
            {this.state.beginDiKey ?
              <Buttons
              List={this.state.stringAll}
              buttonA={this.state.buttonA}
              buttonB={this.state.buttonB}
              change={this.setLists.bind(this)} /> : null}
          </div>
          {this.state.beginDiKey ? <div className="startOverGoBackBtns">startOverGoBackBtns
            {this.state.noValues ? null: <button className="startOverButton" type="button" onClick={this.onBegin.bind(this)}>Start over</button>}
            {this.state.noValues ? null: <button className="goBackButton" type="button" onClick={this.goBack.bind(this)}>Go back</button>}
          </div> : null}
        </header>
      </div>
    );
  }
}

export default App;

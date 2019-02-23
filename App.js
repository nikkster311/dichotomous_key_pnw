import React, { Component } from 'react';
import './App.css';
import "./buttonsCSS.css";
import { Buttons, buttonOptions, resultOptions } from "./buttonAB";
import Result from "./result";

//turns dictionary in buttonAB into three lists with corresponding keys
var clickedList = buttonOptions.map(x => x.clicked);
console.log(clickedList)
var aList = buttonOptions.map(x => x.a);
console.log(aList)
var bList = buttonOptions.map(x => x.b);
console.log(bList)

var clickedResultBtn = resultOptions.map(x => x.clicked);
console.log(clickedResultBtn)
var resultsList = resultOptions.map(x => x.result);
console.log(resultsList)

var allClickedValuesList = [] //list of all clicked values
var stringAllClicked = ""
var clickedValue = [] //this stores the value of the button clicked
var tempList = [] //because concatenate needs 2 lists, its confusing..

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonA: "conifer", //starting value
      buttonB: "broadleaf", //starting value
      running: false, //true when program is running
      allClickedValues: [], //list of all the values they chose previously
      noValues: true, //currently the user has chosen nothing
      stringAll: stringAllClicked, //a string of all values chosen
      resultFound: false, //true if result is chosen
      result: [], //displays result
      startScreen: true //true when its the start screen
    }

    this.onBegin.bind(this);
    this.resultHandler.bind(this);
    this.buttonClickHandler.bind(this);
    this.setLists.bind(this);
    this.goBack.bind(this);
  }

//this allows button a and b to be shown for the first time
    onBegin = () => {
      stringAllClicked = "" //needs to be reset
      allClickedValuesList = [] //needs to be reset
      this.setState({ startScreen: false, running: true, resultFound: false, stringAll: stringAllClicked, noValues: true})
    };

    resultHandler = () => {
      console.log("running resultHandler...")
      for (var key in clickedResultBtn) {
        console.log("testing key: " + key)
        console.log(key + " = key and clickedResultBtn[key] : " + clickedResultBtn[key] + " and clickedValue : " + clickedValue)
        if (clickedResultBtn[key] === clickedValue) {
          var result = resultsList[key]
          console.log("result found. key: " + key + " , clickedResultBtn[key] = " + clickedResultBtn[key] + " , result: " + result)
          this.setState({resultFound: true, result: result, running: false, noValues: true}, () => {
            console.log(this.state)
          })
        }
      }
    };

    //happens any time a button is clicked besides "start" button
    buttonClickHandler = () => {
      for (var key in clickedList) { //keys in each list correspond with each other
        if (clickedList[key].toLowerCase() === clickedValue.toLowerCase()) {
          var newStateA = aList[key] //if there are a and b options to that key, set them to those vars
          var newStateB = bList[key]
          console.log("key: " + key + ". newStateA & B are: " + newStateA + ", " + newStateB + " and clicked value is : " + clickedValue + " , " + clickedList[key])
          if (typeof newStateA !== "undefined" && typeof newStateB !== "undefined") {
            console.log("setting states a b and allClickedValues and stringAll")
            this.setState({ buttonA: newStateA, buttonB: newStateB, allClickedValues: allClickedValuesList, stringAll: stringAllClicked, noValues: false })
          } else { //else, we found our result
            console.log("running else")
            this.resultHandler();
            }
          }
        }
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
        {console.log(this.state)}
        <p>dichotomous key</p>
          {this.state.startScreen ? <div>
            <button className="startButton" type="button" onClick={this.onBegin.bind(this)}>click here to start</button>
          </div> : null}
          <div>
            {this.state.running ?
              <Buttons
                List={this.state.stringAll}
                buttonA={this.state.buttonA}
                buttonB={this.state.buttonB}
                change={this.setLists.bind(this)} /> : null}
            {this.state.resultFound ?
              <Result
                result={this.state.result}/> : null}
          </div>
          <div className="startOverGoBackBtns">
            {!this.state.noValues ?
              <button className="startOverButton" type="button" onClick={this.onBegin.bind(this)}>Start over</button> :
              null}
            {this.state.resultFound ?
              <button className="startOverButton" type="button" onClick={this.onBegin.bind(this)}>Start over</button> :
              null}
            {this.state.noValues ?
              null :
              <button className="goBackButton" type="button" onClick={this.goBack.bind(this)}>Go back</button>}
          </div>
      </div>
    );
  }
}

export default App;
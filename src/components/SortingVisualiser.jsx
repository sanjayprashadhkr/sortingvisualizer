import React from "react";
import { useState, useEffect } from "react";
import "../index.css";
import { MergeSortHelper } from "./MergeSort";
const DELAY_TIME = 10;
const NUMBER_OF_ELEMENTS = 100;
const MIN_ELEMENT = 10;
const MAX_ELEMENT = 100;
const ZOOM_HEIGHT = 5;
const PRIMARY_COLOR = "#66d9e8";
const SECONDARY_COLOR = "red";
const DELAY_IN_MS = 20;
export const SortingVisualiser = () => {
  const [array, setArray] = useState([]);
  //Return a random number between the specified range
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function mergeSort(arr) {
    const animations = MergeSortHelper(arr);
    console.log(animations);
    const arraybars = document.getElementsByClassName("array-bar");
    // arraybars[0].style.height = "60px";
    // arraybars[0].style.backgroundColor = "red";
    console.log(arraybars);
    let barOne, barTwo, barIndex, barLength;
    for (let i = 0; i < animations.length; i++) {
      if (animations[i][0] == "swap") {
        setTimeout(() => {
          //HIGHLIGHT THE ELEMENTS THAT NEEDS TO BE COMPARED AND REST THE HIGHLIGHT
          barOne = animations[i][1];
          barTwo = animations[i][2];
          console.log("BAR ONE:" + barOne + " BAR TWO:" + barTwo);
          arraybars[barOne].style.backgroundColor = SECONDARY_COLOR;
          arraybars[barTwo].style.backgroundColor = SECONDARY_COLOR;
        }, DELAY_IN_MS * i);
        //AFTER SOME AMOUNT OF TIME RESET THE COLOR
        setTimeout(() => {
          arraybars[barOne].style.backgroundColor = PRIMARY_COLOR;
          arraybars[barTwo].style.backgroundColor = PRIMARY_COLOR;
        }, DELAY_IN_MS * i + 1.5 * DELAY_IN_MS);
      } else {
        //CHANGE THE HEIGHT OF THE RESPECTIVE BARS
        setTimeout(() => {
          barIndex = animations[i][1];
          barLength = animations[i][2];
          console.log("BAR INDEX:" + barIndex + " BAR LENGTH:" + barLength);
          arraybars[barIndex].style.height = `${barLength * ZOOM_HEIGHT}px`;
        }, DELAY_IN_MS * i + 2 * DELAY_IN_MS);
      }
    }
  }
  function displayArray() {
    console.log(array);
    console.log("akjdshfg");
  }
  //This function generates a new set of random elements in the array & also initializes the isCompare array with false values as there
  //will be no comparisons that happens in the beginning
  function generateNumbers() {
    let temp = [];
    for (let i = 0; i < NUMBER_OF_ELEMENTS; i++) {
      temp.push(getRandomArbitrary(MIN_ELEMENT, MAX_ELEMENT));
    }
    //Updates the array state so that the component will rendered to reflected the changes in the UI
    setArray([...temp]);
  }

  //This useEffect generates a random setof array elements on page load
  useEffect(() => generateNumbers(), []);

  return (
    <div>
      <button className="generate-button" onClick={generateNumbers}>
        Reset Array
      </button>
      <button className="generate-button" onClick={displayArray}>
        Show array
      </button>
      <button
        className="sort-button"
        onClick={() => {
          mergeSort(array);
        }}
      >
        Merge Sort
      </button>
      <ul className="array-container">
        {array.map((number, index) => (
          <li
            className="array-bar"
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${number * ZOOM_HEIGHT}px`,
              width: "10px",
            }}
            key={index}
          ></li>
        ))}
      </ul>
    </div>
  );
};
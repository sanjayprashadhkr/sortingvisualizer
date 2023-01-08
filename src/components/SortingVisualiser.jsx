import React from "react";
import { useState, useEffect } from "react";
import "../index.css";
import { MergeSortHelper } from "./MergeSort";
import { BubbleSortHelper } from "./BubbleSort";
const DELAY_TIME = 10;
const NUMBER_OF_ELEMENTS = 100;
const MIN_ELEMENT = 10;
const MAX_ELEMENT = 100;
const ZOOM_HEIGHT = 5;
const PRIMARY_COLOR = "#66d9e8";
const SECONDARY_COLOR = "red";
const DELAY_IN_MS = 3;
let isSortingRunning = false;
export const SortingVisualiser = () => {
  const [array, setArray] = useState([]);
  //Returns a random number between the specified range
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  async function playSortingAnimation(eachsteps, duplicatearray) {
    const arraybars = document.getElementsByClassName("array-bar");
    // console.log(arraybars);
    let barOne, barTwo, barIndex, barLength;
    for (let i = 0; i < eachsteps.length; i++) {
      if (eachsteps[i][0] == "highlight") {
        //HIGHLIGHT THE ELEMENTS THAT NEEDS TO BE COMPARED AND GIVE SOME DELAY TO DISPLAY THE HIGHLIGHT COLOR
        // await new Promise((resolve) => setTimeout(resolve, 10));

        barOne = eachsteps[i][1];
        barTwo = eachsteps[i][2];

        arraybars[barOne].style.backgroundColor = SECONDARY_COLOR;
        arraybars[barTwo].style.backgroundColor = SECONDARY_COLOR;
        //AFTER SOME AMOUNT OF TIME RESET THE COLOR
        await new Promise((resolve) => setTimeout(resolve, DELAY_IN_MS));
        arraybars[barOne].style.backgroundColor = PRIMARY_COLOR;
        arraybars[barTwo].style.backgroundColor = PRIMARY_COLOR;
      } else {
        //CHANGE THE HEIGHT OF THE RESPECTIVE BARS
        await new Promise((resolve) => setTimeout(resolve, DELAY_IN_MS));
        barIndex = eachsteps[i][1];
        barLength = eachsteps[i][2];

        arraybars[barIndex].style.height = `${barLength * ZOOM_HEIGHT}px`;
      }
    }
    setArray(duplicatearray);
    isSortingRunning = false;
  }
  async function bubbleSort(arr) {
    if (isSortingRunning == false) {
      isSortingRunning = true;
      const [eachsteps, duplicatearray] = BubbleSortHelper(arr);
      playSortingAnimation(eachsteps, duplicatearray);
    }
  }

  async function mergeSort(arr) {
    if (isSortingRunning == false) {
      isSortingRunning = true;
      const [eachsteps, duplicatearray] = MergeSortHelper(arr);
      playSortingAnimation(eachsteps, duplicatearray);
    }
  }
  function displayArray() {
    console.log(array);
  }
  //This function generates a new set of random elements in the array & also initializes the isCompare array with false values as there
  //will be no comparisons that happens in the beginning
  function generateNumbers() {
    let temp = [];
    for (let i = 0; i < NUMBER_OF_ELEMENTS; i++) {
      temp.push(getRandomArbitrary(MIN_ELEMENT, MAX_ELEMENT));
    }
    //Updates the array state so that the component will be rendered to reflected the changes in the UI
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
      <button
        className="sort-button"
        onClick={() => {
          bubbleSort(array);
        }}
      >
        BubbleSort
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

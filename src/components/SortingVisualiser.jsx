import React from "react";
import { useState, useEffect } from "react";
import "../index.css";
import { MergeSortHelper } from "./MergeSort";
import { BubbleSortHelper } from "./BubbleSort";
import { SelectionSortHelper } from "./SelectionSort";
import { InsertionSortHelper } from "./InsertionSort";
import { Dropdown } from "./Dropdown";

const size = 20;
const MIN_ELEMENT = 10;
const MAX_ELEMENT = 100;
const ZOOM_HEIGHT = 5;
const PRIMARY_COLOR = "#c1c1c1";
const SECONDARY_COLOR = "red";
const DELAY_IN_MS = 20;
let isSortingRunning = false;

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export const SortingVisualiser = () => {
  const [selectedSortingAlgo, setSelectedSortingAlgo] = useState("Merge Sort");
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(20);
  const [scalingFactor, setScalingFactor] = useState(1.5);
  const [currentWidth, setCurrentWidth] = useState(20);

  //Returns a random number between the specified range

  async function playSortingAnimation(eachsteps, duplicatearray) {
    //Whener I use setArray & set the array the array bars gets rerendered
    const arraybars = document.getElementsByClassName("array-bar");
    // console.log(arraybars);
    let barOne, barTwo, barIndex, barLength;
    for (let i = 0; i < eachsteps.length; i++) {
      if (eachsteps[i][0] === "highlight") {
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
        //ADD A PAUSE AFTER SWAP???
        //IN MERGE SORT TWO CONSECUTIVFE PUSHES CONTRIBUTES TO A SWAP
        barIndex = eachsteps[i][1];
        barLength = eachsteps[i][2];
        arraybars[barIndex].style.height = `${barLength * ZOOM_HEIGHT}px`;
        //await new Promise((resolve) => setTimeout(resolve, DELAY_IN_MS));
      }
    }
    setArray(duplicatearray);
    isSortingRunning = false;
  }
  async function bubbleSort(arr) {
    if (isSortingRunning === false) {
      isSortingRunning = true;
      const [eachsteps, duplicatearray] = BubbleSortHelper(arr);
      console.log(eachsteps);
      playSortingAnimation(eachsteps, duplicatearray);
    }
  }

  async function mergeSort(arr) {
    if (isSortingRunning === false) {
      isSortingRunning = true;
      const [eachsteps, duplicatearray] = MergeSortHelper(arr);
      playSortingAnimation(eachsteps, duplicatearray);
    }
  }
  async function SelectionSort(arr) {
    if (isSortingRunning === false) {
      isSortingRunning = true;
      const [eachsteps, duplicatearray] = SelectionSortHelper(arr);
      playSortingAnimation(eachsteps, duplicatearray);
    }
  }
  async function InsertionSort(arr) {
    if (isSortingRunning === false) {
      isSortingRunning = true;
      const [eachsteps, duplicatearray] = InsertionSortHelper(arr);
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
    for (let i = 0; i < size; i++) {
      temp.push(getRandomArbitrary(MIN_ELEMENT, MAX_ELEMENT));
    }
    //Updates the array state so that the component will be rendered to reflected the changes in the UI
    setArray([...temp]);
    // console.log(array);
  }

  //This useEffect generates a random setof array elements on page load
  useEffect(() => generateNumbers(), []);
  useEffect(() => {
    generateNumbers();
  }, [size]);

  function startSorting() {
    if (selectedSortingAlgo === "Merge Sort") {
      mergeSort(array);
    } else if (selectedSortingAlgo === "Bubble Sort") {
      bubbleSort(array);
    } else if (selectedSortingAlgo === "Selection Sort") {
      SelectionSort(array);
    } else if (selectedSortingAlgo === "Insertion Sort") {
      InsertionSort(array);
    }
  }
  return (
    <>
      <Dropdown
        setSelectedSortingAlgo={setSelectedSortingAlgo}
        selectedSortingAlgo={selectedSortingAlgo}
      />
      <label for="size">Size:</label>
      <input
        type="range"
        id="size"
        name="size"
        min="10"
        max="100"
        step="1"
        value={size}
        onChange={(e) => {
          //If the curent number of elements is greater than the new size then increase the scaling factor
          setCurrentWidth(
            size > 70
              ? 10
              : size > 50
              ? 15
              : size > 40
              ? 20
              : size > 25
              ? 25
              : size > 20
              ? 35
              : size > 15
              ? 40
              : 45
          );

          setSize(e.target.value);
          console.log(size);
        }}
      ></input>
      <button onClick={startSorting}>Start</button>
      <button className="generate-button" onClick={generateNumbers}>
        Reset Array
      </button>
      <div className="container">
        <ul className="bar-container">
          {array.map((number, index) => (
            <li
              className="array-bar"
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${number * ZOOM_HEIGHT}px`,
                width: `${currentWidth}px`,
                borderBottomLeftRadius: `5px`,
                borderBottomRightRadius: `5px`,
              }}
              key={index}
            ></li>
          ))}
        </ul>
      </div>
    </>
  );
};

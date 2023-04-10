import React from "react";
import { useEffect } from "react";

export const Dropdown = ({ selectedSortingAlgo, setSelectedSortingAlgo }) => {
  function handleChange(e) {
    setSelectedSortingAlgo(e.target.value);
  }

  useEffect(() => {
    console.log(selectedSortingAlgo);
  }, [selectedSortingAlgo]);
  return (
    <select onChange={handleChange}>
      <option value="Merge Sort">Merge Sort</option>
      <option value="Bubble Sort">Bubble Sort</option>
      <option value="Insertion Sort">Insertion Sort</option>
      <option value="Selection Sort">Selection Sort</option>
    </select>
  );
};

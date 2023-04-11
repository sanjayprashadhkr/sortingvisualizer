import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";

import "./dropdown.css";

export const Dropdown = ({ selectedSortingAlgo, setSelectedSortingAlgo }) => {
  const [toggleSelect, setToggleSelect] = useState(false);
  // const [text, setText] = useState("Merge Sort");
  const [value, setValue] = useState("Merge Sort");
  const options = [
    { value: "Merge Sort", label: "Merge Sort" },
    { value: "Bubble Sort", label: "Bubble Sort" },
    { value: "Insertion Sort", label: "Insertion sort" },
  ];

  function handleChange(e) {
    setSelectedSortingAlgo(e.target.value);
  }

  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    colorStyles.option.backgroundColor = "blue";
  };

  useEffect(() => {
    console.log(selectedSortingAlgo);
  }, [selectedSortingAlgo]);

  const colorStyles = {
    control: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: "rgb(42,47,60)",
      color: "white",
      border: "none",
      boxShadow: isFocused ? "0 0 12px -7px #413fff" : "",
      padding: "10px 32px",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "white",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "white",
    }),
    option: (styles, { isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#23242b" : "rgb(42,47,60)",
        borderRadius: isFocused ? "5px" : "0px",
        padding: isFocused ? "18px 32px" : "18px 32px",
        ":active": {
          backgroundColor: "#272727",
        },

        color: "white",
        margin: "20px 0",
      };
    },
    menu: (styles) => ({
      ...styles,
      backgroundColor: "rgb(42,47,60)",
      padding: "0px 16px",
    }),
  };

  return (
    <div style={{ margin: 20, width: 250 }}>
      <Select
        options={options}
        defaultValue={value}
        placeholder="Select Sorting"
        onChange={(selectedOption) => {
          setSelectedSortingAlgo(selectedOption.value);
        }}
        styles={{
          control: colorStyles.control,
          placeholder: colorStyles.placeholder,
          singleValue: colorStyles.singleValue,
          option: colorStyles.option,
          menu: colorStyles.menu,
        }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

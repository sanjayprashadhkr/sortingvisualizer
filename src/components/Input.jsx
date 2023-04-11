import React from "react";

export const Input = ({ size, setCurrentWidth, setSize }) => {
  return (
    <div>
      {" "}
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
    </div>
  );
};

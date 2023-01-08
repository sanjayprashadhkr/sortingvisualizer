//Create a helper function that makes a copy of the original array which return the sorted array
let duplicatearray;
let eachsteps;
export function BubbleSortHelper(originalarray) {
  eachsteps = [];
  duplicatearray = originalarray.slice();
  // console.log("BEFORE SORTING");
  // console.log(duplicatearray);

  for (let i = 0; i < duplicatearray.length - 1; i++) {
    for (let j = 0; j < duplicatearray.length - i - 1; j++) {
      eachsteps.push(["highlight", j, j + 1]);
      if (duplicatearray[j] > duplicatearray[j + 1]) {
        let temp = duplicatearray[j];
        duplicatearray[j] = duplicatearray[j + 1];
        duplicatearray[j + 1] = temp;
        eachsteps.push(["push", j, duplicatearray[j]]);
        eachsteps.push(["push", j + 1, duplicatearray[j + 1]]);
      }
    }
    //console.log("ITERATION:" + i + " " + duplicatearray);
  }
  // console.log("AFTER SORTING");
  // console.log(duplicatearray);
  //TESTING THE SORTING ALGORITHM
  /*
  const testarray = originalarray.slice();
  testarray.sort(function (a, b) {
    return a - b;
  });

  let flag = 0;
  for (let i = 0; i < duplicatearray.length; i++) {
    if (duplicatearray[i] !== testarray[i]) {
      console.log("YOUR SORTING IS WRONG");
      flag = 1;
    }
  }
  if (flag === 0) console.log("YOUR SORTING IS CORRECT!!!!");*/

  //THIS IS THE SORTED ARRAY
  //console.log(duplicatearray);
  return [eachsteps, duplicatearray];
}

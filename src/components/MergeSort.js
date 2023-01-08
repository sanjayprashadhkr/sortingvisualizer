//Create a helper function that makes a copy of the original array which return the sorted array
let duplicatearray;
let eachsteps;
export function MergeSortHelper(originalarray) {
  eachsteps = [];
  duplicatearray = originalarray.slice();
  mergeSort(duplicatearray, 0, duplicatearray.length - 1);
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
  if (flag === 0) console.log("YOUR SORTING IS CORRECT!!!!");
  */
  //THIS IS THE SORTED ARRAY
  // console.log(duplicatearray);
  return [eachsteps, duplicatearray];
}

function mergeSort(arr, startIndex, endIndex) {
  //Why startIndex===endIndex ???
  if (startIndex === endIndex) {
    return;
  }
  let middleIndex = Math.floor((startIndex + endIndex) / 2);
  mergeSort(arr, startIndex, middleIndex);
  mergeSort(arr, middleIndex + 1, endIndex);
  merge(arr, startIndex, middleIndex, endIndex);
}

function merge(duplicatearray, startIndex, middleIndex, endIndex) {
  let mergedArray = [];
  let i = startIndex,
    j = middleIndex + 1,
    k = startIndex;
  while (i <= middleIndex && j <= endIndex) {
    if (duplicatearray[i] < duplicatearray[j]) {
      //push the element =s that we are going to compare in eachsteps array
      //Since i and j are the actual indexes in the array push them in the eachsteps array
      eachsteps.push(["highlight", i, j]);
      mergedArray.push(duplicatearray[i]);
      //Push the element in the eachsteps array as this is the smaller as per the comparison
      eachsteps.push(["push", k, duplicatearray[i]]);
      k++;
      //Update the copy of the original array
      i++;
    } else {
      //Since i and j are the actual indexes in the array that we are going to compare push them in the eachsteps array
      eachsteps.push(["highlight", i, j]);
      mergedArray.push(duplicatearray[j]);
      eachsteps.push(["push", k, duplicatearray[j]]);
      k++;
      j++;
    }
  }
  while (i <= middleIndex) {
    mergedArray.push(duplicatearray[i]);
    eachsteps.push(["push", k, duplicatearray[i]]);
    i++;
    k++;
  }
  while (j <= endIndex) {
    mergedArray.push(duplicatearray[j]);
    eachsteps.push(["push", k, duplicatearray[j]]);
    j++;
    k++;
  }
  //Copy the values from merged array to auxillary array
  k = startIndex;
  for (let i = 0; i < mergedArray.length; i++) {
    duplicatearray[k] = mergedArray[i];
    k++;
  }
  // console.log(duplicatearray);
}

//Create a helper function that makes a copy of the original array which return the sorted array
let auxillaryarray;
let animations;
export function MergeSortHelper(originalarray) {
  animations = [];
  auxillaryarray = originalarray.slice();
  mergeSort(auxillaryarray, 0, auxillaryarray.length - 1);
  //TESTING THE SORTING ALGORITHM
  /*
  const testarray = originalarray.slice();
  testarray.sort(function (a, b) {
    return a - b;
  });


  let flag = 0;
  for (let i = 0; i < auxillaryarray.length; i++) {
    if (auxillaryarray[i] !== testarray[i]) {
      console.log("YOUR SORTING IS WRONG");
      flag = 1;
    }
  }
  if (flag === 0) console.log("YOUR SORTING IS CORRECT!!!!");
  */
  //THIS IS THE SORTED ARRAY
  // console.log(auxillaryarray);
  return animations;
}

function mergeSort(arr, startIndex, endIndex) {
  if (startIndex === endIndex) {
    return;
  }
  let middleIndex = Math.floor((startIndex + endIndex) / 2);
  mergeSort(arr, startIndex, middleIndex);
  mergeSort(arr, middleIndex + 1, endIndex);
  merge(arr, startIndex, middleIndex, endIndex);
}

function merge(auxillaryarray, startIndex, middleIndex, endIndex) {
  let mergedArray = [];
  let i = startIndex,
    j = middleIndex + 1,
    k = startIndex;
  while (i <= middleIndex && j <= endIndex) {
    if (auxillaryarray[i] < auxillaryarray[j]) {
      //push the element =s that we are going to compare in animations array
      //Since i and j are the actual indexes in the array push them in the animations array
      animations.push(["swap", i, j]);
      mergedArray.push(auxillaryarray[i]);
      //Push the element in the animations array as this is the smaller as per the comparison
      animations.push(["change", k, auxillaryarray[i]]);
      k++;
      //Update the copy of the original array
      i++;
    } else {
      //Since i and j are the actual indexes in the array that we are going to compare push them in the animations array
      animations.push(["swap", i, j]);
      mergedArray.push(auxillaryarray[j]);
      animations.push(["change", k, auxillaryarray[j]]);
      k++;
      j++;
    }
  }
  while (i <= middleIndex) {
    mergedArray.push(auxillaryarray[i]);
    animations.push(["change", k, auxillaryarray[i]]);
    i++;
    k++;
  }
  while (j <= endIndex) {
    mergedArray.push(auxillaryarray[j]);
    animations.push(["change", k, auxillaryarray[j]]);
    j++;
    k++;
  }
  //Copy the values from merged array to auxillary array
  k = startIndex;
  for (let i = 0; i < mergedArray.length; i++) {
    auxillaryarray[k] = mergedArray[i];
    k++;
  }
  // console.log(auxillaryarray);
}

let duplicatearray;
let eachsteps;
export function SelectionSortHelper(originalarray) {
  eachsteps = [];
  duplicatearray = originalarray.slice();
  // console.log("BEFORE SORTING");
  // console.log(duplicatearray);
  //This for loop will run for n-1 times as we have to  find the first,second third.....n-1th largest number in each step
  //We dont have to find nth largest number as by the time we find the n-1th largest number and placed that number in the correct index the only remaining
  //element will the nth largest number
  let maxindex; //Maximum element's index
  let n = duplicatearray.length;
  for (let i = 0; i < duplicatearray.length - 1; i++) {
    maxindex = 0;

    for (let j = 1; j < n; j++) {
      if (duplicatearray[maxindex] < duplicatearray[j]) {
        eachsteps.push(["highlight", maxindex, maxindex]);
        maxindex = j;
      }
    }
    eachsteps.push(["highlight", maxindex, n - 1]);
    eachsteps.push(["push", n - 1, duplicatearray[maxindex]]);
    eachsteps.push(["push", maxindex, duplicatearray[n - 1]]);
    let temp = duplicatearray[maxindex];
    duplicatearray[maxindex] = duplicatearray[n - 1];
    duplicatearray[n - 1] = temp;
    n = n - 1;
  }
  console.log(duplicatearray);

  return [eachsteps, duplicatearray];
}

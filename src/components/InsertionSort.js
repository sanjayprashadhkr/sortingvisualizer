let duplicatearray;
let eachsteps;
export function InsertionSortHelper(originalarray) {
  eachsteps = [];
  duplicatearray = originalarray.slice();
  let i, j;
  let currentSwapElement;
  for (i = 1; i < duplicatearray.length; i++) {
    for (j = 0; j < i; j++) {
      eachsteps.push(["highlight", j, i]);
      if (duplicatearray[j] > duplicatearray[i]) break;
    }
    let k = i;
    currentSwapElement = duplicatearray[i];
    while (k > j) {
      eachsteps.push(["highlight", k, k - 1]);
      eachsteps.push(["push", k, duplicatearray[k - 1]]);
      duplicatearray[k] = duplicatearray[k - 1];
      k = k - 1;
    }
    eachsteps.push(["push", j, currentSwapElement]);
    duplicatearray[j] = currentSwapElement;
  }
  console.log(duplicatearray);
  return [eachsteps, duplicatearray];
}

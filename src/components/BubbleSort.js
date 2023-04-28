let duplicatearray;
let eachsteps;
export function BubbleSortHelper(originalarray) {
  eachsteps = [];
  duplicatearray = originalarray.slice();

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
  }
  return [eachsteps, duplicatearray];
}

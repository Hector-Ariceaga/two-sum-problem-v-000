let bruteForceTwoSum = (a, sum) => {
  let twoSums = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if ([i] != [j]) {
        if (sum === (a[i] + a[j]) && !twoSums.includes([a[i], a[j]])) {
         twoSums.push([a[i], a[j]])
        }
      }
    }
  } return twoSums
}

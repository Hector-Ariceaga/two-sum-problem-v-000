let bruteForceTwoSum = (a, sum) => {
  let twoSums = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (sum === (a[i] + a[j])) {
        if (twoSums[twoSums.length - 1] != [a[i] + a[j]] || twoSums[twoSums.length - 1] != [a[j] + a[i]]) {
          twoSums.push([a[i], a[j]])
        }
      }
    }
  } return twoSums
}

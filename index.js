let bruteForceTwoSum = (sum, a) => {
  let twoSums = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; i < a.length; j++) {
      if (a[i] != a[j]) {
        if (sum === a[i] + a[j] && twoSums[twoSums.length - 1] != [a[i], a[j]]) {
          return twoSums.push([a[i], a[j]])
        }
      }
    }
  } return twoSums
}

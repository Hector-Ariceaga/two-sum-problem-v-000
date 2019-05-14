let bruteForceTwoSum = (sum, a) => {
  let twoSums = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; i < a.length; j++) {
      if (sum === a[i] + a[j]) {
        twoSums.push([a[i], a[j]])
      }
    }
  } return twoSums
}

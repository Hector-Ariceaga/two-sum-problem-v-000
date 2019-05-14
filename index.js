let bruteForceTwoSum = (a, sum) => {
  let twoSums = [];
  if (a.length !== 0) {
    for (let i = 0; i < a.length; i++) {
      for (let j = i +1 ; j < a.length; j++) {
        if (sum - a[i] === a[j]) {
          twoSums.push([a[i], a[j]])
        }
      }
    } return twoSums
  }
}


let binarySearchTwoSum = (a, sum) => {
  
}
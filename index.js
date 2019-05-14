let bruteForceTwoSum = (a, sum) => {
  let twoSums = [];
  if (a.length !== 0) {
    for (let i = 0; i < a.length; i++) {
      for (let j = i +1 ; j < a.length; j++) {
        if (sum - a[i] === a[j]) {
          twoSums.push([a[i], a[j]])
        }
      }
    }
  } else {
    return "Array is empty"
  }

  if (twoSums.length > 0) {
    return twoSums
  } else {
    return "There are no two sum solutions."
  }
}


let binarySearchTwoSum = (a, sum) => {
  mergeSort(a)
}

let mergeSort = array => {
  if (array.lenth <= 1) {
    return array
  }

  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

let merge = (left, right) => {
  let sorted = [];
  let min;
  while(left.length !=0 && right.length != 0){
    let min = findMinAndRemove(left, right)
    sorted.push(min)
  }
  return sorted.concat(left).concat(right)
}

let findMinAndRemove = (left, right) => {
  let leftMin = left[0];
  let rightMin = right[0];

  if(leftMin < rightMin) {
    left.shift()
  } else {
    right.shift()
  }
}

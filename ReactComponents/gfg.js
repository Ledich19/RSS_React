function getLengthOfMissingArray(arrayOfArrays) {
  if(!arrayOfArrays || arrayOfArrays.length === 0){
    return 0
  }
  let arr = []
  for(let i = 0; i < arrayOfArrays.length; i++){
    if ( !arrayOfArrays[i] || arrayOfArrays[i].length === 0) {
      return 0
    } else arr.push(arrayOfArrays[i].length)
  }
  let sort = arr.sort((a , b) =>  a - b)
  for(let i = 0; i < sort.length; i++){
    if(sort[i] + 1 !== sort[i + 1]){
      return sort[i] + 1
    }
  }
}
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]));
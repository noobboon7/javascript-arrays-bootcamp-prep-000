var chocolateBars = ["snickers",
"hundred grand",
"kitkat",
"skittles"
  ];
function addElementToBeginningOfArray(array, element){
  return array.unshift();
}
  
function destructivelyAddElementToBeginningOfArray(array, element){
  return array.shift(element);
}

function addElementToEndOfArray(array, element){
  return array.push;
}
function destructivelyAddElementToEndOfArray(array,element) {
 return addElementToEndOfArray.push; 
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length -1);
}

import {arrayList} from './List.js';
var arr1 = [2,9,3,1,5,7,6,8];
var shortarray = [2,9,3,1];

//console.log(arrayList);
function BubbleSort(arrayList){
  let newArrayList = [...arrayList];
  for(let i=0;i<newArrayList.length-1;i++){
    for(let j = 0;j < newArrayList.length-i-1;j++){
      if(newArrayList[j] > newArrayList[j+1]){
        let temp = newArrayList[j];
        newArrayList[j] = newArrayList[j+1];
        newArrayList[j+1] = temp;
  
      }
    }
  }
  return newArrayList;

}




//Bubble short
// var startTime = performance.now()
// console.log(BubbleSort(arrayList));
// var endTime = performance.now()
// console.log(`Bubble Sort took ${endTime - startTime} milliseconds`)

var startTime = performance.now()
console.log(BubbleSort(shortarray));
var endTime = performance.now()
console.log(`Bubble Sort took ${endTime - startTime} milliseconds`)

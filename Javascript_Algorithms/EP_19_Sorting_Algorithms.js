// const array = [8, 6, 1, 4, 3, 9, 5, 7];
const n = 3
function towerOfHanoi(Disk, fromRod, toRod, usingRod){
  if(Disk===1){
    console.log(("Move disk 1 from : " + fromRod + " to " + toRod));
    return 
  }
  towerOfHanoi(Disk-1, fromRod, usingRod, toRod)
  console.log("Move disk "+ Disk + " from : " + fromRod + " to " + toRod);
  towerOfHanoi(Disk-1, usingRod, toRod, fromRod)
}
towerOfHanoi(n, 'A', 'C', 'B');


// function Climb(Stairs){
//   const NOW = [1,2]
//   for(let i = 2 ; i<=Stairs;i++){
//       NOW[i] = NOW[i-1] + NOW[i-2]
//     }
//     return NOW[Stairs-1]
// }
// console.log(Climb(n));




// const A = [1,2,5,9]
// const B = [3,4]
// const Result = []
// function cartesianProduct(arr,arr1){
//   for (let i = 0 ; i<arr.length;i++){
//     for(let j = 0;j<arr1.length;j++){
//       Result.push([arr[i],arr1[j]])
//     }   
//    }
//     return Result
//   } 
//   console.log(cartesianProduct(A,B));




// function mergeSort(arr){
//   if(arr.length < 2){
//     return arr
//   }
//   console.log("arr==>"+arr);
//   const mid = Math.floor(arr.length/2)
//   console.log("Mid=====>" + mid);
//   const leftArr = arr.slice(0,mid)
//   console.log("Left===>"+ leftArr);
//   const rightArr = arr.slice(mid)
//   console.log("Right=====>"+rightArr);
//   return merge(mergeSort(leftArr),mergeSort(rightArr))

// }

// function merge(leftArr, rightArr){
//   const sortedArray = []
//   while(leftArr.length && rightArr.length){
//     if(leftArr[0] <= rightArr[0]){
//       sortedArray.push(leftArr.shift())
//       console.log("Sorted Array Left =====>" + sortedArray);
//     }
//     else{
//       sortedArray.push(rightArr.shift())
//       console.log("Sorted Array Right =====>" + sortedArray);

//     }
//   }
//   console.log("sorted Array =====>"+ sortedArray);
//   return [...sortedArray, ...leftArr, ...rightArr]

// }
// console.log(mergeSort(array));








  // function quicksort(arr) {
  //   if (arr.length < 2) {
  //     return arr;
  //   }
  //   let pivot = arr[arr.length - 1];
  //   let leftArr= [];
  //   let rightArr = [];
  //   // leftindex  < pivot
  //   // rightindex > pivot
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     if (arr[i] < pivot) {
  //       leftArr.push(arr[i]);
  //     } else {
  //       rightArr.push(arr[i]);
  //     }
  //   }
  //   return [...quicksort(leftArr), pivot, ...quicksort(rightArr)];
  // }
  // console.log(quicksort(array));
  
// function insertionSort() {
//   for (let i = 1; i < arr.length; i++) {
//     let Curr = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > Curr) {
//     //   console.log("curr ==>", Curr);
//     //   console.log("arr ==>", arr[i]);
//     console.log("==============> arr[i]", arr[i],"curr ==>", Curr, "arr[j + 1] ===>",arr[j + 1])
// console.log("Here");
//       arr[j + 1] = arr[j];
//       console.log("<=======arr====>", arr);
//       j = j - 1;
// console.log("End Here");

//     }
//     arr[j + 1] = Curr;
//     console.log("Arr", arr)
//   }
//   return arr;
// }

// console.log(insertionSort());

// function BubbleSort(){
//     for (let i=0; i<arr.length; i++){

//     for(let j=0 ; j<arr.length-1; j++)
//         {
//             if(arr[j] > arr[j+1]){
//                 temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
// }
// return arr
// }

// console.log(BubbleSort());

const arr = [1,2,3,4,5,6,7,8,9]

//Binary Recursive

let Target = 3
let first = 0
let last = arr.length-1



function RecBinary(){
    return Search(arr,Target,first,last)
}

function Search(arr,Target,first,last){
       while(first<=last){
        let pivot = Math.floor((first + last)/2)
        if(Target === arr[pivot]){
            return ("Item found at index " + pivot)
        }
        if(Target < arr[pivot]){
            return Search(arr,Target,first,pivot - 1)
        }
        else{
            return Search(arr,Target,pivot + 1,last)
                }
    }
    return ("Item not found")
}

const output = RecBinary()
console.log(output);
//Binary search  ---> O(Logn)


// function BinarySearch() {

//     while(first<=last){
//         let pivot = Math.floor((first + last)/2)
//         if(Target === arr[pivot]){
//             return pivot
//         }
//         if(Target < arr[pivot]){
//             last = pivot - 1
//         }
//         else{
//             first = pivot + 1
//         }
//     }
//     return -1
// }
// output = BinarySearch(arr,Target);
// console.log(output);








//Linear Search 

// function linearSearch(){
//     for (let i = 0;i<arr.length;i++){
//         if (Target == arr[i]){
//             return ("Item found at index " +i);
//         }
//     }
//     return ("Item not found")
// }
// output = linearSearch(arr)
// console.log(output);
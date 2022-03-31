//Counting sort is an algorithm that do not use comparison to sort, but use simple math
// Counting sort is a sorting algorithm that sorts the element of an array by counting the number of occurences of each unique element in the array
// The count is stored in an auxillary array and the sorting is done by mapping the count as an index of the auxillary array,  write the algorithm

let a = [2,1,1,0,2,5,4,0,2,8,7,7,9,2,0,1,9];

//get max and min values in array
let max = Math.max(...a);
let min = Math.min(...a);

function countingSort (arr) {
    //declare aux array
    const count = [];
    //loop through the min and max
    for(let i = min; i <= max; i++) {
        count[i] = 0;
    }

    for (let i = 0; i < arr.length; i++){
        count[arr[i]]++;
    }

    const sortedArr = [];
    for (let i = min; i <= max; i++){
        while (count[i] > 0) {
            
            sortedArr.push(i);
            count[i]--;
        }
    }
    return sortedArr;
}

console.log(countingSort(a));
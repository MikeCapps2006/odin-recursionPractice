//This is a merge sort project for The Odin Project

function mergeSort(arr){
    //base case - if the array only has one element, return the one element sorted array
    if (arr.length < 2) return arr;

    //split the 'arr' into 2 different subarrays
    let leftSide = [];
    let rightSide = [];
    let middle = Math.floor(arr.length/2);
    leftSide = arr.slice(0, middle);
    rightSide = arr.slice(middle);

    //recursively sort the 2 halves
    let sortedLeft = mergeSort(leftSide);
    let sortedRight = mergeSort(rightSide);

    //returns the sorted array merged together
    return merge(sortedLeft, sortedRight);
}

//this is a helper function to merge the sorted arrays
function merge(left, right) {
    //create new array for the final sorted array
    const mergedArr = [];

    //iterate over the 2 sorted arrays, comparing the eleemnts at each index
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length){
        if (left[i] <= right[j]) {
            mergedArr.push(left[i]);
            i++;
        } else {
            mergedArr.push(right[j]);
            j++
        }
    }

    //Add additional elements from the left side to the merged array
    while (i < left.length){
        mergedArr.push(left[i]);
        i++;
    }

    //Add additional elements from the right side of the merged array
    while (j < right.length){
        mergedArr.push(right[j]);
        j++;
    }

    //returns the sorted merged array
    return mergedArr;
}

let unsortedArr = [4, 2, 1];
console.log(mergeSort(unsortedArr));
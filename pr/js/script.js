//sum of 2d array

const sum2DArrays = (arr1, arr2) => {

    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        let row = [];
        for (let j = 0; j < arr1[0].length; j++) {
            row.push(arr1[i][j] + arr2[i][j]);
        }
        result.push(row);
    }

    return result;
}

// sum of boundry
const sumBoundaryElements = (arr) => {
    let sum = 0;
    const rows = arr.length;
    const cols = arr[0].length;
    //  top row    
    for (let i = 0; i < cols; i++) {
        sum += arr[0][i];
    }
    //  bottom row
    for (let i = 0; i < cols; i++) {
        sum += arr[rows - 1][i];
    }
    // left column 
    for (let i = 1; i < rows - 1; i++) {
        sum += arr[i][0];
    }
    // right column
    for (let i = 1; i < rows - 1; i++) {
        sum += arr[i][cols - 1];
    }

    return sum;
}

// merge array in row wise
function mergeArraysRowWise(arr1, arr2) {
    let mergedArray = arr1.slice(); 
    
    for (let row of arr2) {
        mergedArray.push(row);
    }
    
    return mergedArray;
}
// find min and max
function findMaxAndMin(arr) {
    let max = arr[0][0];
    let min = arr[0][0];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
            if (arr[i][j] < min) {
                min = arr[i][j];
            }
        }
    }

    return { max, min };
}



// merged array
let arr1 = [[1, 2], [3, 4]];
let arr2 = [[5, 6], [7, 8]];

let mergedArray = mergeArraysRowWise(arr1, arr2);
console.log("marged array   ",mergedArray);

let array = [
    [1, 2, 3,4],
    [1, 1, 1, 5],
    [1, 1, 7, 1]
];

// find max and min
let { max, min } = findMaxAndMin(array);
console.log("Maximum value:", max); 
console.log("Minimum value:", min);

// boudry ele sum

let boundarySum = sumBoundaryElements(array);
console.log("sum of boundry element",boundarySum);

// sum of 2d arra
let array1 = [[1, 2, 3], [4, 5, 6]];
let array2 = [[7, 8, 9], [10, 11, 12]];

let resultArray = sum2DArrays(array1, array2);
console.log("sum of 2 d arrays",resultArray);

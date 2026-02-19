// Question - One 
var arr = [23, -5, 0, 87, 23, -12, 45, 9, 0, 31, -5, 76, 14]
function fun_1(value, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (value == arr[i]) return true;
    }
    return false;
}
// console.log(fun_1(1,arr))  // Linear Search

function fun_2(target, arr) {
    let low = 0;
    let high = arr.length;
    let mid = Math.floor((low + high) / 2);


    while (mid > low) {
        if (target == arr[mid]) return arr[mid]
        else if (arr[mid] < target) {
            low = mid + 1
        }
        else {
            high = mid - 1
        }
    }
    return -1
}
// console.log(fun_2(23,arr.sort()))

function findMinValue(arr) {
    if (arr.length === 0) {
        return "Array is Empty";
    }
    let min = [0];
    let max = [0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        } else {
            min = arr[i]
        }
    }
    return { minValue: min, maxValue: max }
}
// console.log(findMinValue(arr))


function findTheDuplicateValue(arr) {
    let result = new Set();
    let ans = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (!result.has(arr[i])) {
            result.add(arr[i]);
        } else ans.add(arr[i])
    }
    return [...ans];
}
// console.log(findTheDuplicateValue(["a", "a", "a", "a"]))


// arr=[10,5,1,448,63,14,25,2,3,81,95]
function secondLargestAndDuplicate(arr) {

    let largest = -Infinity
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] != secondLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}
// console.log(secondLargestAndDuplicate(arr))


function QuickSortAlog(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[(Math.floor(arr.length / 2))]
    let left = [];
    let right = [];
    let eqaul = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > pivot) right.push(arr[i]);
        else if (arr[i] < pivot) left.push(arr[i])
        else eqaul.push(arr[i])
    }
    return [...QuickSortAlog(left), ...eqaul, ...QuickSortAlog(right)]
}

function findKthElement(arr, k) {
    let ar = QuickSortAlog(arr)
    // console.log(arr);
    let smallestElement = ar[k - 1];
    let largestElement = ar[ar.length - k];

    return { smallestElement, largestElement }

}

// console.log(findKthElement([3, 4, 7, 10, 15, 20], 3))


function firstDuplicateElem(arr) {
    let duplicates = new Set();
    let el = -1
    for (let i = 0; i < arr.length; i++) {
        if (!duplicates.has(arr[i])) {
            duplicates.add(arr[i])
        }
        else {
            el = arr[i]
            break;
        }
    }
    return el;
}
// console.log(firstDuplicateElem([23, -1, 1, 0, 3, 2, 31, 1, 2, -5, 76, 14]))

// [2,3,5,2,3,5,3,2,1,3,3]

function findOneNotDuplicate(arr) {
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1
    }

    for (const key in obj) {
        if (obj[key] === 1) {
            // console.log(key)
        }
    }
    // console.log(obj)
}
findOneNotDuplicate([2, 3, 5, 2, 3, 7, 5, 1, 3, 2, 1, 3, 3])


function duplicateElemBetweenTWoArray(arr1, arr2) {
    let obj = {}
    let duplicates = []

    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = obj[arr1[i]] ? obj[arr1[i]] + 1 : 1
    }
    for (let i = 0; i < arr2.length; i++) {
        obj[arr2[i]] = obj[arr2[i]] ? obj[arr2[i]] + 1 : 1
    }
    for (const key in obj) {
        // console.log(key)
        if (obj[key] >= 2) {
            duplicates.push(key)
        }
    }
    return duplicates
}
// console.log(duplicateElemBetweenTWoArray(["1", "3", "4", "2"], ["1", "2", '5', '3']))


function findThethreeDuplicatesElements(arr1, arr2, arr3) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let result = [];
    for (const value of arr3) {
        if (set1.has(value) && set2.has(value)) {
            result.push(value)
        }
    }
    return result;
}
// console.log(findThethreeDuplicatesElements([1, 2, 3, 6, 4, 5], [6, 3, 7, 8, 2], [1, 3, 6, 8, 90, 65]))



function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1

        while (j >= 0 && current < arr[j]) {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = current
    }
    return arr;
}
// console.log(InsertionSort([11, 2, 24, 5, 27, 11, 12, 13]))

function consectiveArray(arr) {
    let len = 1
    let longestConsecutiveElem = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] == 1) {
            len = len + 1;
        }
        else {

            if (len > longestConsecutiveElem) {
                longestConsecutiveElem = len;
            }
            len = 1;
        }
    }

    return longestConsecutiveElem;
}
// console.log(consectiveArray([1, 2, 4, 5, 7, 11, 12, 13]))




let str = "hello bhai kaise ho"
////////////////////////////////////////        important 
let i = 0;
let result=""
while (i < str.length) {
    console.log(i)
    let curr = str.charAt(i);
    let next = str.charAt(i + 1);
    if (i === str.length - 1) {
        result = result + (str.charAt(i).toUpperCase());
        break;
    }
    if (i === 0) {
        result = result + (str.charAt(i).toUpperCase());
    }
    else if (next === " ") {
        result = result + (str.charAt(i).toUpperCase()) + " ";
    }
    else if (curr === " ") {
        result = result + (str.charAt(i + 1).toUpperCase());
        i = i + 1;
    }
    else {
        result = result + (str.charAt(i));
    }
    i++;
}
console.log(result)

// Print Substes

function substes(arr, index, result) {
    if (index == arr.length) {
        console.log(result);
        return;
    }
    result.push(arr[index]);
    substes(arr, index + 1, result);
    result.pop()
    substes(arr, index + 1, result);

}
substes([1,2,2],0,[])


function permuations(arr,i,j){
    if(i>= arr.length || j>=arr.length){
        console.log(arr)
        return;
    }
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    permuations(arr,i+1,j);
    permuations(arr,i,j+1);
}

permuations([1,2,3],0,0)
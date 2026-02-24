
import { LinkList } from 'js-sdsl'
let arr = [5, 2, 6, 4, 1, 3]

// Question 1 -->  alternate string merge O(n + m)
const str1 = "shah";
const str2 = "sachin";
let str = "";
let i = 0;
let j = 0;
while (i < str1.length && j < str2.length) {
  str = str + str1.at(i) + str2.at(j);
  i++;
  j++;
}
const first=str1.substring(i);
const last=str2.substring(j);
str=str+first+last;
console.log(str)


// Question 2 -->  Reverse a String O(n)
str="I am sachin shah"
let j=str.length-1;
let word="";
let finalString=""
let finalPoint=str.indexOf(" ");
while(j>=0){
  word=str.charAt(j)+word;
  if(str.charAt(j)==" "){
    finalString=finalString+word;
    word=""
  }
  j--;  
}
console.log(finalString+" "+str.substring(0,finalPoint))









function MergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = MergeSort(arr.slice(0, mid))
    let right = MergeSort(arr.slice(mid));

    return merge(left, right)
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++;
        }
        else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
// console.log(MergeSort(arr))


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = current;
    }
    return arr;
}
// console.log(insertionSort(arr))


function QuickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[(Math.floor(arr.length / 2))]
    let left = [];
    let right = [];
    let equal = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else if (arr[i] > pivot) {
            right.push(arr[i])
        }
        else {
            equal.push(pivot)
        }
    }
    return [...QuickSort(left), ...equal, ...QuickSort(right)]
}
// console.log(QuickSort(arr))



function Merge_Sort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = Merge_Sort(arr.slice(0, mid));
    let right = Merge_Sort(arr.slice(mid));

    return sortMerge(left, right);
}


function sortMerge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;


    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}

// console.log(Merge_Sort([5, 2, 6, 4, 1, 3]))


function SelectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min != i) {
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp
        }
    }
    return arr;
}
console.log(SelectionSort(arr))




function fib(n) {

    if (n >= 6) {
        return n
    }
    return fib(n) + fib(n + 1)
}
// console.log(fib(0))





function solveNQueens(n) {
    const board = Array.from({ length: n }, () => Array(n).fill("."));
    const result = [];

    function isSafe(row, col) {
        // Check column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === "Q") return false;
        }

        // Check left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === "Q") return false;
        }

        // Check right diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === "Q") return false;
        }

        return true;
    }

    function backtrack(row) {
        if (row === n) {
            result.push(board.map(r => r.join(" ")));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = "Q";
                backtrack(row + 1);
                board[row][col] = "."; // backtrack
            }
        }
    }

    backtrack(0);
    return result;
}

// Example for 4x4
// console.log(solveNQueens(4));


// Linked List 



















// ==================================================  # 1
function foo() {
  console.log(name) // Undefined 
  var name = "sachin"
}
foo()

//  ================================================== # 2
for (var i = 0; i <= 100; i++) { // 0 to 100, If You use var then answer will be 101
  setTimeout(() => {
    console.log(i)
  }, 1000)
}

//  ================================================== # 3
console.log(!"")
console.log(!"sachin");
console.log(typeof ("sachin"))


//  ================================================== # 4
const o_b_j = {
  name: "sachin",
  value: 1
}
delete o_b_j["name"] // It will remove 
console.log(o_b_j)

//  ================================================== # 5
let ar_ray = [1, 2, 3, 4] // It will create memory leak
delete ar_ray[0]
console.log(ar_ray.length) // length same

// ================================================== # 6
console.warn(+true)
console.log(typeof +true)


// ================================================== # 7
let data = "data"
const bird = {
  size: "small"
}
console.warn(bird[data])
console.warn(bird["size"])
console.warn(bird.size)
console.warn(bird.data)


//  ================================================== # 8
function fruit() {
  console.log("woof !");
}
fruit.name = "apple"
console.log(fruit())


//  ================================================== # 9
let number = 0
console.log(number++)
console.log(++number)
console.log(number)


// ================================================== # 10
function getargs() {
  'use strict';
  console.log(typeof a)
  args = 12;
}
// getargs()
// getargs("ab", "vs", "sa", "df")


// # 11
const person={name:'sachin',age:24}
function sayHi(age){
    return `${this.name}  is ${age}`
}
console.log(sayHi.call(person,12))
console.log(sayHi.bind(person,24))   

// # 12
function sayHi(){
    return ()=>0
}
console.log(typeof sayHi())

// # 13
var numbers=[1,2,3]
numbers[9]=12
console.log(numbers.length)
console.log(numbers[5])

// # 14
// sayHello(); // Error = Function is not defined
var sayHello = function () {
  console.log("Hi");
};


// # 15
const user = {
  name: "Sachin",
  greet() {
    console.log(this.name); // nothing will print 
  }
};
const greet = user.greet.bind(user); // without bind , nothing will print
greet()


// # 16
function greet(city) {
  console.log(this.name + " from " + city);
}
greet.call({ name: "Sachin" }, "Delhi");

function greet(city) {
  console.log(this.name + " from " + city);
}

// # 17
console.log(!!null)
console.log(!!"")
console.log(!!1)
console.log([..."sachin"])

// # 18
var a=200
{
  var a=400
}
let b=a
{
  let b= -400
}
console.log(b)


// # 19
const arr=["sachin", "shah",1,3,'c']
const copy_arr=arr.splice(0,2,5)
copy_arr[1]="hi"
console.log(arr)


// # 20
const number=[]
const str=[]
const ch=[]

arr.forEach(elem=>{
  if(elem.length==1){
    ch.push(elem)
  }
  else if (typeof elem=="string"){ str.push(elem)}
  else  {
    number.push(elem)
  }
})

console.log(str)
console.log(number)
console.log(ch)

// # 21
const obj1={}
const obj2={
  name:"sachin"
}
obj1[obj2]={
  name:"javascript"
}
console.log(obj1)


// # 22
function sum(a,b){
   return a+b
}
console.log(sum(1,2))
console.log(sum(1)(2))

// # 23
let a=11;
let b = 1;
let c = 14;

if(c<b && c<a){
   if(b<a){
      console.log(c + " "+b + " "+a)
   }
   else {
      console.log(c + " "+a + " "+b)
   }
}
else if(b<a && b<c){
   if(a<c){
console.log(b + " "+a + " "+c)
   }
   else {
     console.log(b + " "+c + " "+a) 
   }
}
else {
   if(c<b){
      console.log(a+ " "+c+ " "+b)
   }
   else {
      console.log(a+ " "+b+ " "+c)
   }
}

// # 24
for (let i = 1; i<=15; i++){
   if(i%2==0){
      console.log("even ",i)
   }
   else {
      console.log("odd")
   }
}

// # 25
console.log("sachin".split("").reverse().join(""))

// # 26
function rev(str){
   return str.split("").reverse().join("");
}
console.log(rev("sachin"))


// 26
function checkV(str) {
   let vo = 0
   let st = "aeiou"
   const arr = str.split(" ")
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
         if (st.includes(arr[i].charAt(j))) {
            ++vo
         }
      }
   }
   return vo;
}
checkV("Hello , I am Javascript ")



// # 27
if ([]) {
   console.log("hi")
}

// # 28
let obj = {
   a: {
      b: undefined
   }
}
console.log(obj.a?.b?.c?.d ?? "sachin Shah");


// 29
var abc = 25;
if (function f() { }) {
   abc = abc + typeof f;
}
console.log(abc)

// 30
function fun(a) {
   return (b) => {
      return a + b
   }
}
console.log(fun(1)(2))

// # 31
let name = "I am sachin shah"
const rArr = name.split(" ").reverse()

console.log(rArr.map((elem) => {
   return elem.split("").reverse().join("")
}).join(" "))


// # 32
name = "Sachin"
let isTrue = true
for (let i = 0; i < Math.round(name.length / 2); i++) {
   if (name.charAt(i) != name.charAt(name.length - 1 - i)) {
      isTrue = false
      break
   }
}
console.log(isTrue)


// # 33
function sum(a) {
   return function fun(b) {
      return a + b
   }
}
console.log(sum(1)(2))

// # 34
console.log(function fun(b) {
   return b
}(5))


// # 35
function sum1(a) {
   return function (b) {
      if (b === undefined) return a;
      return sum1(a + b);
   };
}
console.log(sum1(1)(2)())

// # 35
console.log([]==[])

// # 36
if(JSON.stringify([1,2,3])==JSON.stringify([1,2,3])){
   console.log("array equal ")
}
else {
   console.log("array Not Equal")
}

// # 36
let arr=[] ;
arr.length=100
console.log(arr)

// 37
let b=[,,,]
console.log(b)

// 38
const a={
   age:23
}

const one={...a}
one.age=100
console.log(a)


// # 39
function check(num,i){
   if(num==0 || num==1){
      console.log("Not Prime")
      return
   }
   if(i==num){
      console.log("prime")
      return
   }
   if (num%i==0){
      console.log("Not Prime")
      return
   }

   return check(num,++i)
}
// check(11,2)

// 40
const obj={
   a:1,
   b:2
}
console.log(typeof JSON.stringify(obj))


// 41
console.log([1,2,3,4].reduce((curr,prev)=>{
   return prev*curr
}))


// 42
console.log([1,3,2,4].filter((elem)=> elem>3))

// 43
const abc={
   name:"sachin",
   age:22,
   address:"2205"
}
let xyz={
   ...abc,
   name:"shah"
}

const {ad,...pqr}=abc
console.log(pqr,xyz)


// 44
const arr = [0, 1, 2, 3, 4, 5, 6]
let low = 0;
let high = arr.length - 1
let target = 5


while (low <= high) {
   let mid = Math.floor((low + high) / 2)

   if (arr[mid] == target) {
      console.log("found")
      break;
   } else if (arr[mid] > target) {
      high = mid - 1
   }
   else {
      low = mid + 1
   }
}


// 45
var ar = [62, 34, 7, 23, 32, 5]
for (let j = 0; j < ar.length - 1; j++) {
   for (let i = 0; i < ar.length - 1 - j; i++) {
      if (ar[i] > ar[i + 1]) {
         let temp = ar[i]
         ar[i] = ar[i + 1]
         ar[i + 1] = temp
      }
   }

}
console.log(ar)

// 46
fun()
var fun = function fun() {
   console.log("first");
}
fun()
function fun() {
   console.log("second")
}
fun()
function fun() {
   console.log("third")
}
fun();


// # 47
let d = [1, 18, 9, 81, 97, 124]
let c = d.sort((a, b) => a - b)
console.log(c.reverse())
console.log(new Array(10))


// 48
function abc() {
   fn()
}
function fn() {
   console.log("I am callback function")
}

abc()


// 49
let ab = [1, 3, 4, 2, 3, 4, 2, 2]
let newArr = []

for (let i = 0; i < ab.length; i++) {
   for (let j = i + 1; j < ab.length; j++) {
      if (ab[i] == ab[j] && !newArr.includes(ab[j])) {
         newArr.push(ab[i])
      }
   }
}
console.log(newArr)


// 50
var check="My nme i is Sachin"
console.log(check.indexOf(""))
console.log(check.includes("sh"))
console.log(check.repeat(2))
console.log(check.search("i"))


// 51
let count=0;
let i=0;
while(i<=check.length){
   if(check.search("n")> -1){
      count++
      const str=check.replace("n"," ")
      check=str
   }
   i++
}
console.log(count)


// 52
let e=[1,2,3,4]
let f=[...e]
f[0]=2
console.log(e)


// 53
if(function xyx(){console.log("hi")}){
   console.log(100 + typeof xyz)
}

// 54
var obj = {
   xyz: "sachin",
   pqr: function () {
      console.log(this.xyz)
   }
}
const c = obj.pqr
console.log(c)
obj.pqr()
c()

// 55
let arr = [1, 3, 2]
arr = ["sachin", "shah"]
let ans = arr.includes("SHah")
console.log(ans)



// 56
var a = 50;
 {
   var a = 5000
}
let b = a
function add() {
   let b = 5000;
}
console.log(b)


// 57
let ar=[1,4,5]
let i=ar.indexOf(4)
ar[i]=6
console.log(ar)

// 58
console.log(2-"abhi")


// 59
let arry=[2,2,1,5,6,8,10,1,7,8]
let newSet=new Set()
for (let i=0; i<arry.length; i++){
newSet.add(arry[i])
}
console.log(Array.from(newSet))


// 60
let arr = ["Chanan", "and"]
let check = false
for (let i = 0; i < arr[0].length; i++) {
  let newStr = ""
  for (let j = i; j < arr[0].length; j++) {
    newStr += arr[0].charAt(j)
    if (newStr == "and") {
      check = true
      break
    }
  }
}
console.log(check)


// 61
function feb() {
  let first = 0
  let second = 1

  for (let i = 1; i <= 7; i++) {
    const value = first + second
    console.log(value)
    first = second
    second = value
  }
}
feb()


// 62
let obj = [{
  name: "sachin",
  age: 13
},
{
  name: "Shah",
  age: 25
}
  , {
  name: "Sachin Shah",
  age: 27
}
]

const newArr=obj.filter((elem)=>{
  return elem.age < 24
})
console.log(newArr)


// 63
function fun(a, ...b) {
  console.log(b, typeof b)
}
fun(10, 8, 7)


// 64
let str = "Sacchin"
let obj={}
for (let i = 0; i < str.length; i++) {

  obj[str.charAt(i)]= (obj[str.charAt(i)] || 0) + 1
}
console.log(obj)

// 65
const a1 = [1, 2]
const a2 = [3, 4]
let a3 = [].splice(3)
console.log(a3)
a3 = [7, 9, 0, -2]

// 66
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1]
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr1.length ; j++) {
      if(arr1[i]>arr1[j]){
        let temp=arr1[i]
        arr1[i]=arr1[j]
        arr1[j]=temp
      }
    }
  }
console.log(arr1)


// 67
arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const obj={}
let highValue=0
for(let i=0; i<arr1.length; i++){
  obj[arr1[i]]=(obj[arr1[i]] || 0 )+1

}
console.log(obj)


// 68
let alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
str="The Quick Brown Fox"
let temp=""
for(let i=0; i<str.length; i++){
  let ch=str.charAt(i)
  if(!alphabets.includes(str.charAt(i))){
    ch=ch.toUpperCase()
  }
  else {
    ch=ch.toLowerCase()
  }
  temp += ch
}
console.log(temp)



// 69
arr = [1, 2, 3, 4, 5, 6, 7]
for (let i = 0; i < arr.length; i++) {
  const first = Math.floor(Math.random() * 6)
  const second = Math.floor(Math.random() * 6)
  let temp = arr[first]
  arr[first] = arr[second]
  arr[second] = temp
}
console.log(arr)


// 69
arr = [1, 2, 3, 4, 5, 7, 8, 9]
var low = 0;
var high = arr.length
var target = 1

while (low <= high) {
  let mid = Math.floor((low + high) / 2)

  if (arr[mid] == target) {
    break
  }
  else if (arr[mid] < target) {
    low = mid + 1
  }
  else {
    high = mid - 1
  }

}

// 70
array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];
let arrle;
let less;
if (array1.length > array2.length) {
  arrle = array1.length
  less = arrle - array2.length
} else {
  arrle = array2.length
  less = arrle - array1.length
}


// 71
newarr = []
for (let i = 0; i < arrle; i++) {

  newarr[i] = (array1[i] || 0) + array2[i]

}
console.log(newarr)


// 72
var x = 100
{
  var x = -100
}
let y = x;
{
  let y = -200
}
console.log(y)


// 73
console.log({a:100} == {a:100})
arr=[1,2,3,4,5,3,5]
let dup=[]
for(let i=0; i<arr.length; i++){
  for(let j=i; j<arr.length-1; j++){
    if(arr[i]==arr[j+1]){
      console.log(arr[i])
    }
  }
}


// 74
function sum(a){
  return function(b){
    return a+b
  }
}

console.log(sum(1)(2))


// 75
let obj = {
  name: "sachin"
}
const obj2 = obj
obj2.name = "shah"
console.log(obj)
console.log(obj2)


// 76
arr1 = [1, 2, 3]
arr2 = [100, 2, 1, 10]
newArr = [...arr1, ...arr2]
temp = false
for (let i = 0; i < newArr.length; i++) {
  for (let j = 0; j < newArr.length - 1; j++) {
    if (newArr[i] == newArr[j] && i != j) {
      temp = true
      break
    }
  }
  if (!temp) {
    console.log(newArr[i])
  }
  temp = false
}


// 77
const obj = {
a: null,
b: false,
c: true,
d: 0,
e: 1,
f: '',
g: 'a',
h: [null, false, '', true, 1, 'a'],
i: { j: 0, k: false, l: 'a' }

}


// 78
const newObj={}
for (const key in obj) {
  if(obj[key]){
   if(typeof obj[key]=="object"){
    // newObj[key]=obj[key].filter((elem)=>elem)
    const make_obj=Object.assign({},obj[key])
    var empty={}
    console.log(make_obj , " hi")

    for (const key in make_obj) {
      if(make_obj[key]){

      }
    }

   }else {
     newObj[key]=obj[key]
   }
  }
}
console.log(newObj)


// 79
let arr=[2,3,5,7,8]
var isPrime;
for(let i=0; i<arr.length; i++){
  let i=2;
  isPrime=false
  let num=arr[i]
  while(i<=num){
    if(num % i ==0 && num != i){
      isPrime=true

      break
    }
    i++;
  }
  if(isPrime){
    isPrime=true
    break
  }
}
console.log(isPrime)


// 80
var arr = [2, 3, 0, 5, 7, 8, true, false]
console.log(arr.filter((value) => typeof value == "number").reduce((a, b) => a + b))

// 81
arr = [2, 4, 16, 32, 68]
check = true
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i + 1] % arr[i] != 0) {
    check = false
  }
}
console.log(check)

// 82
arr=[2,8,[6,3,3],[4],5,[3,4,[5,4]]]
count=0
for(let i=0; i<arr.length; i++){
  if(Array.isArray(arr[i])){
    count++
  }
}
console.log(count)


// 83
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
console.log(student)
delete student.rollno
console.log(student)
console.log(Object.values(student).length)


// 84
var arr = [6, 4, 0, 3, -2, 1]
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j + 1]
      arr[j + 1] = arr[j]
      arr[j] = temp
    }
  }
}
console.log(arr)

// 85
str = "dog"
for (let i = 0; i < str.length; i++) {
  for (let j = i; j < str.length; j++) {
    console.log(str.substring(i, j + 1))
  }
}


// 86
setInterval(() => {
  const dat = new Date()
  const getHours = dat.getHours()
  const getMin = dat.getMinutes()
  const getSecond = dat.getSeconds()
  console.log(getHours + ":" + getMin + ":" + getSecond)

}, 1000)
console.log(dat.toLocaleTimeString()+":"+dat.getSeconds())



// .87
var library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  }];

const sort_obj=library.sort((a,b)=> b.title - a.title)
console.log(sort_obj)
console.log(Object.getOwnPropertyNames(Object))
console.log(Object.values(library))



// 87
var obj={
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  }
const newObj={}
for(const o in obj){
  newObj[obj[o]]=o
}
console.log(newObj)  
console.log(Object.hasOwn(obj,"titlej"))



// 88
if ({}) {
  console.log("true")
}
else {
  console.log("false")
}


// 89
function prefixfun(str, start = 0, end = 0) {
  if (str.length <= start) {
    return
  }
  if (end > str.length) {
    return prefixfun(str, start + 1, start + 2)
  }
  const subStr = str.substring(start, end)
  console.log(subStr)

  return prefixfun(str, start, end + 1)
}

console.log(prefixfun("sachin"))


// 90
arr = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23]
function findValue(arr, target, low, high, mid) {
  if (low > high) {
    return
  }
  mid = Math.floor((low + high) / 2)

  if (arr[mid] == target) {
    return
  }
  else if (arr[mid] > target) {
    high = mid - 1
  }
  else {
    low = mid + 1
  }
  return findValue(arr, target, low, high, mid)
}

let low = 0
let high = arr.length
findValue(arr, 3, low, high, 0)


// 91
function binaryToDec(b, i, num) {
  if (i < 0) {

    return 0
  }
  const result = num * parseInt(b.charAt(i)) + binaryToDec(b, i - 1, num * 2)
  return result
}
const binary_num = "11001"
console.log(binaryToDec(binary_num, binary_num.length - 1, 1))


// 92
function checkP(str, i, mid) {
  if (i >= mid) {
    return true
  }
  if (str.charAt(i) != str.charAt(str.length - 1 - i)) {
    return false
  }
  return checkP(str, i + 1, mid)
}
str = "abdb"
mid = Math.floor(str.length / 2)
console.log(checkP(str, 0, mid))

// 93
console.log('5' + 3)
console.log('5' == 5)
console.log('5' === 5)
console.log(NaN === NaN)
console.log(1 < 2 < 3)
console.log(3 > 2 > 1)


// 94
const a={

}
a.key="sachin"
const p={...a}
p.key="sahu"
console.log(a.key)

// 95
const a={
}
a.key="sachin"
const b= a
b.key="sahu"
console.log(a.key)

// 96
const a = {

}
const b = {
  name: "Sachin"
}
const c = {
  name: "shah"
}
const d = {
  name: "hello world"
}
a[b] = {
  name: "ankit"
}
a[c] = {
  name: "hello"
}
a[d] = {
  name: "world"
}
console.log(a[b])



// 97
const y = 0
const z = false
console.log(y==z)
console.log(y===z)
console.log("str"-2)
console.log(NaN==NaN)
console.log(NaN===NaN)
console.log(0 ?? "sachin")
console.log(0 || "sachin")



// 98
function  newF(){
  console.log(newF.xyz)
}
newF()
newF.xyz=100
newF.xyz=200
newF()


// 99
let abc = [100, 150, 200, 50]
abc.sort((a, b) => a - b)
console.log(abc)

abc.unshift(9)
console.log(abc)
abc.shift(10)
console.log(abc)


// 100
function fun(a){
  return function(b){
    return a+b
  }
}
console.log(fun(1)(2))


// 101
function fun(a){
  return function sum(b){
    if(b==undefined) return a
    a=a+b
    return sum
  }
}
console.log(fun(1)(2)(3)())

// 102
const x=(2,5,6)
console.log('x=',x)

// 103
function ab(){

}
var ab
console.log(ab)



// 104
console.log(typeof typeof NaN)
const str = [..."sachin"]
console.log(str)
console.log(parseInt('10+2'))
console.log(parseInt('7FM'))
console.log(parseInt('M7F'))


// 105
console.log([1,3,2].map((num)=>{
  if(num>0){
    return;
  } else {
    return num * 2
  }
}))


// 106
function fun_1(){
  return 
}
console.log(fun_1())

"use strict";
{
  function fun_2() {
    console.log("Sachin")
  }
}
fun_2()


// 107
console.log([]==[])
console.log([] == ![])
console.log(typeof null)
console.log(typeof undefined)


// 108
function fun_3(){
  return 
  {
    name:"sachin"
  } 
}
console.log(fun_3())


// 109
const arr = [10, 12, 18, 6, 4]
let check
for (let i = 0; i < arr.length; i++) {
  check = false
  for (let j = i; j < arr.length; j++) {
    if (arr[i] + arr[j] == 30) {
      // console.log(i, " ", j)
      check = true
      break
    }
  }
  if (check) {
    break
  }
}
console.log(arr.find((value) => value == 6))



// 110
function fun_4(a) {
  return function (b) {
    if (b == undefined) return a
    return fun_4(a + b)
  }
}
console.log(fun_4(1)(2)(4)())


// 111
const arr1=["A","B","C","D","A","A"]
console.log(arr1[-1])
console.log(arr1.indexOf('A',-2))

// 112
ar_ray = [1, 2, 3, 4]
ar_ray[10] = "500"
console.log(ar_ray.length)
console.log(ar_ray)
for(let i=0; i<ar_ray.length; i++){
  console.log(ar_ray[i])
}

console.log(ar_ray+"")

// 113
ar_ray = []
const res = ar_ray.every((value) => value > 0)
console.log(res)



// 114
function ucheck(){
  return 
}
var ucheck;
console.log(ucheck)


// 115
console.log(parseInt("F78"))
console.log([1,3,4].map(e=> { if(e>0) return; return e*10 } ))


  // 116
var arr1 = [[1], 2]
var arr2 = arr1.slice()
arr2[0][0] = 24
console.log(arr1)


// 117
var obj1 = { rollNo: 21 }
var obj2 = obj1
obj2 = {}
console.log(obj1)

// 118
const str = "abc" + +"def"
console.log("OutPut ", str)


// 119
const str1 = "sachin"
age = 24
console.log(delete str1)
console.log(delete age)


// 120
// Write a function to check if given two strings are anagrams of each other?
let str2 = "cat"
let str3 = "dog"

check = true
for (let i = 0; i < str2.length; i++) {
  if (str2.length != str3.length || !str3.includes(str2.charAt(i))) {
    check = false
  }
}
console.log(check)


// 122
function removeDup(str) {
  const obj = {}
  for (let i = 0; i < str.length; i++) {
    obj[str.charAt(i)] = obj[str.charAt(i)] ? obj[str.charAt(i)] + 1 : 1
  }
  return obj;
}
console.log(removeDup("saach"))


// 123
let str4 = ""
for (const key in removeDup("saach")) {
  str4 = str4 + key
}
console.log(str4)



// 124
let str5 = "()"
check = true
for (let i = 0; i < str5.length; i++) {
  if ((str5.charAt(i) === "(") && (str5.charAt(i + 1) != ")")) {
    check = false;
    break
  }
  else if ((str5.charAt(i) === ")") && (str5.charAt(i - 1) != "(")) {
    check = false;
    break
  }
}
console.log(check)


// 125
str5 = "234a"
check = true
for (let i = 0; i < str5.length; i++) {
  if (!parseInt(str5.charAt(i))) {
    check = false
    break
  }
}
console.log(check)


// 126
str5 = "sachin"
for (let i = 0; i < str5.length - 1; i++) {
  var c1 = str5.charAt(i)
  for (let j = i + 1; j < str5.length - i; j++) {
    var c2 = str5.charAt(j)
    if (c1 > c2) {
      var temp = str5.charAt(i)
      str5.charAt(i) = str5.charAt(j)
      str5.charAt(j) = temp
    }
  }
}
console.log(str5)



// 127
let str6 = "1"
let inc = 0
for (let i = 0; i < str6.length; i++) {
  if (parseInt(str6.charAt(i))) {
    inc++
  }
}
console.log(inc)


// 128
// Write a function to find Lowest Common Multiple (LCM) of two numbers?
let num1 = 5
let num2 = 6
arr1 = []
arr2 = []
arr1.push(num1)
arr2.push(num2)
let greater = num1 < num2 ? num1 : num2

for (let i = 1; i <= 10; i++) {
  if (arr2.includes(greater * i)) {
    break
  }
  arr1.push(num1 * i)
  arr2.push(num2 * i)
}


// 129
function solve(arr) {
  return arr.sort()
}
console.log(solve([4, 3, 2, 1]))


// 130
function removeDup(str) {
  var obj = {}
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i)
    obj[ch] = obj[ch] ? obj[ch] + 1 : 1
  }
  var st = ""
  for (const key in obj) {
    st = st + key
  }
  return st
}
console.log(removeDup("saachhin"))


// 131
function checkNegative(num) {
  return num < 0 ? "negative" : "positive"
}
console.log(checkNegative(0))



// 132
var st1 = "care"
var st2 = "raace"
check = true
for (let i = 0; i < st1.length; i++) {
  if (st1.length != st2.length || !st2.includes(st1.charAt(i))) {
    check = false
    break
  }
}
console.log(check)



// 133
function checkfirstDupCh(str) {
  var findvalue = "none"
  for (let i = 0; i < str.length; i++) {
    var ch = str.charAt(i)
    var subSt = str.substring(i + 1)
    if (subSt.includes(ch)) {
      findvalue = ch
      break
    }
  }
  return findvalue
}
console.log(checkfirstDupCh("schinn"))


// 134
function sortStr(str) {
  var arr = str.split("")
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr.join("")
}
console.log(sortStr("sAchin"))



// 135
function checkLongestPatll(str) {
  var check = false
  for (let i = 0; i < str.length; i++) {
    let firstCh = str.charAt(i)
    let lastCh = str.charAt(str.length - 1)
    if (lastCh == firstCh) {
      let sub = str.substring(i)
      for (let j = 0; j < sub.length; j++) {
        let f = sub.charAt(j)
        let l = sub.charAt(sub.length - j - 1)
        if (sub.length == 1 || f != l) {
          check = false
          break
        }
        check = true
      }
    }
    if (check) {
      break
    }
  }
  return check
}
console.log(checkLongestPatll("naacn"))




// 136
function checklastsub(str, f) {
  return str.lastIndexOf(f) < 0 ? false : true
}
console.log(checklastsub("sachin", "hhin"))



// 137
function addToList(arr1, arr2) {
  return [...arr1, ...arr2]
}
console.log(addToList([1, 2, 3, 4], [5, 6, 7, 8]))


// 138
function checkOnlyDigits(str) {
  for (let i = 0; i < str.length; i++) {
    if (!parseInt(str.charAt(i))) {
      return false
    }
  }
  return true
}
console.log(checkOnlyDigits("12"))



// 139
function findLastSub(str, f) {
  const last = str.lastIndexOf(f)
  if (last != -1) {
    return true
  }
  return false
}
console.log(findLastSub("moune", "ne"))




// 140
function starPads(str) {
  let size = 5 - str.length
  let update = str
  for (let i = 0; i < size; i++) {
    update = "*" + update
  }
  return update
}
console.log(starPads("23"))


// 141
function find2power(value) {
  let num = 2
  while (num <= value) {
    num = num * 2
  }
  return num
}


// 142
function checkBracket(str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == "(") {
      count++;
    }
    else if (str.charAt(i) == ")") {
      count--
      if (count < 0) {
        return false
      }
    }
  }
  return count === 0
}
console.log(checkBracket("()())"))


// 143
function decimalTonNum(num) {
  var str = num.toString().split("").reverse()
  console.log(str)
  var a = 0
  for (let i = 0; i < str.length; i++) {

    a = ((2 ** i) * str[i]) + a
  }
  return a
}
console.log(decimalTonNum(1101))


// 144
function compresstring(str) {
  var obj = {}
  for (let i = 0; i < str.length; i++) {
    obj[str.charAt(i)] = obj[str.charAt(i)] ? obj[str.charAt(i)] + 1 : 1
  }
  var up = ""
  for (const key in obj) {
    up = up + key + obj[key]
  }
  return up
}
console.log(compresstring("bat"))


// 145
function unionSetss(num1, num2) {
  let arr = [...num1]
  for (let i = 0; i < num2.length; i++) {
    if (!arr.includes(num2[i])) {
      arr.push(num2[i])
    }
  }
  return arr
}

// 146
console.log(unionSetss([1,2,3],[3,4,5]))
console.log("2" > "10");
console.log("2">10)


// 147
function intersectionElem(arr1, arr2) {
  let arr = []
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      arr.push(arr1[i])
    }
  }
  return arr
}
console.log(intersectionElem([1, 2, 3], [2, 3, 4, 5]))



// 148
function diffElem(num1, num2) {
  let arr = []
  for (let i = 0; i < num1.length; i++) {
    if (!num2.includes(num1[i])) {
      arr.push(num1[i])
    }
  }
  return arr
}
console.log(diffElem([1, 2, 3, 4, 5], [1, 2]))

// 149
function nineDigiFun() {
  var num = 1
  for (let i = 1; i < 9; i++) {

    for (let j = 1; j <= 9; j++) {
      var up = num.toString() + j
      if (parseInt(up) % j == 0) {
        num = up
        break
      }
    }
  }
  return num
}
console.log(nineDigiFun())


// 150
let ar = ["sacin", 10, 500, "shah", 's', "300"]
let ch = []
let st = []
let num = []
ar.forEach((elem) => {
  if (typeof elem == "string") {
    if (elem.length > 1) st.push(elem)
    else ch.push(elem)
  }
  else num.push(elem)
})

console.log(ch, st, num)


// 151
ar = ["sachin", "hinb"]
var st1 = ar[1]
var st2 = ar[0]
let checkk = true
for (let i = 0; i < st1.length; i++) {
  if (!st2.includes(st1.charAt(i))) {
    checkk = false
    break
  }
}
console.log(checkk)


// 152
console.log('sachin'-100)
ab = [10, 20, 30];
ab.name = "sachin"

for (let index in ab) {
  console.log(ab[index]); 
}

for (let i = 0; i < ab.length; i++) {
  console.log(ab[i])
}

// 153
console.log(isNaN("a"))
console.log(Number.isNaN("50")) 
const ar1 = [1, 2, 3]
const ar2 = "1,2,3"
console.log(ar1 == ar2)



// 154
let x = 10
{
  let x = 20
  console.log(x)
}
console.log(x)


// 155
const a_r = [1, 2, 3, 4, [5, 6, 7]]
console.log(a_r.flat())


// 156
const prom = new Promise((resolved, reject) => {
  if (true) {
    resolved(new Promise((resolved, reject) => {
      if (true) {

        resolved("inner resolved")
      }
      else {
        reject("Innter Reject")
      }
    }))
  }
  else {
    reject("NO")
  }
})

prom.then((dat) => {
  console.log(dat)
}).catch((c) => {
  console.log(c)
})


// 157
const O1 = {
  name: "sachin",
  age: 25,
  Male: true,
  Profession: "developer"
}
Object.freeze(O1)
console.log(O1)

O1["name"] = "shah"
console.log(O1)
console.log(NaN==NaN)

// 158
/////////////////////////////////////// Slide Window Techinque

let ar_r = [2, 1, 5, 1, 3, 2];
let k = 3;

let windowSum = 0;
for (let i = 0; i < k; i++) {  //2, 1, 5,  i + k = 0 + 3 = 8 
  windowSum += ar_r[i];
}

let maxSum = windowSum;

// 159
// Step 2: window slide karo
for (let i = k; i < ar_r.length; i++) { // i = 3 
  windowSum = windowSum + ar_r[i] - ar_r[i - k];  // 8 = 8 + 1 - (3 - 3= 0  ) (2)=
  maxSum = Math.max(maxSum, windowSum);
}


// 160
console.log(maxSum); // 9 (5+1+3)
console.log([1, 2, 3] + [, 4, 5, 6])
console.log(5 + "3 " + 9)
const afun="sachin"
console.log(afun())
console.log([]==[])


// 161
function abcd(x, y, z) {

}
function xyz(a, b = 0, c) {

}
function pqr(a = 0, b, c) {

}
console.log(abcd.length)
console.log(xyz.length)
console.log(pqr.length)



// 162
let abd = "shah"
function Function() {
  // console.log(abc)

  let abc = "sachin"
}

Function()

// 163
abcde();
var abcde = function () {
  console.log("im Am First")
}
abcde()
function abcde() {
  console.log("I am Last")
}
abcde()


// 164
let myarr1 = [9, 3, 12, 10, 14, 15, 6, 8, 13];
myarr1[15, 6, 8, 9, 10, 12, 14, 3]

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp
  }
  return arr;
}
console.log(selectionSort(myarr1))



// 165
function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--
    }
    arr[j + 1] = current;
  }
  return arr;
}
console.log(InsertionSort(myarr1))

// 167
console.log(+true);
console.log(! "Sachin")

console.log("2" > "10")
console.log("2" > 10)
console.log("2".charCodeAt())
console.log("10".charCodeAt())
console.log(+{})
console.log(+"")
console.log(+false)
console.log([].valueOf())


// 168
{
  var i = 1;
  let j = 2;
  const k = 3;
}
console.log(i);
let f =[1,2];
let e= f;
e.push(3);
console.log(f);

console.log(isNaN([] && +[] && ![]))
console.log([] + [])
console.log(typeof [] + [])
console.log((typeof []) + [])
console.log(typeof ([] + []))


// 169
function oneTwo() {
  return "hi How are you"
}

// 170
let ob1 = {}
let ob2 = { age: 25 }
ob1[{}] = "I am Fine";
console.log(obj2["age"])
console.log(ob2)
console.log([].toString.call([]))


// 171
const ob_1 = { name: "sachin" }
const arr_ray = ["name"]
ob_1[arr_ray] = "Shah";
console.log(ob_1.name)

// 172
console.log(0 == false);
console.log(0 === false);

for (var i = 0; i < 3; i++) {
  // setTimeout(() => { console.log(i) }, 1000)
}

// 173
let arr3 = [18, 10, 12, 15, 9, 11]
const arr4 = arr3.splice(0, 2)
console.log(arr3)


// 174
const aa = {};
const bb = { key: "b" }
const cc = { key: "c" }
aa[bb] = 123; 
aa[cc] = 456; 
console.log(aa[bb])


// 175
let ar4 = [1, 2, 3] 
ar4.push(ar4[2]++)// 1 2 4 3 
console.log(ar4)
function sum(num1, num2) {
  // console.log(arguments)
  "use strict"
  num1 = 200;
  num2 = 300;

  return arguments[0] + arguments[1];
}
console.log(sum(10,10))


// 176
let va = function () { // First Class Function
  return 1
}
function fun2(fun3) {
  return 3 + va() + fun3()
}

function fun3() {
  return 4
}
console.log(fun2(fun3))


// 177
const obj3 = {
  name: "sachin",
  say() {
    // console.log(this.name)
  }
}
const fn = obj3.say;
fn.apply(obj3)


// 178
let new_array = [1, 2, 3, 4].push(2);
[1,2,3,4,2]
console.log(new_array)
console.log(new_array.push(3))


// 179
function mergeStr(str1, str2) {
  let i = 0;
  let result = ""

  while (i < str.length && i < str2.length) {
    let first = str1.charAt(i)
    let second = str2.charAt(i)
    result = result + first + second
    i++;
  }
  let firstStr = str1.substring(i)
  let secondStr = str2.substring(i)

  return result + firstStr + secondStr
}
console.log(mergeStr("shah", "sachin")) // sshaachin



// 180
var longestLength = 0
let start = 0;
function getLongestWord(mystr) {
  let i = 0;
  let wo = ""
  let word = ""
  while (i < mystr.length) {
    let curr = mystr.charAt(i)
    let next = mystr.charAt(i + 1)
    word += curr
    if (next == " ") {
      // console.log(word)
      let len = (i + 1) - start
      if (start < len) {

        console.log(start)
        wo = word
        word = ""
      }
      start = i + 1
    }
    i++;
  }
  wo = mystr.substring(start).length > wo.length ? mystr.substring(start) : wo
  return wo
}
let myStr = "Hello I am"
console.log(getLongestWord(myStr))


// 181
let ar_rr = [[1, 2], [3, 4], [5, 6], [7, 8]]
let singleArr = []
for (let i = 0; i < ar_rr.length; i++) {
  singleArr = [...singleArr, ...ar_rr[i]]
}
console.log(singleArr)


// 182
function infinteFun(a) {
  return function (b) {
    return a + b;
  }
}

console.log(infinteFun(1)(2))


// 183
let createArr = [1, 2, 3, 4, 5, 1, 2]
let set = new Set()
for (let i = 0; i < createArr.length; i++) {
  if (set.has(createArr[i])) {
    // console.log(createArr[i])
  }
  else {
    set.add(createArr[i])
  }
}
let e = [1, 2, 3, 4]

delete e[2];
// console.log(e.length)



// 184
console.log(null == undefined)
console.log([[[]]] == "");
console.log([undefined] == "");
console.log([undefined].toString())
console.log(undefined >= 0);
console.log(undefined == 0);
console.log(null >= 0);
console.log(+{});

















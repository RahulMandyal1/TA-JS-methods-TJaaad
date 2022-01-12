// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
let newstrings  =  strings.join(" ");
// - Add two new words in the strings array "called" and "sentance"
strings.push("called","sentence");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
let newstr = strings.join(" ");
// - Remove the first word in the array (strings)

strings.shift();
// - Find all the words that contain 'is' use string method 'includes'

// - Find all the words that contain 'is' use string method 'indexOf'

// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(element => {
  element %3 == 0;
}) ; // false all numbers  are not divisible by 3
// -  Sort Array from smallest to largest
let sortedNumbers =[...numbers].sort( function( a , b){
  if(a > b) return 1;
  if(a < b) return -1;
  return 0;
});
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers

let largest = numbers[0];

for( let i = 0; i<=numbers.length ; i++){
  if(largest <numbers[i]){
    largest = numbers[i]
  }
}
console.log(largest);


// - Find longest string in strings

let largestString = strings[0];

for( let i = 0; i<=strings.length ; i++){
  if(largestString < strings[i]){
    largestStrings = strings[i]
  }
}
console.log(largestString);

// - Find all the even numbers

 let evenNumbers =numbers.filter(element=> element %2==0);
 console.log(evenNumbers);

// - Find all the odd numbers
let oddNumbers =numbers.filter(element=> {
  return element %3==0;
});
console.log(oddNumbers);

// - Place a new word at the start of the array use (unshift)
strings.unshift("new word");
// - Make a subset of numbers array [18,9,7,11]
let numberSubset = numbers.slice(3 , 7);
console.log(numberSubset);
// - Make a subset of strings array ['a','collection']
let stringSubset = strings.slice(2,4);
console.log(stringSubset);
// - Replace 12 & 18 with 1221 and 1881
numbers[12] = 1221;
numbers[18] = 1881;

// - Replace words in strings array with the length of the word
let strlen = 0;
let  replaceStrLength = strings.map(element=> {
   strlen = element.length ;
   return  element = strlen;
   
});
// - Find the sum of the length of words using above question

let  sumOfArray = replaceStrLength.reduce((accu = initialValue , element ) =>{
   return accu+=element ;
}, initialValue = 0 );
// - Customers Array
 var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' }
];
// - Find all customers whose firstname starts with 'J'
let firstNameWithJ =  filter(element =>{
  //  return element.firstname.inc
})

// - Create new array with only first name

// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.

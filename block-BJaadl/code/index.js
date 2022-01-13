let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.


 let  longestWords = words.reduce( (longest , currentword) =>{
  if(currentword .length> longest.length){
      return currentword;
      
  }
  else{
    return longest;
  }
});
console.log(` the largest word is ${longestWords}`);
// - Convert the above array "words" into an array of length of word instead of word.

let wordsToLength = words.reduce((word , currentWord)=>{
  currentWord = currentWord.length;
  word.push(currentWord);
  return word;
},[]);
// - Create a new array that only contains word with atleast one vowel.

let wordWithVowel= words.reduce((arr, currentword)=> {
  if(currentword.includes("a" || "e" ||"i" || "o" ||"u")){
    arr.push(currentword);
  }
  return arr;
},[]);
// - Find the index of the word "rhythm"

let findIndex = words.indexOf("rhythm");
console.log(`The index of the  findIndex  is : ${findIndex}`)


// - Create a new array that contians words not starting with vowel.


let notVowelStart =  words.filter((element) =>{
  
  if( !element.startsWith("a") && !element.startsWith("e") && !element.startsWith("i") && !element.startsWith("o") && !element.startsWith("u")  ){
   return true;
  }

}); // ['mystery', 'brother', 'crocodile', 'pearl', 'crackpot', 'rhythm']
// - Create a new array that contianse words not ending with vowel


let notEndingWithVowel =
  words.filter((element) =>{
  
  if( !element.endsWith("a") && !element.endsWith("e") && !element.endsWith("i") && !element.endsWith("o") && !element.endsWith("u")  ){
   return true;
  }

}); // ['mystery', 'brother', 'aviator', 'pearl', 'orchard', 'crackpot', 'rhythm']

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]; // 

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

numbers.reduce((acc , cv )=>{
  acc+= cv;
  return acc;
}, 0); // 87
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
numbers.map((number)=> number*3);//[18, 36, 3, 54, 39, 48, 6, 3, 24, 30]

// - Create a new array that contains only even numbers
numbers.filter(number=> number %2==0 ) // [6, 12, 18, 16, 2, 8, 10]
// - Create  a new array that contains only odd numbers.
numbers.filter(number => number%2!==0); // [1, 13, 1]
// - Create a new array that should have true for even number and false for odd numbers.
let a =numbers.map(number=>{
  if(number%2==0){
    return true;
  }
  else{
    return false;
  }
})
// [true, true, false, true, false, true, true, false, true, true]
// - Sort the above number in assending order.
numbers.sort(function(a ,b){
  return a -b ;
})
// [1, 1, 2, 6, 8, 10, 12, 13, 16, 18]
// - Does sort mutate the original array?
// Yes Sort mutates the original array .
// - Find the sum of the numbers in the array.

numbers.reduce((acc , cv )=>{
  acc+= cv;
  return acc;
}, 0);
// sum = 87 ;
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers


function averageArray(arr){
   let avgDivision = arr.length;
   return arr.reduce((acc, cv )=>{
     acc+=cv;
     return acc;
   },0)/avgDivision
   
};

averageArray(numbers);

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(arr){
  let avgDivision = arr.length;
    return arr.reduce((acc, currentWord)=>{
    acc+= currentWord.length;
  },0)/avgDivision
}



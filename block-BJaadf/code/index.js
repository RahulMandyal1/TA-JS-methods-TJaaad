let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
fruits.push("Papaya");
// Remove the last element from fruits array
fruits.pop();
// Log the current length of fruits array
console.log(fruits.length);
// Remove the first element from fruits and log the value of fruits (use delete arr[0])
delete fruits[0];
console.log(fruits);


// Log the element on index 0 and 1
console.log(fruits[0]);
console.log(1);
// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
fruits.shift(1);
console.log(fruits);
// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift("Guava");
// console.log(fruits);
// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift("Dragon Fruit");
// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
fruits.indexOf("Dragon Fruit")===0 ? true : false; //  true
fruits.indexOf("Guava")===1 ? true : false; //  true

// Update the value of index 1 to `Pears`
fruits[0] = "Pears"; 
// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice( 1,0 , "kiwi","Lemon");
// Remove (slice) all the element from index 5
 fruits = fruits.slice(5);
// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits = ['Berries', 'Melons'];
// Concat moreFruits into fruits array (re-assign so the value gets updated)
fruits =  fruits.concat(moreFruits);
// Log the name of all fruit in console
console.log(fruits);
// Convert each fruit name to lowercase and log it
const lowercaseFruits = fruits.map(element => element.toLowerCase());
// Convert all fruits name into lowercase and store in new array named lowercaseFruits

// converted above 
// lowercaseFruits named variable 
console.log(lowercaseFruits);
// Convert all fruits name into uppercase and store in new array named uppercaseFruits
const uppercaseFruits = fruits.map(element => element.toUpperCase());

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
 numbers = numbers.flat();
 console.log(numbers);
// Need to Reassign the array becuase  flat does not mutate the original array 

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
 numbersTwo = numbersTwo.flat(3);
 console.log(numbersTwo);

// Need to Reassign the array becuase  flat does not mutate the original array 

// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
numbersThree = numbersThree.flat(5);
console.log(numbersThree);

// Need to Reassign the array becuase  flat does not mutate the original array 

// Use forEach to log all the elements of numberThree array
numbersThree.forEach( function(element){
    console.log(element);
});
// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map

let doubleNumbers = numbersThree.map(element => element * 2 );
// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map

let tripleNumbers = numbersThree.map(element => element * 3 );
// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map

let halfNumbers = numbersThree.map(element => element / 2 );
// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
let oddNumbers= numbersThree.filter(element => element%3==0 );
// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
let EvenNumbers= numbersThree.filter(element => element%2==0 );
// Find the index of 10 in numbersThree array
numbersThree.indexOf(10); // 9
// Reverse the values of numbersThree array // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
numbersThree.reverse();
// Reverse the values of numbersTwo array // [6, 5, 4, 3, 2, 1]
numbersTwo.reverse();
// Join all fruits with '-', convert to uppercase and log it

let joinallfruits = fruits.join("-");
let joinedAllFruitsName = joinallfruits.toUpperCase();;
console.log(joinedAllFruitsName);

// Join all fruits with '&', convert to lowercase and log it
let joinallfruits1 = fruits.join("&");
let joinedAllFruitsName1 = joinallfruits1.toLowerCase();;
console.log(joinedAllFruitsName1);
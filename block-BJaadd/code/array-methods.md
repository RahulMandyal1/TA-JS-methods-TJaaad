Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

  - Parameters : (separator ) Accept one  parameter   a seperator  of  string type  . if the  separator is not passed then by default  , is the 
                 all the  elements of array are joined  in a string  and  seprated  by  a comma . You can pass seprartor like " " ,-
  - Return : return  a string  with joined  array elements  seprated by  a commma
  - Example 

    ```js
    [1,2,3,4].join(" ") // '1 2 3 4'
    [1,2,3,4].join() // '1,2,3,4' //  passed  not separator  default value  is ,
    ["Rahul" ,"Thakur" , "from " , "Mandi"].join("-");'Rahul-Thakur-from -Mandi'
    ```
3. `flat` // used to create flat structure of array
  - Parameters :  (depth) to sepcify how  how deep you have to nest  an array / of  interger type value  default  value is 1
  - Return : return an  simplified array 
  - Example 

    ```js
    [1,2,3,4,[5,6],[7,8]].flat(); //[1, 2, 3, 4, 5, 6, 7, 8]
    let  nestedArray = [1,2,3,4,5,[6,7,[8,9,[10,11]]]].flat(3);
     console.log(nestedArray); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    ["aman","Rajesh",[1,2,["tanmay",["akash",[4,5]]]]].flat(5); // ['aman', 'Rajesh', 1, 2, 'tanmay', 'akash', 4, 5]
    ```
4. `push`
  - Parameters : (n parameters) // you can add n paramters  but seprate each parameter 
                 with a comma,  and parameter can be any type of data 
  - Return : Return the new length of  array
  - Example  

    ```js
    let b =[1,2,3,4,5];
    b.push(7); 
    console.log(b);//[1, 2, 3, 4, 5, 7]

    let firstArray =[1,2,3,4,,888,999];
    b.push(1000,2000,300); 
    console.log(firstArray);// [1,2,3,4,,888,999,1000,2000,300]

    let nameOfStudent= ["Rahul" ,"Aman","akash"];
    nameOfStudent.push("ajay","tommy");
    console.log(nameOfStudent);//['Rahul', 'Aman', 'akash', 'ajay', 'tommy']
    ```
5. `indexOf`
  - Parameters :  Accept Two parameters (searchElement,fromIndex);
               //  The first  parameter is  which element  index we have to search 
               // search Element can be any type of data depend on the element
               // second parameter is  from which  index we can initiate our search
  - Return : Return a  element index if found another wise return -1 if element not found  . return a numbe  type data
  - Example 

    ```js
    [223,2434,343,"Rahul","aman",true].indexOf("Rahul"); // 3
    

    [1,2,3,4,5,6,"string",true,undefined].indexOf(undefined);//8

    ["red","blue","green","Yellow","grey"].indexOf("crimson"); // -1  not  found
    ```
6. `lastIndexOf`
  - Parameters : Accept Two parameters (searchElement,fromIndex);
               //  The first  parameter is  which element  index we have to search 
               // search Element can be any type of data depend on the element .the last match found that element index is returned
               // second parameter is  from which  index we can initiate our search
  - Return :Return a  element index if found another wise return -1 if element not 
  - Example 

    ```js
     [223,2434,343,"Rahul","aman",true].lastIndexOf("Rahul"); // 3
    

    [1,2,3,4,5,6,6,"string",true,undefined].lastIndexOf(6);//6

    ["red","blue","green","Yellow","grey"].lastIndexOf("crimson"); // -1  not  found

    ```
7. `includes`
  - Parameters :  accept Two parameters . (searchelement , from index)
    searchelement -  the  element need to be searched  if exits  or not 
    from index - we  can pass the index value from where  to search
  - Return : Returns a Boolean value either true  if the  match is found or false  if the  match is not  found .
  - Example 

    ```js
    let  students = ["aman","Rahul","yavnika","akash","tanmay","asha"];
    students.includes("yavnika", 5); // false yavnika is at index 2 
    students.includes("Rahul"); // true
    [1,2,3,4,5].includes(3); // true
    ```
8. `reverse`
  - Parameters :  Accept no parameters
  - Return : return an reversed array
  - Example 

    ```js

    [1,2,3,4,5,6].reverse() //[6, 5, 4, 3, 2, 1]
    let  students = ["aman","Rahul","yavnika","akash","tanmay","asha"];
    students.reverse();// ['asha', 'tanmay', 'akash', 'yavnika', 'Rahul', 'aman']

    [11,12,13,14,15].reverse(); //[15, 14, 13, 12, 11]
    ```
9. `every`
  - Parameters : Accept  one paraemeter and that parameter accept three more parameters (callbackfunction ( element , index(optional), array(optional) ));

  callbackfunction -  a function  to test  each element  because  every element is passed to the function as  a parameter.

  element() -  the cuurent element that is being passed by the  every function to cb to test
  index - index of that  element 

  array - complete array on which we are performing operation
  - Return : Returns a  Boolean value  true or false  . 
  - Example 

    ```js
    let  students = ["aman","Rahul","yavnika","akash","tanmay","asha"];

    students.every(function(element){
      return element.includes("a");
     }); // ture every elements include "a"

      students.every(function(element){
      return element.includes("h");
     }); // false every elements not have h

     let  age = [20,15,17,18,19,30];
     age.every(function(element){
      return element> 18 ;
     }); // false

    ```
10. `shift`
 - Parameters : Accept no parameters 
  - Return :  returned that  removed element  element can be of any type
  - Example 

    ```js
    let  students = ["aman","Rahul","yavnika","akash","tanmay","asha"];

    students.shift() // 'aman'
    
    students.shift() // 'Rahul'
     students.shift() // 'yavnika'
    ```
11. `splice`
 - Parameters : (accept three parameters ) (start , deleteCount , item n...)
   start - from where to start splicing

   deleteCount - How many elements  you want  to delete if you  do not specify then 
   it will delete whole elements after start index.
   if you  not want to delete then only  give value like this 
   (3 ,0 ). not delete any  value 

   items n-  the elements to be added to  the array .  can add any type of value
   if we   have not added items then it will only delete the elements form the array

  - Return : if element are removed  then removed elements are  returned
  if no element was removed from the array then it will return  empty  array
  - Example 

    ```js
    let  age = [12, 4, 5, 2, 5];
    age.splice(2,4);//[5, 2, 5]
    
    let  students = ["aman","Rahul","yavnika","akash","tanmay","asha"];
    students.splice(2)//['yavnika', 'akash', 'tanmay', 'asha']

    students.splice(2 ,0 ,"ajay","abhishek") // return empty array no element is deleted

     <!-- but when you log  this  array then  -->
      ['aman', 'Rahul', 'ajay', 'abhishek', 'ajay', 'abhishek']

    ```
12. `find`
  - Parameters :   Accept  one paraemeter and that parameter accept three more parameters (callbackfunction ( element , index(optional), array(optional) ));

  callbackfunction -  a function  to test  each element  because  every element is passed to the function as  a parameter.

  element() -  the current element that is being passed by the  every function to cb to test
  index - index of that  element 

  array - complete array on which we are performing operation

  - Return : // return the first element if the element gets  satisfied by the testing function . if no element found return undefined
  - Example 

    ```js
  let age = [23,34,45,56,60,62];
  age.find(function(element){
    return element >18;
    });
    //return 21   first found match 
  
  age.find(function(element){
    return element >30;
    });

       //return 34   first found match 

  age.find(function(element){
    return element >50;
    });

       //return 56 first found match 

    ```
13. `unshift`
 - Parameters : (parameters n ..) Accept n numbers of elements to  the start of the array can be of any kind datatype
  - Return : Return the new length of the array
  - Example 

    ```js
    let  students = ["aman","Rahul","yavnika","akash","tanmay","asha"];
    students.unshift("Mushkaan","sejal") // 8 

    students.unshift(2, 3); // 10 

    students.unshift("ajay","tarun");//12

    console.log(students);//["ajay","tarun",2, 3, 'Mushkaan', 'sejal', 'aman', 'Rahul', 'yavnika', 'akash', 'tanmay', 'asha']
    ```
14. `findIndex`
   - Parameters :   Accept  one paraemeter and that parameter accept three more parameters (callbackfunction ( element , index(optional), array(optional) ));

  callbackfunction -  a function  to test  each element  because  every element is passed to the function as  a parameter.

  element() -  the current element that is being passed by the  method  to cb to find index
  index - index of that  element 

  array - complete array on which we are performing operation

  - Return : Returns the index of  the first element when the  element  gets satisfied by the testing function
  - Example 

    ```js
    let age = [23,34,45,56,60,62];
  age.findIndex(function(element){
    return element >18;
    });
    //return 0 index   first found match  0 index
  
  age.findIndex(function(element){
    return element >30;
    });

       //return 1 index  first found match  at  1 index

  age.findIndex(function(element){
    return element >50;
    });

       //return 3 index first found matcha at  3 index 

    ```
15. `filter`
 - Parameters :   Accept  one paraemeter callbackfunction and that parameter accept three more parameters (callbackfunction ( element , index(optional), array(optional) ));

  callbackfunction -  a function  to test  each element  after filtering the  function 
  it  return a ture or flase value

  element() -  the current element that is being passed by the  method to  function to cb to filter
  index - index of that  element 

  array - complete array on which we are performing operation
  - Return : Return  a  new array with  the  elements that pass the test . if no element pass the test then a [] array is returned
  - Example 

    ```js
    let age = [23,34,45,56,56];
    function greaterThan10(element){
      return element >10 ;
    };

    age.filter(greaterThan10); // [23, 34, 45, 56, 56]

    //  in case of the age is smaller than 18
    // or  in case if no element pass the test than [] array  is returned
    age.filter(element =>  element <  18 ); // []

     age.filter(element =>  element > 30 );// [34,45,56,56];
    ```
16. `flat`
 // used to create flat structure of array
  - Parameters :  (depth) to sepcify how  how deep you have to nest  an array / of  interger type value  default  value is 1
  - Return : return an  simplified array 
  - Example 

    ```js
    [1,2,3,4,[5,6],[7,8]].flat(); //[1, 2, 3, 4, 5, 6, 7, 8]
    let  nestedArray = [1,2,3,4,5,[6,7,[8,9,[10,11]]]].flat(3);
     console.log(nestedArray); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    ["aman","Rajesh",[1,2,["tanmay",["akash",[4,5]]]]].flat(5); // ['aman', 'Rajesh', 1, 2, 'tanmay', 'akash', 4, 5]
    ```
17. `forEach`
 - Parameters :   Accept  one paraemeter callbackfunction and that parameter accept three more parameters (callbackfunction ( element , index(optional), array(optional) ));

  callbackfunction -  a function  to  execute each element  .

  element() -  the current element that is being passed by the  method to  function to cb to filter
  index - index of that  element 

  array - complete array on which we are performing operation
  - Return : return value of the  for each is always  undefined 
  - Example 

    ```js
    let  students = ["ajay","tarun",2, 3, 'Mushkaan', 'sejal', 'aman', 'Rahul', 'yavnika', 'akash', 'tanmay', 'asha'];

    students.forEach(function(element){
    console.log(element)});  // logs all the value



    ```
18. `map`
 - Parameters :   Accept  one paraemeter callbackfunction and that parameter accept three more parameters (callbackfunction ( element , index(optional), array(optional) ));

  callbackfunction -  a function  to  execute each element  .

  element() -  the current element that is being passed by the  method to  function to cb to filter
  index - index of that  element 

  array - complete array on which we are performing operation
  - Return : always  return  an array   lenght of the array is  equal to the actual array
  - Example 

    ```js
    let  arr=[1,2,3,4,5];
    let ans=0;
    arr.map(ele=>{
  	ans+=ele
   }); // 15


   const array1 = [1, 4, 9, 16];

   const map1 = array1.map(x => x * 2);
   console.log(map1); // [2,8,18,32]





    ```
19. `pop`
  - Parameters : (n parameters) // you can add n paramters  but seprate each parameter 
                 with a comma,  and parameter can be any type of data 
  - Return : Return the new length of  array
  - Return :
  - Example 

    ```js
    

    ```
20. `reduce`
 - Parameters : accept  two  values as  a parameter ( callback function and initial value )
  callback function - accpt four parameters 
   -- accumulator -  the  accumulator value is whatever you initial value
   -- current value - hold whatever the value passed  of the current array element
  --index - index of that  element 

  --array - complete array on which we are performing operation
  - Return : Return  whatever be the initial value can be of any type either string , number , object etc...
  - Example 

    ```js
  console.log(
  [1, 2, 3, 4].reduce((a, b) => a + b, 0)
   ); // 10
  console.log(
  [].reduce((a, b) => a + b, 0)
  );  // empty  array 

  [3, 2.1, 5, 8].reduce((total, number) => total + number, 0)

// loop 1: 0 + 3
// loop 2: 3 + 2.1
// loop 3: 5.1 + 5
// loop 4: 10.1 + 8
// returns 18.1
    ```
21. `slice`
 - Parameters : 
  - Return :
  - Example 

    ```js
    

    ```
22. `some`
- Parameters : Accept  one paraemeter and that parameter accept three more parameters (callbackfunction ( element , index(optional), array(optional) ));

  callbackfunction -  a function  to test  each element  .

  element() -  the cuurent element that is being passed by the  every function to cb to test
  index - index of that  element 

  array - complete array on which we are performing operation
  - Return : Returns a  Boolean value  true or false  . 

   
    ```js

    let  students = ["aman","Rahul","yavnika","akash","tanmay","asha"];

    students.some(function(element){
      return element.includes("a");
     }); // ture first elemetn contain so it does not test other  elements 

      students.some(function(element){
      return element.include("h");
     }); //  true   becuase anyone of the element contains

     let  age = [20,15,17,18,19,30];
     age.some(function(element){
      return element> 18 ;
     }); //  true // becasue  at index 1 age is of 15 


    ```
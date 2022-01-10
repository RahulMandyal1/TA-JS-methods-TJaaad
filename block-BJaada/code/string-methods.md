Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
  - Parameter : this method takes no   Parameters
  - Return  :  returns  a string which  is now  converted to uppercase
  - Example : 
  ``` js
    let myName = "rahul";
    myName.toUppercase(); // RAHUL  

    let strToUpper  =" string  to  uppercase "; 
    strToUpper.toUpperCase() ; //// ' STRING  TO  UPPERCASE '

    "hello".toUpperCase(); // HELLO

    "Aman".toUpperCase(); // AMAN

  ```
3. `toLowerCase`
- Parameter : this method takes no   Parameters
  - Return  :  returns  a string which  is now  converted to lowercase
  - Example : 
  ``` js
    let myName = "rAhUl";

    myName.toLowerCase(); // rahul

    let strToLower  =" string TO Lowercase "; 
    strToLower.toLowerCase() ; //// 'string to lowercase'

    "hello".toLowerCase(); // hello

    "AMAN".toLowerCase(); // aman

4. `trim`
- Parameters : Accepts  no parameter 
- Return :  Return a string with no  white  space 
- Example :
```js
let firstName = "    Rahul      ";
let lastName = "     Thakur     ";
firstName.trim();// 'Rahul'
lastName.trim() //  'Thakur'

"  no white space  ".trim();// 'no white space'

"     trim removes  white space  from both sides        ".trim() ; //"trim removes   white space  from both sides"

```

5. `trimEnd`
- Parameters : Accepts no Parameters 
- Return :   Return  a  sring value with trimmed  white  space only from the  Right  side
- Example :

```js
let firstName = "    Rahul      "; 
let lastName = "     Thakur     ";
firstName.trimEnd();// '    Rahul'
lastName.trimEnd() //  '     Thakur'

"  no white space  ".trimEnd();// '  no white space'

"     trim removes  white space  from left side only        ".trim() ; //"     trim removes   white space  from only end "
```
6. `trimStart`
- Parameters : Accept no Parameters 
- Return :  Return a  string  value  with  trimmed value  only from  the  start 
means  from the left side
- Example :


```js
let firstName = "    Rahul      "; 
let lastName = "     Thakur     ";
firstName.trimStart();// 'Rahul      '
lastName.trimStart() //  'Thakur     '

"  no white space  ".trimStart();// 'no white space  '

"     trim removes  white space  from left side only        ".trimStart() ; //"     trim removes  white space  from only start"
```
7. `concat`
- Parameters : Contains  one or more  string values that  needs to concatenates . 
- Return : Returns a string  - Returns a  concatenated value 
- Example :


```js
"Hello".concat( " " ,"World!"); // Hello World!

let user = "Rahul thakur";

"Welcome ".concat(" ",user); // Welcome Rahul thakur
"concatenated".concat("stringValue"); // concatenatedStringValue
```
8. `endsWith`
- Parameters : accept Two parameter 
       -string value (characters to be searched)- can accept  a single character or a string value  that  needs to be searched to check weather    string ends with that character or not .
       - string length(optional) - You can also pass the  string length to check weather  at that length what is the charcter .
         if the  length is not provide the lenght is by default is the length of the string you can check it by string.length  property .
- Return : Returns a Boolean  value either  true or false based on if the  the match is found  or not returns  true if the match is found 
and returns false if the  match is not found 
- Example :


```js
let  a ="Rahul";

a.endsWith("ul"); // true
a.endsWith("hul") // true
a.endsWith("y"); // false
a.endsWith("a" ,2) //true
"Hey What,s up "endsWith("up"); // false becuase  ends with white space

"Hey What,s up "endsWith(" "); // true  becuase ends with white space
```
9. `includes` // includes  method sepcifies weather   a string  may appeared in the string in which you are  applying  the  method.
- Parameters :   (string to be searched ,position from where  to  begin the searching)
  - String to be searched(mandatory) - first parameter is the string  that needs to be searced  that it exits or not in the string
  - position(optional ) : position from where  to  begin the searching . The  default  value is  0
- Return : Return a Boolean  value  ture or  false  based on the match is found or not 
- Example :


```js
"Blowzy night-frumps vex'd Jack Q.".includes("night"); // true

"Blowzy night-frumps vex'd Jack Q.".includes("Jack"); // true


"Blowzy night-frumps vex'd Jack Q.".includes("Hello");// false


"Blowzy night-frumps vex'd Jack Q.".includes("jack " ,28); // false
```
10. `indexOf`
- Parameters : acceps two parameters ("string to be searched" , index from where to start  the search)
  - string to be searched -  accept  a  parameter   as a string whose  index you want  to know the  first match  is found is then returned 
  - index from where to start (optional)  -  accept  a number  as   a parameter to specify form which index to start the search default value is zero
- Return : Return a number means  index of that charcter in the string is the match is not found then return a -1 
- Example :


```js
"Hello World".indexOf("l",6); // 9  starts search from 6 and first match is found at 9
"Hello World".indexOf("l"); // 2
"Hello World".indexOf("H"); // 0

```
11. `lastIndexOf` // starts the search  from the beginning but returns the  last matched character index
- Parameters : acceps two parameters ("string to be searched" , index from where to start  the search)
  - string to be searched -  accept  a  parameter   as a string whose  index you want  to know the  last match  is found is then returned
  - index from where to start (optional)  -  accept  a number  as   a parameter to specify form which index to start the search default value is zero
- Return : Return a number  index of character or -1 : if the match is not found then -1
- Example :


```js

"Hello World".lastIndexOf("l") ;// 9 last match is at 9 index
"Rahul thakur".lastIndexOf("r"); //11 
"vishu".lastIndexof("z"); // -1 no match found

```
12. `padEnd` // adds some  padding or white space  at  the end of the  string 
- Parameters : Accepts two parameters (length of the padding , string with  whom you want to replace padding)
  - lenght of padding - accept  a number value  how much padding you want  and it calculate the left lenght with the " " or either with our desired  character or "any string value "
  - padding string (optional) -   accept a   string value  means  with whom you can replace the  padding  default is " "
- Return :  returns  a  string value
- Example :


```js
let  a = "Rahul";
a.padEnd(11 , "*");  // 'Rahul******'


let  a = "Rahul thakur";
a.padEnd(11 , "*");  //  Rahul thakur //  Because  No more space left  length is  already  more than 11

"hello".padEnd(4, "*"); // hello //  Because  No more space left  length is  already  more than 11
```

13. `padStart`//adds  some  padding or white space  at  the start of the  string 
- Parameters :Accepts two parameters (length of the padding , string with  whom you want to replace padding)
  - lenght of padding - accept  a number value  how much padding you want  and it calculate the left lenght with the " " or either with our desired  character or "any string value "
  - padding string (optional) -   accept a   string value  means  with whom you can replace the  padding  default is " "
- Return :returns  a  string value
- Example :


```js
let  a = "Rahul";
a.padStart(11 , "*");  // '******Rahul'


let  a = "Rahul thakur";
a.padStart(11 , "*");  //  Rahul thakur //  Because  No more space left  length is  already  more than 11

"hello".padStart(4,"****") // hello //  Because  No more space left  length is  already  more than 11
```
14. `repeat`  // repeat  a string upto n times  n is passed as a parameter as  a number
- Parameters :  accept only one parameter Count of the  string whom you want to repeat and how amny times you want to  repeat 
               can not pass the  count parameter a string or  a negative number anotherwise through an error
- Return : return a  string
- Example :


```js

"Rahul".repeat(-1); //  RangeError

"Rahul".repeat(3);// RahulRahulRahul

"Thakur".repeat(2); // ThakurThakur

```
15. `replace` //  Replace  a string  with your desired string 
- Parameters : Accepts  Two  parameters of string type
   - substr - first  parameter  is  a string that needs to be replaced  by a new string 
   - newstring - Second parameter is a new string that is replaced by the  current  string 
- Return : Returns a  string  value
- Example :


```js
let name = "Rahul Mandyal";

name.replace("Mandyal","Thakur"); // 'Rahul Thakur'

" he is very big  ".replace("big","tall"); // he  is very tall

"hello user ".replace("user","World"); // hello World 
```
16. `slice`
- Parameters :  accepts  two parameters (begin index , end index) 
  - begin index - accepts a number  where to start to slice the   string
  -end  index(optional) - also accept  a number meand the index number where to end  the slicing  // default value is upto the length of string

- Return :  Returns  a string
- Example :


```js
let  slicetext = " slice this string "; //
slicetext.slice(1,10); // 'slice thi'

let  slicetext = " slice this string "; //
slicetext.slice(5); // 'e this string '


"Rahul thakur ".slice(1,11); //'ahul thaku'
```
17. `split`
- Parameters : acceps two parameters  first is seprator and  second is  limit which is optional
  - separator(optional) -  we can use  a character  or a Regular expression to split 
  -limit(optional) - length up to you have to split  the  string 
- Return : Returns  an array of strings 
- Example :


```js
let name = " the name of user is  Rahul"; 
name.split(); no parameter // [' the name of user is  Rahul'] return an array with single  element
name.split( " ", 3); // ['', 'the', 'name']
name.split("o"); // [' the name ', 'f user is  Rahul']


```
18. `substring`
- Parameters : Accept two parameters (start index, end index)
  - start index :  the index of the  first character that should also be in  the returned string
  - end index : the index of the  end character  (optional)
- Return : Returns a string  value
- Example :


```js


"Rahul".substring(5,0); // "Rahul"
"Rahul".substring(0,5); // Rahul
"Rahul".substring(5,null); // Rahul // advantage of using substring  you can use undefined null  becuase they result into 0 
"Rahul".substring(undefined, 4); // Rahu 
```

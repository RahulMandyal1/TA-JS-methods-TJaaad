let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array

 const peopleName =  persons.map(people => people.name);
console.log(peopleName);
// 'John', 'Sarah', 'Bob', 'Johnny', 'Ethan', 'Paula', 'Donald', 'Jennifer', 'Courtney', 'Jane', 'John', 'Arya']


// Create an array peopleGrade and store the value of grade key from persons array
const peopleGrade = persons.map(people => people.grade);
console.log(peopleGrade);
// [8, 12, 16, 2, 4, 18, 5, 13, 15, 9, 17, 14]

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex  = persons.map(people => people.sex);
console.log(peopleSex);
// ['M', 'F', 'M', 'M', 'M', 'F', 'M', 'F', 'F', 'F', 'M', 'F']
// Log the filtered named of people in peopleName that starts with 'J' or 'P'

peopleName.filter(name=> name.startsWith("J")|| name.startsWith("P"));
// // ['John', 'Johnny', 'Paula', 'Jennifer', 'Jane', 'John']


// // Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let  filteredName =peopleName.filter(name=> name.startsWith("A")|| name.startsWith("C"));
console.log(filteredName.length); //2

// Log all the filtered male ('M') in persons array
// all  the users male are 
let filteredMale = persons.filter((x)=> x.sex ==='M').map((x)=> x.name);
console.log(filteredMale);//['John', 'Bob', 'Johnny', 'Ethan', 'Donald', 'John']
let filteredMaleObj = persons.filter((x)=> x.sex ==='M');
console.log(filteredMaleObj);

/*
 (6) [{…}, {…}, {…}, {…}, {…}, {…}]
0: {name: 'John', grade: 8, sex: 'M'}
1: {name: 'Bob', grade: 16, sex: 'M'}
2: {name: 'Johnny', grade: 2, sex: 'M'}
3: {name: 'Ethan', grade: 4, sex: 'M'}
4: {name: 'Donald', grade: 5, sex: 'M'}
5: {name: 'John', grade: 17, sex: 'M'}
*/


// Log all the filtered female ('F') in persons array

let filteredFemale = persons.filter((x)=> x.sex ==='F').map((x)=> x.name);
console.log(filteredFemale);//['Sarah', 'Paula', 'Jennifer', 'Courtney', 'Jane', 'Arya']
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let filterNameF = filteredFemale.filter(name=> name.startsWith("C") || name.startsWith("J"))

console.log(filterNameF);// ['Jennifer', 'Courtney', 'Jane']
// Log all the even numbers from peopleGrade array
console.log(
 peopleGrade.filter(num => num %2==0)
); //[8, 12, 16, 2, 4, 18, 14]
// Find the first name that starts with 'J' in persons array and log the object

// Find the first name that starts with 'P' in persons array and log the object

// Find the first name that starts with 'J', grade is greater than 10 and is a female

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(female => female.sex==='F');
console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array
let  malePersons = persons.filter(male => male.sex === 'M');
console.log(malePersons);
// Find the sum of all grades and store in gradeTotal
 let gradeTotal = persons.map(peopleGrade => peopleGrade.grade).reduce((sum , curr)=>{
   sum = curr + sum ;
   return sum ;
 },0);
 console.log(gradeTotal);// 133
 
//  the total  sum of all the grade is 133

// Find the average grade
console.log(gradeTotal/ peopleGrade.length);//11.083333333333334
// Find the average grade of male
const avgMaleGrade = malePersons.reduce((sum, curr)=> {
sum+= curr.grade;
return sum ;
},0) /  malePersons.length;

console.log(avgMaleGrade);//8.666666666666666
// Find the average grade of female
const avgFemaleGrade = femalePersons.reduce((sum, curr)=> {
  sum+= curr.grade;
  return sum ;
  },0) / femalePersons.length;
  
  console.log(avgFemaleGrade); //13.5
// Find the highest grade
const highestGrade = persons.reduce( (max , curr)=>{
  if(curr.grade > max){
    max = curr.grade;
    return max ; 
  }
  return max;
}, 0 );
console.log(highestGrade) // 18
// Find the highest grade in male
const highestGradeInMale = malePersons.reduce( (max , curr)=>{
  if(curr.grade > max){
    max = curr.grade;
    return max ; 
  }
  return max;
}, 0 );
console.log(highestGradeInMale);//17
// Find the highest grade in female
const highestGradeInFemale = femalePersons.reduce( (max , curr)=>{
  if(curr.grade > max){
    max = curr.grade;
    return max ; 
  }
  return max;
}, 0 );
console.log(highestGradeInFemale); // 18
// Find the highest grade for people whose name starts with 'J' or 'P'
const highestGradeForJP = persons.filter(people => {
  
  return people.name.startsWith("J") || people.name.startsWith("P"); 
  
}).reduce( (maxGrade , curr)=>{
  if(curr.grade > maxGrade ){
    maxGrade = curr.grade;
    return maxGrade
  }
  return maxGrade ;
}, 0 )
console.log(highestGradeForJP);  // 18
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changedpeople
peopleGrade.sort(function(a,b){
  return a-b;
}) //[2, 4, 5, 8, 9, 12, 13, 14, 15, 16, 17, 18]
// Sort the peopleGrade in descending order
peopleGrade.sort(function(a,b){
  return b-a ;
})//[18, 17, 16, 15, 14, 13, 12, 9, 8, 5, 4, 2]
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let soredGrades = [...peopleGrade].sort(function (a,b){
  return b-a;
});
// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();//['Arya', 'Bob', 'Courtney', 'Donald', 'Ethan', 'Jane', 'Jennifer', 'John', 'John', 'Johnny', 'Paula', 'Sarah']

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
const sortedNames = [...peopleName].sort();
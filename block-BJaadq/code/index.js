// NOTE: You can not use reduce methods to solve this exercise

// done using only map and  filter 
function countAllPeople() {
  let  count= 0;
    got.houses.map(element=>{
    count +=element.people.length;
  });
 return count;
}

function peopleByHouses() {
  let output = {};
  got.houses.map(house =>{
   output [house.name] = house.people.length;
  });
  return output;
}

function everyone() {
  let everyoneName = [];
  got.houses.filter(houses =>{
    houses.people.map(people=>{
      everyoneName.push(people.name)
    })
  })
  return everyoneName;
}

function nameWithS() {
  let sNamesInPerson = [];
  got.houses.map(house=>{
    house.people.filter(people=>{
      if(people.name.toLowerCase().includes("s")){
        sNamesInPerson.push(people.name);
      }                                                                                                                                                                     
    })
  })
  return  sNamesInPerson;
}

function nameWithA() {
  let aNamesInPerson = [];
  got.houses.map(house=>{
    house.people.filter(people=>{
      if(people.name.toLowerCase().includes("a")){
        aNamesInPerson.push(people.name);
      }                                                                                                                                                                     
    })
  })
  return  aNamesInPerson;
}

function surnameWithS() {
  let surnameInPerson = [];
  got.houses.map(house=>{
    house.people.filter(people=>{
      if(people.name.split(' ')[1].includes("S")){
        surnameInPerson.push(people.name);
      }                                                                                                                                                                     
    })
  })
  return  surnameInPerson;
}

function surnameWithA() {
  let surnameInPerson = [];
  got.houses.map(house=>{
    house.people.filter(people=>{
      if(people.name.split(' ')[1].includes("A")){
        surnameInPerson.push(people.name);
      }                                                                                                                                                                     
    })
  })
  return  surnameInPerson;
}

function peopleNameOfAllHouses() {
  let peopleOfAllHouses = {};
  got.houses.map(house=>{
    house.people.map(peopleName=> {
       peopleOfAllHouses[house.name] = [peopleName.name];
    })
  })
  return peopleOfAllHouses;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}

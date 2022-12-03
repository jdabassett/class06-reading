//basics
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#object_basics
//factory function
function personFunction() {
  return{ name: ["Bob","Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },}
};

const person0 = personFunction();
person0.name;
person0.name[0];
person0.age;
person0.bio();
person0.introduceSelf();



//dote notation
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#dot_notation
//constructor function
function PersonFunction () {
  this.name={
        first: "Jacob",
        last: "Bassett",};
  this.age=33;
  this.bio=function () {
          console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
        };
  this.introduceSelf=function () {
          console.log(`Hi! I'm ${this.name.first}.`);
        };
}
const person1 = new PersonFunction();

person1.bio();
person1.introduceSelf();



//bracket notation
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#bracket_notation

function logProperty(propertyName) {
  if (typeof person1[propertyName] === 'function'){
    person1[propertyName]();
  } else {
    console.log(person1[propertyName]);}
}

logProperty("name");
logProperty("age");
logProperty('bio');



//setting object members
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#setting_object_members

//change property value
person1.age = 34;
person1.bio();
person1['age'] = 102; //when I grow uo....
person1.bio();

//add function
person1.princessBrideQuote0 = function(){
  console.log("Anybody want a peanut?");
}
person1.princessBrideQuote0();

//adding properties and values from objects
const obj0 = "height";
const obj1 = "177cm";
person1[obj0] = obj1;
console.log(person1['height']);



//introducing constructors
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#introducing_constructors

function PersonFunctionWithParameters (firstName, lastName, age) {
  this.name = {first:firstName,
              last:lastName};
  this.age = age;
  this.bio=function () {
    console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
  };
  this.introduceSelf=function () {
    console.log(`Hi! I'm ${this.name.first}.`);
  };
}

const person2 = new PersonFunctionWithParameters('Barney','Rubble',63);
person2.bio();
person2.introduceSelf();




//You've been using objects all along
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#youve_been_using_objects_all_along



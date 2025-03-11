/**
 * Excercise 1
 *  - Read the code below, note that an empty object can be created,
 *    by using curly brackets, or by calling the Object() constructor with the "new" keyword
 *  - Note that the properties of an object can be accessed using dot notation OR bracket notation
 * 
 *  - For this exercise, create two more objects: person3, and person4.
 *      - for person3, use curly brackets to create the object
 *      - for person4, use new Object()
 * 
 *  - Add properties name, age and city to both of the people you create
 *  
 * 
 *  - Use dot notation to print the properties of person3
 *  - Use Bracket notation to print the properties of person4
 * 
 * 
 */

// Creating an empty object using {}
const person1 = {};  // Empty object

// Adding properties using dot notation
person1.name = 'John Doe';
person1.age = 30;
person1.city = 'New York';

console.log(person1.name); // John Doe
console.log(person1.age);  // 30
console.log(person1.city); // New York

// Creating an empty object using new Object()
const person2 = new Object();  // Empty object

// Adding properties using bracket notation
person2['name'] = 'Jane Doe';
person2['age'] = 28;
person2['city'] = 'Chicago';

console.log(person2.name); // Jane Doe
console.log(person2.age);  // 28
console.log(person2.city); // Chicago

// Write your code below












/**
 * Exercise 2:
 *  - Take a look at the object literal for  'user'. 
 * 
 *  - Use either bracket or dot notation to change the values for email and lastName
 * 
 *  - Add a new property with the key 'age', and store an integer as its value
 * 
 *  - Print the properties of user
 */

let user = {
    email: "peachCEO@zmail.com",
    firstName: "Steven",
    lastName: "Careers"
}

// Write your code below, do not modify the user variable directly











/** 
 * Excercise 3: Iterating through an array of objects
 * 
 * This exercise will provide an additional challenge becuase it combines what we've learned about arrays, objects, and loops.
 * 
 * - Take the array of student objects below and use a For Loop to iterate through them.
 * - In each round of the loop, print the name of the student
 * 
 * hint: An object inside of an array may be referenced using the array index, 
 * and that object's properties can be accessed using dot or bracket notation.
 * 
 * example: students[0].name will return "Aubrey"
 * 
 */


const students = [
    { name: 'Aubrey', grade: 40 },
    { name: 'Shawn', grade: 85 },
    { name: 'Megan', grade: 90 },
    { name: 'Kendrick', grade: 99 }
];

// Write your code below









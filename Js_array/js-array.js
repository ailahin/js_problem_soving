/*
1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array */


const occupations= ["Scientiest", "Doctor", "Economics", "Professor", "Student"]
const fruits= ["Apple", "Grapes", "Avacado", "Banana", "Promegarate"]
console.log(fruits)
console.log (fruits[3])
fruits[2]= "Jambura"

console.log(fruits) // result ['Apple', 'Grapes', 'Jambura', 'Banana', 'Promegarate']





/*

2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output

*/

const destinations= ["Pompeii", "Pyramid", "China"]
 destinations.push("Niagara Falls")
 console.log (destinations)
 destinations.push ("Japan", "Village"); // add two array elements
 console.log (destinations)
 destinations.pop()  // remove the last one added
 console.log (destinations)  // result  ['Pompeii', 'Pyramid', 'China', 'Niagara Falls', 'Japan']


/*


3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.

*/

const books=["The Qur'an", "The Productive Muslim: Where Faith Meets Productivity", "Islam and the Destiny of Man", "Hadith: Muhammad's Legacy in the Medieval and Modern World" ]
 
if (books.includes("The Qur'an")){
    

    console.log (books.join("|"), "Best book in the world The Quran is included in the array")
}

else{

    books.unshift("The Qur'an")
}


/*

4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.

*/

const array=["books", "travel", "life", "dream","opportunity", "politics", "business"];
const favourite_numbers = [34, 3, 3, 6, 8, 62, 65, 43, 50]
const work_to_do= ["Cooking Food", "Going Out", "Learning Coding" ]
const current_time= 1700;
const favourite_place= Mosque;
console.log(Array(isArray(array)))
console.log(Array(isArray(favourite_numbers)))
console.log(Array(isArray(current_time)))

if (!Array(isArray(current_time))){

    const date= new date();

    const day= now.getDay();

    console.log(`Code writen time: ${current_time} and current date`, day)
    
}



/*

5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log(). */


/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
const prompt = require ("prompt-sync")({sigint: true})

let scores= prompt('Please enter your score ')
if(scores>=90) {
    console.log("Grade: A")
}
else if (scores<=89 && scores>=80){
    console.log("Grade B")
}
else if (scores<=79 && scores>=70){
    console.log("Grade C")
}
else if (scores<=60 && scores>=69){
    console.log("Grade D")
}
else if (scores<=59){
    console.log("Grade F")
}
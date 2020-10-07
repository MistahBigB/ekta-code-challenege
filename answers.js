//Please put your answers here

// 1) What is this code doing?

// Creates a new array for elements which do not 
// contain the answer no to the mrLevel question 
return !this.allQuestions.filter(
    q => q.subThreadName == this.currentQuestion.subThreadName ) 
    .filter(q => q.mrLevel == this.currentQuestion.mrLevel)
    //  finds if at least one element in q.currentAnswer is "No"
    .some( q => q.currentAnswer == "No")

// The previous example could be improved the following way:
// By assigning the object value initially
// and making the filter exact instead of truthy
const senorLevel = this.subThreadName.currentQuestion.mrLevel

return !this.allQuestions.filter(
    q => q.mrLevel === senorLevel)
    .some(q => q.currentAnswer === "No")


// 2) What is this code doing?

// maps through allQuestions to create individual objects of the key-value pairs, 
// saving it to a new array called oldAssessment
var oldAssessment = this.allQuestions.map(q =>  
    Object.assign({}, q)
    );


// 3) What is this code doing?

// syntax error for "question: any"
// creates a copy of allQuestions and saves it to old
const old = this.allQuestions.map(
    function({question: any}) { 
        return {...question}; 
    })
console.log(old)

// 4) I have an array of objects, they are currently untyped. 
// I'm unsure of how, but mixed in with my normal objects 
// ({ id, name, date, createdAt }), are null values
// How would you eliminate the null values?

const someNulls = [];

const result = someNulls.filter(keys => 
    keys.values(key) !== null)

console.log(result)



// 5) In Angular 2+ how do you pass variable(s) from 
// a parent to a child? answer in concept

<div>
  <header-component />
</div>
class FileOne {
...
private date: any;
headerMessage: string;
...
}
// file 2 -- header-component
import FileOne from './where/it/lives/FileOne.js'
<div>

    <h1 className='date'>On this day, {date}</h1>
    <h2 className='headerMessage'>{headerMessage}!!!</h2>
</div>```
import { workerData } from "worker_threads";

const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let titleCased = () => {
  return tutorials.map( sentence => {
    let letters = sentence.split('');
    let capitalizedLetters = letters.map( letters => letters.charAt(0).toUpperCase() + letters.slice(1) )
    let result = capitalizedLetters.join('')
    return result
  }) 
}

titleCased(tutorials) 



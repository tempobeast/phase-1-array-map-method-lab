const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];




const titleCased = () =>  {
  
  const titleCasedArr = [];
  const splitStrings = tutorials.map(sentence => sentence.split(" "));
  
  for(let i = 0; i < splitStrings.length; i++) {
    for (let j = 0; j < splitStrings[i].length; j++) {
      splitStrings[i][j] = splitStrings[i][j].charAt(0).toUpperCase() + splitStrings[i][j].slice(1); 
    } 
     titleCasedArr.push(splitStrings[i].join(" "));
  }
  return titleCasedArr
}

titleCased()

   
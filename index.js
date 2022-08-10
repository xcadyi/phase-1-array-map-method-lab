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

//function capitalizeEach(sen) {
//  var array1 = sen.split('')
 // var newarray1 = []
  //for(var x = 0; x < array1.length; x++){
    //newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//}
//return newarray1.join(' ') 
//}

function capitalizeEach(str) {
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}

  function titleCased() {
     return tutorials.map(capitalizeEach)
  }
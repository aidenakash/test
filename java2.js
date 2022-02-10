//question 5.............................................................................


//alert( extractCurrencyValue('$120') === 120 );

/*function extractCurrencyValue(str) {
    return +str.slice(1);
  }*/


  // question 4.............................................................................


 // truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
  //truncate("Hi everyone!", 20) = "Hi everyone!"

  /*function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }*/



  //question 2.......................................................................................


 /* function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  alert( filtered ); // 3,1 (matching values)
  
  alert( arr ); // 5,3,8,1 (not modified)*/



  //question 1.................................................................................................


  /*function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }*/



  // question 3..........................................................................................

 
function unique(arr) {
    console.log(unique);
}
let strings = ["React Js", "JavaScript", "React Js", "JavaScript",
 "JavaScript", "JavaScript", "React Js", "React Js"
];
alert( unique(strings) ); // React Js, JavaScript




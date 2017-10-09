//let input = 'I\'m sorry Dave, I\'m afraid I can\'t do that';


const whaleTalk = function() {
  let input = prompt('Enter the text you want translated');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let resultArray = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++){
      if (input[i] === vowels[j]) {
        resultArray.push(input[i]);
      };
    };

    if (input[i] === 'e' || input[i] === 'u') {
      resultArray.push(input[i]);
    };
  };

  alert(resultArray.join('').toUpperCase());
};

whaleTalk();

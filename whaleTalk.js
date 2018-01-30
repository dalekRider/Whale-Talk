//let input = 'I\'m sorry Dave, I\'m afraid I can\'t do that';
let transBtn = document.querySelector('.js-trans-btn');
let msgInput = document.querySelector('.js-trans__input');

const whaleTalk = function() {
  // let input = prompt('Enter the text you want translated');
  let msgValue = msgInput.value.toLowerCase();
  let output = document.querySelector('.js-translator__results');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let resultArray = [];

  if(msgValue === '') {
    output.innerHTML = '<p>A Whale Needs a Word...</p>';
  } else {
    for (let i = 0; i < msgValue.length; i++){
      for (let j = 0; j < vowels.length; j++){
        if (msgValue[i] === vowels[j]) {
          resultArray.push(msgValue[i]);
        };
      };

      if (msgValue[i] === 'e' || msgValue[i] === 'u') {
        resultArray.push(msgValue[i]);
      };
    };
    if(resultArray.length < 1) {
      output.innerHTML = '<p>I find your lack of vowels disturbing...</p>';
      msgInput.value = '';
    } else {
      output.innerHTML = '<p>' + resultArray.join('').toUpperCase() + '</p>';
      msgInput.value = '';
    }
  }
};

let translate = function() {
  whaleTalk();
};

let enterSubmit = function(e) {
  if(e.keyCode === 13) {
    whaleTalk();
  } else {
    return;
  }
};

transBtn.addEventListener('click', translate);
window.addEventListener('keydown', enterSubmit);

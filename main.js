var paragraphText = document.querySelector('#para');
var inputArea = document.querySelector('#text');
var HalfMin = document.querySelector('#halfMin');
var Min = document.querySelector('#Min');
var quarter = document.querySelector('#quarter');
var Mistakes = document.querySelector('#mistakes');
var button = document.querySelector('#button');
var button1 =document.querySelector('.button');

var typingLetters;
var errors = 0;
var time = 30;
var activeCount = HalfMin;
var letters;
let letterIndex = 0;
let divide = 0.5;

// generates random paragraph
function randomPara() {
  var indexRandom = Math.floor(Math.random() * paragraphs.length);
  letters = paragraphs[indexRandom].split("");
  var fragment = document.createDocumentFragment();
  for (let i = 0, len = letters.length; i < len; i++) {
    let spanTag = document.createElement('span');
    spanTag.textContent = letters[i];
    fragment.appendChild(spanTag);
  }
  paragraphText.appendChild(fragment);
}

// when user starts typing
function startTyping() {
  typingLetters = paragraphText.children;
  var typedLetter = inputArea.value[letterIndex];
  if (typedLetter == null) {
    if (letterIndex > 0) {
      if (typingLetters[--letterIndex].classList.contains('wrong')) {
        errors--;
      }
      typingLetters[letterIndex].classList.remove('correct', 'wrong');
    }
  } else {
    typingLetters[letterIndex].classList.add('blink');
    if (typingLetters[letterIndex].textContent === typedLetter) {
      typingLetters[letterIndex].classList.add('correct');
    } else {
      typingLetters[letterIndex].classList.add('wrong');
      errors++;
    }
    letterIndex++;

  }
  Mistakes.textContent = errors;
}

// starts timer
let countdown;

function startTimer() {
  clearRemain();
  countdown = setInterval(() => {
    time--;
    activeCount.textContent = time;
    if (time <= 0) {
      inputArea.disabled = true;
      result();
      clearInterval(countdown);

    }
  }, 1000);

}

// displays the count that user selected
function clearRemain() {
  if (activeCount == HalfMin) {
    Min.className = 'display';
    quarter.className = 'display';
  }
  if (activeCount == Min) {
    halfMin.className = 'display';
    quarter.className = 'display';
  }
  if (activeCount == quarter) {
    Min.className = 'display';
    halfMin.className = 'display';
  }
}

//restarting the test 
function restart() {
  location.reload();
}

// showing result
function result() {
  document.querySelector('.widgets').classList.add('display');
  document.querySelector('.main').classList.add('display');
  document.querySelector('.result').classList.remove('display');
  var wpm = document.querySelector('#speed');
  var characaters = document.querySelector('#char');
  characaters.textContent = `Characters Typed: ${letterIndex-errors}`
  document.querySelector('#wrong-char').textContent = `Mistakes: ${errors}`;
  document.querySelector('#speed').textContent = `${Math.round(((letterIndex - errors)/5 )/ divide)}Wpm`;


}



// event listeners
inputArea.addEventListener("keyup", () => {
  if (letterIndex > 0) {
    typingLetters[letterIndex - 1].classList.remove('blink');
  }

  startTyping();

});

inputArea.addEventListener('keydown', (e) => {
  if (!countdown) {
    startTimer();
  }

});

HalfMin.addEventListener('click', () => {
  activeCount = HalfMin;
  time = 30;
  divide = 0.5;
  HalfMin.className = 'time-active';
  Min.classList.remove('time-active');
  quarter.classList.remove('time-active');
});
Min.addEventListener('click', () => {
  activeCount = Min;
  time = 60;
  divide = 1;
  HalfMin.classList.remove('time-active');
  Min.className = 'time-active';
  quarter.classList.remove('time-active');
});
quarter.addEventListener('click', () => {
  activeCount = quarter;
  time = 15;
  divide = 0.25;
  HalfMin.classList.remove('time-active');
  Min.classList.remove('time-active');
  quarter.className = 'time-active';
});
button.addEventListener('click', restart);
button1.addEventListener('click', restart);


randomPara();
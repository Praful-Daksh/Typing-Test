var paragraphText = document.querySelector('#para');
var inputArea = document.querySelector('#text');
var HalfMin = document.querySelector('#halfMin');
var Min = document.querySelector('#Min');
var quarter = document.querySelector('#quarter');
var Mistakes = document.querySelector('#mistakes');
errors = 0;
var time = 30;
var activeCount = HalfMin;
var letters;
var isTyping = false;
let letterIndex = 0;

HalfMin.addEventListener('click', () => {
  activeCount = HalfMin;
  time = 30;
  HalfMin.className = 'time-active';
  Min.classList.remove('time-active');
  quarter.classList.remove('time-active');
});
Min.addEventListener('click', () => {
  activeCount = Min;
  time = 60;
  HalfMin.classList.remove('time-active');
  Min.className = 'time-active';
  quarter.classList.remove('time-active');
});
quarter.addEventListener('click', () => {
  activeCount = quarter;
  time = 15;
  HalfMin.classList.remove('time-active');
  Min.classList.remove('time-active');
  quarter.className = 'time-active';
});





randomPara();

// generates random paragraph

function randomPara() {
  var indexRandom = Math.floor(Math.random() * paragraphs.length);
  letters = paragraphs[indexRandom].split("");
  for (let i = 0; i < letters.length; i++) {
    let spanTag = `<span>${letters[i]}</span>`;
    paragraphText.innerHTML += spanTag;
  }
}
// when user starts typing

function startTyping() {
  var typingLetters = document.querySelectorAll('span');
  var typedLetter = inputArea.value.split("")[letterIndex];

  if (typedLetter == null) {
    if (letterIndex > 0) {
        if (typingLetters[letterIndex-1].classList.contains('wrong')) {
            errors--;
        }
        letterIndex--; 
        typingLetters[letterIndex].classList.remove("correct", "wrong");
    }
}

  else {
    if (typingLetters[letterIndex].textContent == typedLetter) {
      typingLetters[letterIndex].classList.add('correct');
    }
    else {
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
      clearInterval(countdown);
      inputArea.disabled = true;
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



// events listener s


inputArea.addEventListener("keyup", startTyping);

inputArea.addEventListener('keydown', () => {
  if (!countdown) {
    startTimer();
  }
})
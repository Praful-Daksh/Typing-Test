var paragraphText = document.querySelector('#para');
var inputArea = document.querySelector('#text');
var HalfMin = document.querySelector('#halfMin'); 
var Min = document.querySelector('#Min');
var quarter = document.querySelector('#quarter');
var Mistakes = document.querySelector('#mistakes');
var button = document.querySelector('#button');
var button1 = document.querySelector('.button');

var typingLetters;
var errors = 0;
var time = 30;
var activeCount = HalfMin;
var letters;
let letterIndex = 0;
let divide = 0.5;

function randomPara() {
    paragraphText.innerHTML = '';
    
    var indexRandom = Math.round(Math.random() * paragraphs.length );
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
function startTyping(e) {
    typingLetters = paragraphText.children;
    
    for (let span of typingLetters) {
        span.classList.remove('blink');
    }
    
    if (e && e.key === "Backspace") {
        if (letterIndex > 0) {
            letterIndex--;
            if (typingLetters[letterIndex].classList.contains('wrong')) {
                errors--;
            }
            typingLetters[letterIndex].classList.remove('correct', 'wrong');
            typingLetters[letterIndex].classList.add('blink');
        }
    } else {
        let typedLetter = inputArea.value[letterIndex];
        if (typedLetter != null && letterIndex < typingLetters.length) {
            if (typingLetters[letterIndex].textContent === typedLetter) {
                if (typingLetters[letterIndex].classList.contains('wrong')) {
                    errors--;
                }
                typingLetters[letterIndex].classList.remove('wrong');
                typingLetters[letterIndex].classList.add('correct');
            } else {
                if (!typingLetters[letterIndex].classList.contains('wrong')) {
                    errors++;
                }
                typingLetters[letterIndex].classList.remove('correct');
                typingLetters[letterIndex].classList.add('wrong');
            }
            letterIndex++;
            if (typingLetters[letterIndex]) {
                typingLetters[letterIndex].classList.add('blink');
            }
        }
    }
    Mistakes.textContent = errors;
}

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

function clearRemain() {
    if (activeCount === HalfMin) {
        Min.className = 'display';
        quarter.className = 'display';
    }
    if (activeCount === Min) {
        HalfMin.className = 'display'; 
        quarter.className = 'display';
    }
    if (activeCount === quarter) {
        Min.className = 'display';
        HalfMin.className = 'display'; 
    }
}

function restart() {
    errors = 0;
    letterIndex = 0;
    inputArea.disabled = false;
    inputArea.value = '';
    
    if (countdown) {
        clearInterval(countdown);
        countdown = null;
    }
    
    if (activeCount === HalfMin) {
        time = 30;
    } else if (activeCount === Min) {
        time = 60;
    } else if (activeCount === quarter) {
        time = 15;
    }
    
    activeCount.textContent = time;
    Mistakes.textContent = 0;
    
    document.querySelector('.widgets').classList.remove('display');
    document.querySelector('.main').classList.remove('display');
    document.querySelector('.result').classList.add('display');
    
    randomPara();
}

function result() {
    document.querySelector('.widgets').classList.add('display');
    document.querySelector('.main').classList.add('display');
    document.querySelector('.result').classList.remove('display');
    
    var charactersTyped = letterIndex - errors;
    var wpm = Math.round(charactersTyped / 5 / divide);
    
    document.querySelector('#char').textContent = `Characters Typed: ${charactersTyped}`;
    document.querySelector('#wrong-char').textContent = `Mistakes: ${errors}`;
    document.querySelector('#speed').textContent = `${wpm} WPM`; // Fixed: added space before WPM
}

inputArea.addEventListener("input", (e) => {
    if (e.inputType !== 'deleteContentBackward') {
        startTyping(e);
    }
});

inputArea.addEventListener('keydown', (e) => {
    if (!countdown && (e.key.length === 1 || e.key === "Backspace")) {
        startTimer();
    }
    
    if (e.key === "Backspace") {
        e.preventDefault();
        
        if (letterIndex > 0) {
            letterIndex--;
            
            if (paragraphText.children[letterIndex]) {
                let wasWrong = paragraphText.children[letterIndex].classList.contains('wrong');
                if (wasWrong) {
                    errors--;
                }
                paragraphText.children[letterIndex].classList.remove('correct', 'wrong');
                
                for (let span of paragraphText.children) {
                    span.classList.remove('blink');
                }
                
                paragraphText.children[letterIndex].classList.add('blink');
                
                inputArea.value = inputArea.value.substring(0, letterIndex);

                Mistakes.textContent = errors;
            }
        }
    }
});

HalfMin.addEventListener('click', () => {
    if (countdown) return; 
    
    activeCount = HalfMin;
    time = 30;
    divide = 0.5;
    HalfMin.className = 'time-active';
    Min.classList.remove('time-active');
    quarter.classList.remove('time-active');
    HalfMin.textContent = time; 
});

Min.addEventListener('click', () => {
    if (countdown) return; 
    
    activeCount = Min;
    time = 60;
    divide = 1;
    HalfMin.classList.remove('time-active');
    Min.className = 'time-active';
    quarter.classList.remove('time-active');
    Min.textContent = time;
});

quarter.addEventListener('click', () => {
    if (countdown) return; 
    
    activeCount = quarter;
    time = 15;
    divide = 0.25;
    HalfMin.classList.remove('time-active');
    Min.classList.remove('time-active');
    quarter.className = 'time-active';
    quarter.textContent = time; 
});

button.addEventListener('click', restart);
button1.addEventListener('click', restart);

randomPara();
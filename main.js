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
let currentWordStart = 0;
let canBackspace = true;

function randomPara() {
    paragraphText.innerHTML = '';

    var indexRandom = Math.round(Math.random() * paragraphs.length);
    letters = paragraphs[indexRandom].split("");
    var fragment = document.createDocumentFragment();

    for (let i = 0, len = letters.length; i < len; i++) {
        let spanTag = document.createElement('span');
        spanTag.textContent = letters[i];
        fragment.appendChild(spanTag);
    }
    paragraphText.appendChild(fragment);
}

// Find the start of current word
function findCurrentWordStart(index) {
    while (index > 0 && letters[index - 1] !== ' ') {
        index--;
    }
    return index;
}

// Find the end of current word
function findCurrentWordEnd(index) {
    while (index < letters.length && letters[index] !== ' ') {
        index++;
    }
    return index;
}

// Check if current word is completed correctly
function isCurrentWordComplete() {
    let wordEnd = findCurrentWordEnd(currentWordStart);
    let wordLength = wordEnd - currentWordStart;
    
    // Check if we've typed all letters of the current word
    if (letterIndex < wordEnd) {
        return false;
    }
    
    // Check if all letters in the word are correct
    for (let i = currentWordStart; i < wordEnd; i++) {
        if (typingLetters[i] && typingLetters[i].classList.contains('wrong')) {
            return false;
        }
    }
    
    return true;
}

// Move to next word
function moveToNextWord() {
    // Find the next word start (skip spaces)
    let nextWordStart = letterIndex;
    while (nextWordStart < letters.length && letters[nextWordStart] === ' ') {
        // Mark spaces as correct
        if (typingLetters[nextWordStart]) {
            typingLetters[nextWordStart].classList.remove('wrong');
            typingLetters[nextWordStart].classList.add('correct');
        }
        nextWordStart++;
    }
    
    letterIndex = nextWordStart;
    currentWordStart = nextWordStart;
    canBackspace = false; // Disable backspace until user starts typing new word
    
    // Update blinking cursor
    for (let span of typingLetters) {
        span.classList.remove('blink');
    }
    if (typingLetters[letterIndex]) {
        typingLetters[letterIndex].classList.add('blink');
    }
}

// when user starts typing
function startTyping(e) {
    typingLetters = paragraphText.children;

    for (let span of typingLetters) {
        span.classList.remove('blink');
    }

    if (e && e.key === "Backspace") {
        // Only allow backspace if we can backspace and we're not at word boundary
        if (canBackspace && letterIndex > currentWordStart) {
            letterIndex--;
            if (typingLetters[letterIndex].classList.contains('wrong')) {
                errors--;
            }
            typingLetters[letterIndex].classList.remove('correct', 'wrong');
            typingLetters[letterIndex].classList.add('blink');
        }
    } else {
        let typedLetter = inputArea.value[letterIndex - currentWordStart];
        if (typedLetter != null && letterIndex < typingLetters.length) {
            canBackspace = true; // Enable backspace since user is typing
            
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
    currentWordStart = 0;
    canBackspace = true;
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

    // Calculate correct characters (total typed characters minus errors)
    var totalCharactersTyped = letterIndex;
    var correctCharacters = totalCharactersTyped - errors;
    
    // Calculate Gross WPM (includes errors)
    var grossWPM = Math.round((totalCharactersTyped / 5) / divide);
    
    // Calculate Net WPM (excludes errors) - This is the standard preferred method
    var netWPM = Math.round((correctCharacters / 5) / divide);
    
    // Calculate accuracy percentage
    var accuracy = totalCharactersTyped > 0 ? Math.round((correctCharacters / totalCharactersTyped) * 100) : 100;

    document.querySelector('#char').textContent = `Characters Typed: ${totalCharactersTyped} (${correctCharacters} correct)`;
    document.querySelector('#wrong-char').textContent = `Mistakes: ${errors}`;
    document.querySelector('#speed').textContent = `${netWPM} WPM (${accuracy}% accuracy)`;
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

    // Handle space key for word completion
    if (e.key === " ") {
        e.preventDefault();
        
        // Check if current word is complete and correct
        if (isCurrentWordComplete()) {
            inputArea.value = ''; // Clear input
            moveToNextWord(); // Move to next word
        } else {
            // Word is not complete - mark remaining letters as wrong and move to next word
            let wordEnd = findCurrentWordEnd(currentWordStart);
            
            // Mark all remaining letters in the current word as wrong
            for (let i = letterIndex; i < wordEnd; i++) {
                if (typingLetters[i] && !typingLetters[i].classList.contains('wrong')) {
                    typingLetters[i].classList.add('wrong');
                    errors++;
                }
            }
            
            // Move letterIndex to end of current word
            letterIndex = wordEnd;
            
            inputArea.value = ''; // Clear input
            moveToNextWord(); // Move to next word
            
            // Update mistakes display
            Mistakes.textContent = errors;
        }
        return;
    }

    // Handle backspace
    if (e.key === "Backspace") {
        e.preventDefault();

        // Only allow backspace if we can backspace and we're not at word start
        if (canBackspace && letterIndex > currentWordStart) {
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

                // Update input value to match current position within word
                inputArea.value = inputArea.value.substring(0, letterIndex - currentWordStart);

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
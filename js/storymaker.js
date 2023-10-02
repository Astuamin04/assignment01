// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Btn = document.getElementById("noun1");
const verbBtn = document.getElementById("verb");
const adjectiveBtn = document.getElementById("adjective");
const noun2Btn = document.getElementById("noun2");
const settingBtn = document.getElementById("setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackBtn = document.getElementById("playback");
const randomBtn = document.getElementById("random");
const story = document.getElementById("story");

// Constants for student id input
const studentIdInput = document.getElementById("inputStudentId");
const submitStudentIdBtn = document.getElementById("submitStudentId");
const displayStudentId = document.getElementById("studentId");

// Variables for pre-defined arrays
const noun1Array = ["Dog", "Cat", "Child"];
const verbArray = ["runs", "jumps", "plays"];
const adjectiveArray = ["big", "small", "quick"];
const noun2Array = ["ball", "tree", "book"];
const settingArray = ["in the park", "at the beach", "in the library"];

// Helper function to get a random element from an array
function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    choosenNoun1.textContent = randomElement(noun1Array);
}

function verb_on_click() {
    choosenVerb.textContent = randomElement(verbArray);
}

function adjective_on_click() {
    choosenAdjective.textContent = randomElement(adjectiveArray);
}

function noun2_on_click() {
    choosenNoun2.textContent = randomElement(noun2Array);
}

function setting_on_click() {
    choosenSetting.textContent = randomElement(settingArray);
}

// concatenate the user story and display
function playback_on_click() {
    story.textContent = `${choosenNoun1.textContent} ${choosenVerb.textContent} the ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}`;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    playback_on_click();
}

function addStudentId() {
    displayStudentId.textContent = studentIdInput.value ? studentIdInput.value : "No ID/Name provided";
}

/* Event Listeners
-------------------------------------------------- */
noun1Btn.addEventListener('click', noun1_on_click);
verbBtn.addEventListener('click', verb_on_click);
adjectiveBtn.addEventListener('click', adjective_on_click);
noun2Btn.addEventListener('click', noun2_on_click);
settingBtn.addEventListener('click', setting_on_click);
playbackBtn.addEventListener('click', playback_on_click);
randomBtn.addEventListener('click', random_on_click);
submitStudentIdBtn.addEventListener('click', addStudentId);

const slider = document.getElementById("slider");
const lengthDisplay = document.getElementById("lengthDisplay");
const resultBox = document.getElementById("result");

slider.addEventListener("input", () => {
lengthDisplay.textContent = slider.value;
});

function generatePassword() {
let characters = "";
const letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

if (document.getElementById("includeLetters").checked) {
    characters += letters;
}
if (document.getElementById("includeNumbers").checked) {
    characters += numbers;
}
if (document.getElementById("includeSymbols").checked) {
    characters += symbols;
}

if (characters === "") {
    alert("Please select at least one option!");
    return;
}

const length = parseInt(slider.value);
let password = "";
for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
}

resultBox.value = password;
}

function copyToClipboard() {
if (resultBox.value === "") {
alert("Please select at least one option!");
return;
}
resultBox.select();
document.execCommand("copy");
alert("Password copied to clipboard!");
}

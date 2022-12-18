

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

/* get password-el and set it to a variable */

let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")

/* get button-el and set up eventlistener */

let generateBtn = document.getElementById("generate-btn")
generateBtn.addEventListener("click", generatePassword)


/* function that generate password and add it to text element */

function generatePassword() {

    let generatedPasswordOne = ""
    let generatedPasswordTwo = ""
    
    
    for (let i = 0; i < passwordLength; i++) {
        generatedPasswordOne += characters[Math.floor(Math.random() * characters.length)]
        generatedPasswordTwo += characters[Math.floor(Math.random() * characters.length)]
    }

    passwordOneEl.textContent = generatedPasswordOne
    passwordTwoEl.textContent = generatedPasswordTwo
    
}


let letters = "abcdefghijklmnopqrstuvwxyz";
let capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specials = "!@#$%^&*(),.";
let password = "";

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index+1);
}

function randomChar(arr){
    randomNumber = Math.floor(Math.random() * arr.length);
    return arr.substring(randomNumber, randomNumber + 1);
}

function specialAdd(a){
    for (let i = 0; i < Math.random()*(password.length/4 - 1) + 1; i++){
        let randomIndex = Math.floor(Math.random() * password.length);
        password = password.replaceAt(randomIndex, randomChar(a));
    }
}

function generatePassword(minlength, capital, number, special){
    console.log(minlength + capital + number + special);
    password = "";

    if (!minlength || minlength <= 0){
        document.getElementById("password").innerHTML = "Enter the length!";
    } else {
        for (let i = 0; i<minlength; i++){
            password += randomChar(letters);
        }

        if (capital) specialAdd(capitals);
        if (number) specialAdd(numbers);
        if (special) specialAdd(specials);

        document.getElementById("password").innerHTML = password;
    }
}

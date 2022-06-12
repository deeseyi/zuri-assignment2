let user = {
    name: "",
    score: 0
}


function guessNumber() {
    getUsername()
    let number = 2
    let randomNumber = generateRandomNumber(1, number)
    let guess = getInput(number)
    while (guess === randomNumber) {
        alert("you guessed it!")
        user.score++
        Cookies.set('score', user.score)
        number += 1
        randomNumber = generateRandomNumber(1, number)
        guess = getInput(number)
    
    }
    if (guess !== randomNumber) {
        user.score = Cookies.get('score')
        if (Cookies.get('score')) {
            score = Cookies.get('score')
        }
        else {
            score = 0
        }
        alert(`you guessed ${guess} and the correct number was ${randomNumber}, ${user.name} your score is ${user.score} `)
    }

}

function getUsername() {
    if (Cookies.get('name')) {
        user.name = Cookies.get('name')
        Cookies.set('score', 0)
        alert(`Welcome back ${user.name}!`)
    }
    else {
        user.name = prompt("what's your name?")
        Cookies.set('name', user.name, { expires: 2, path: '/' })
    }

}

function getInput(number) {
    let input = parseInt(prompt(`guess a number between 1 and ${number}`))
    while (typeof(input) !== 'number' || isNaN(input) )  { 
        alert("please enter a number")
        input = parseInt(prompt(`guess a number between 1 and ${number}`))

    }
    return input
}

function generateRandomNumber(a, b) {
    return Math.floor(Math.random() * b) + a;
}

function showLastScore () {
    if (Cookies.get('score')) {
        user.score = Cookies.get('score')
        alert(`your last score was ${user.score}`)
    } else {
        alert("you have no score")
    }
    
}



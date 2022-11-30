// DOM elements
let time = document.getElementById('time'),
    greetings= document.getElementById('greetings'),
    names = document.getElementById('name'),
    container = document.getElementsByClassName('container')

// getting time
const getTime = () => {
    // let timenow = new Date(2022,12,2,14,30,30),
    let timenow = new Date(),
        hours = timenow.getHours(),
        minutes = timenow.getMinutes(),
        seconds = timenow.getSeconds()

    // set am or pm
    const ampm = hours < 12 ? "AM" : "PM"

    // 12hr format in am and pm
    hours = hours%12 || 12 

    // incerting time in the html
    time.innerHTML = `${hours} : ${setZero(minutes)} : ${setZero(seconds)} ${ampm}`

    setTimeout(getTime, 1000)
}

// fixing single digits with zero

const setZero = (a) => {
    if (parseInt(a,10) < 10) {
        return a = "0" + a    
    } else {
        return a
    }
}

// set backgrounf images
const backImg = () => {
    // let timenow = new Date(2022,12,2,19,30,30),
    let timenow = new Date(),
        hours = timenow.getHours(),
        minutes = timenow.getMinutes(),
        seconds = timenow.getSeconds()

    if (hours < 12) {
        document.body.style.backgroundImage = "url('images/morning.jpg')"

        greetings.style.color = "black"
        names.style.color = "black"
        time.style.color = "black"
        // container.style.border = ".2em solid black"

        greetings.textContent = "Good Morning"
    } else if (hours<15) {
        document.body.style.backgroundImage = "url('images/afternoon.jpg')"
        greetings.style.color = "black"
        names.style.color = "black"
        time.style.color = "black"
        greetings.textContent = "Good Afternoon"
    } else {
        document.body.style.backgroundImage = "url('images/evening.jpg')"
        greetings.textContent = "Good Evening"
    }
}

// set the name
const setName = (e) => {
    if (e.type === 'keypress') {
        // on press of enter
        if (e.keyCode == 13) { 
            localStorage.setItem('name', e.target.innerText)
            names.blur()       
        }
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
}

// storing info in local storage
const getName = () => {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
        names.textContent = "[EnterName]"
    } else {
        names.textContent = localStorage.getItem('name')
    }
}

// event listeneras
names.addEventListener('keypress', setName)
names.addEventListener('blur', setName)


// calling functions
getTime()
backImg()
getName()
const homeCountElement = document.querySelector(".home__count")
const guestCountElement = document.querySelector(".guest__count")
let homeCount = 0
let guestCount = 0

function addOnePointHome() {
    homeCount++
    homeCountElement.textContent = homeCount
}

function addTwoPointsHome() {
    homeCount += 2
    homeCountElement.textContent = homeCount
}

function addThreePointsHome() {
    homeCount += 3
    homeCountElement.textContent = homeCount
}

function addOnePointGuest() {
    guestCount++
    guestCountElement.textContent = guestCount
}

function addTwoPointsGuest() {
    guestCount += 2
    guestCountElement.textContent = guestCount
}

function addThreePointsGuest() {
    guestCount += 3
    guestCountElement.textContent = guestCount
}

function clearCount() {
    homeCountElement.textContent = 0    
    guestCountElement.textContent = 0  
    homeCount = 0
    guestCount = 0
}

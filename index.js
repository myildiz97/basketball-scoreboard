let homeCount = 0
let guestCount = 0

let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")

function incrementOneHome() {
    homeCount += 1
    homeEl.textContent = homeCount
}

function incrementOneGuest() {
    guestCount += 1
    guestEl.textContent = guestCount
}

function incrementTwoHome() {
    homeCount += 2
    homeEl.textContent = homeCount
}

function incrementTwoGuest() {
    guestCount += 2
    guestEl.textContent = guestCount
}

function incrementThreeHome() {
    homeCount += 3
    homeEl.textContent = homeCount
}

function incrementThreeGuest() {
    guestCount += 3
    guestEl.textContent = guestCount
}

function resetHome() {
    homeCount = 0
    homeEl.textContent = 0
}

function resetGuest() {
    guestCount = 0
    guestEl.textContent = 0
}
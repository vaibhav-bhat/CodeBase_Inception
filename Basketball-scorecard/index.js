let homeCount= 0

let guestCount = 0

let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")

function incrementOneHome()
{ 
    console.log(homeScore)
    console.log(homeCount)
    homeCount+=1
    homeScore.innerText = homeCount
}

function incrementTwoHome()
{
 
    homeCount+=2
    homeScore.textContent = homeCount
}
function incrementThreeHome()
{
    
    homeCount+=3
    homeScore.textContent = homeCount
}

function incrementOneGuest()
{

    guestCount+=1
    guestScore.textContent = guestCount
}
function incrementTwoGuest()
{

    guestCount+=2
    guestScore.textContent = guestCount
}

function incrementThreeGuest()
{
    guestCount+=3
    guestScore.textContent = guestCount
}

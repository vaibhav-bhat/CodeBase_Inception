/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtnEl = document.getElementById("convert-btn")
let value
let c1El = document.getElementById("c1")
let c2El = document.getElementById("c2")
let c3El = document.getElementById("c3")


let feetVal, meterVal, kiloVal, poundVal, literVal, gallonVal;

convertBtnEl.addEventListener("click", function()
{
    const inputEl = document.getElementById("inputNum")
    value = Number(inputEl.value)
    convert()
    populate()
}
)
function convert()
{
    feetVal = 3.281 * value

    meterVal = Number(value/3.281)


    gallonVal = 0.264 * value
    literVal = Number(value/0.264)

    poundVal = 2.204 * value
    kiloVal =  Number(value/2.204)
}
function populate()
{
    c1El.textContent = `${value} meters = ${feetVal.toFixed(3)} feet | ${value} feet = ${meterVal.toFixed(3)} meters`
    c2El.textContent = `${value} liters = ${gallonVal.toFixed(3)} gallons | ${value} gallons = ${literVal.toFixed(3)} liters`
    c3El.textContent = `${value} kilos = ${poundVal.toFixed(3)} pounds | ${value} pounds = ${kiloVal.toFixed(3)} kilos`

}
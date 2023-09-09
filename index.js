const convertBtn = document.getElementById("convert-btn")
const lengthConversion = document.getElementById("length-conversion")
const volumeConversion = document.getElementById("volume-conversion")
const massConversion = document.getElementById("mass-conversion")

convertBtn.addEventListener("click", function() {
    const unitNumber = parseInt(document.getElementById("unit-number").value)
    const metersToFeet = unitNumber * 3.281
    const feetToMeters = unitNumber / 3.281
    const litersToGallons = unitNumber * 0.264
    const gallonsToLiters = unitNumber / 0.264
    const kilosToPounds = unitNumber * 2.204
    const poundsToKilos = unitNumber / 2.204
    lengthConversion.innerHTML = `${unitNumber} meters = ${metersToFeet.toFixed(3)} feet | ${unitNumber} feet = ${feetToMeters.toFixed(3)} meters`
    volumeConversion.innerHTML = `${unitNumber} liters = ${litersToGallons.toFixed(3)} gallons | ${unitNumber} gallons = ${gallonsToLiters.toFixed(3)} liters`
    massConversion.innerHTML = `${unitNumber} kilograms = ${kilosToPounds.toFixed(3)} pounds | ${unitNumber} pounds = ${poundsToKilos.toFixed(3)} kilograms`    
})
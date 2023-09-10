const convertBtn = document.getElementById("convert-btn")
const btmEl = document.getElementById("btm-el")

const conversionInfo = [
    {
        title: "Length (Meter/Feet)",
        measurement1: "meters",
        measurement2: "feet",
        conversionValue: 3.281
    },
    {
        title: "Volume (Liters/Gallons)",
        measurement1: "liters",
        measurement2: "gallons",
        conversionValue: 0.264
    },
    {
        title: "Mass (Kilograms/Pounds)",
        measurement1: "kilograms",
        measurement2: "pounds",
        conversionValue: 2.204
    }
]

for (let i = 0; i < conversionInfo.length; i++) {
    btmEl.innerHTML += `
    <div class="conversion-container">
        <h3>${conversionInfo[i].title}</h3>
        <p>${conversionInfo[i].measurement1} to ${conversionInfo[i].measurement2} | ${conversionInfo[i].measurement2} to ${conversionInfo[i].measurement1}</p>
    </div>
    `
}

convertBtn.addEventListener("click", function() {
    btmEl.innerHTML = " "
    const inputValue = parseInt(document.getElementById("input-value").value)
    for (let i = 0; i < conversionInfo.length; i++) {
        const conv1 = (inputValue * conversionInfo[i].conversionValue).toFixed(3)
        const conv2 = (inputValue / conversionInfo[i].conversionValue).toFixed(3)
        btmEl.innerHTML += `
        <div class="conversion-container">
            <h3>${conversionInfo[i].title}</h3>
            <p>${inputValue} ${conversionInfo[i].measurement1} = ${conv1} ${conversionInfo[i].measurement2} | ${inputValue} ${conversionInfo[i].measurement2} = ${conv2} ${conversionInfo[i].measurement1}</p>
        </div>
        `
    }
})

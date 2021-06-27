main()

function main() {

    // how many points has the voting rate increased or decreased
    const regDelta = document.getElementById('regDelta')
    regDelta.addEventListener('input', updateValue);

}

function updateValue(e) {
    // convert input to percent
    let input = e.target.value
    // update document to reflect input
    updateUserInput(input)

    // convert for percent calculations
    input = input / 100

    regRateCalc(input)
    yieldRateCalc(input)

}

function regRateCalc(regChange) {
    // from 2016 NSLVE national report
    let previousYield = .627

    // produce result for user
    let vrChange = regChange * previousYield * 100

    vrChange = vrChange.toFixed(2).concat("% ")

    // update website with info
    document.getElementById('regChange').textContent = vrChange
}

function yieldRateCalc(yieldChange) {
    let previousRegRate = .736

    // produce result for user
    let vrChange = yieldChange * previousRegRate * 100

    vrChange = vrChange.toFixed(2).concat("% ")

    // update website with info
    document.getElementById('yieldChange').textContent = vrChange

}

function updateUserInput(input) {
    let fields = document.getElementsByClassName('userInput')
    for (field of fields) {
        console.log(field.textContent)
        field.textContent = input.toString().concat("% ")
    }
}
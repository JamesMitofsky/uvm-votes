main()

function main() {

    // how many points has the voting rate increased or decreased
    const regDelta = document.getElementById('regDelta')
    regDelta.addEventListener('input', updateValue);

}

function updateValue(e) {
    // convert input to percent
    let input = parseInt(e.target.value)
    updateResults("userInput", input)

    // convert for percent calculations
    // input = input / 100

    let regRate = regRateCalc(input)
    updateResults("regChange", regRate)

    let yieldRate = yieldRateCalc(input)
    updateResults("yieldChange", yieldRate)




}

function regRateCalc(regChange) {
    // from 2016 NSLVE UVM report
    let previousYield = 62.7

    // produce result for user
    return regChange * previousYield / 100

}

function yieldRateCalc(yieldChange) {
    // from 2016 NSLVE UVM report
    let previousRegRate = 73.6
    // produce result for user
    return yieldChange * previousRegRate / 100
}

function updateResults(className, updatedValue) {

    // get HTML collection
    let fields = document.getElementsByClassName(className)

    // catch user input to avoid trailing zeros
    if (className == "userInput") {
        for (field of fields) {
            // select text attribute; convert value to string, add percent symbol; update value
            formattedValue = updatedValue.toString().concat("% ")
            field.textContent = formattedValue
        }
        return
    }

    // handle presenting deltas and results
    for (field of fields) {
        // select text attribute; convert value to string, add percent symbol; update value
        roundedNumber = Math.round(updatedValue * 100) / 100
        formattedValue = roundedNumber.toString().concat("% ")
        field.textContent = formattedValue
    }

}
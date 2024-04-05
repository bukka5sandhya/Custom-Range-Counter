let fromUserInputEle = document.getElementById("fromUserInput");
let toUserInputEle = document.getElementById("toUserInput");
let counterTextEle = document.getElementById("counterText");

function numbersDisplay(fromCount, toCount) {
    let presentcount = fromCount;
    counterTextEle.textContent = presentcount;

    let timeId = setInterval(function() {
        if (presentcount < toCount) {
            presentcount = presentcount + 1;
            counterTextEle.textContent = presentcount;
        } else {
            clearInterval(timeId);
        }
    }, 1000);

}


function ButtonClicked() {
    let fromValues = fromUserInputEle.value;
    let toValues = toUserInputEle.value;

    if (fromValues === "") {
        alert("Enter the From Value");
    } else if (toValues === "") {
        alert("Enter the To Value");
    } else {
        let fromIntegerVal = parseInt(fromValues);
        let toIntegerVal = parseInt(toValues);

        numbersDisplay(fromIntegerVal, toIntegerVal);
    }

}
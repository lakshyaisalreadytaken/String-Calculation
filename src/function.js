function strCalculator(str) {
    // if string is empty will return 0;
    if (str == "" || str.length == 0) return 0;
    let arr = str.split("");
    let numArr = [], total = "";
    arr.map((e) => {
        if (/\d/.test(e) || (e == "-" && total == "")) {
            total += e;
        } else {
            if (total != "" && /\d/.test(total)) {
                numArr.push(total);
                total = "";
            } else {
                total = "";
            }
        }
    })
    if (total != "") {
        numArr.push(total);
        total = "";
    }
    return getTotal(numArr);
}

function getTotal(arr) {
    let total = 0;
    let values = checkNegative(arr);
    if (Array.isArray(values)) {
        values.map(e => {
            if (parseInt(e) > 1000) {
                total += 1;
            } else {
                total += parseInt(e);
            }
        })
        return total;
    } else {
        return values;
    }
}

function checkNegative(arr) {
    let isNeg = false;
    // checking any negative value found or not
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) < 0) {
            isNeg = true;
            str = str + arr[i] + ","
        }
    }
    if (isNeg) {
        return "negative numbers not allowed " + str.slice(0, -1);
    } else {
        return arr;
    }
}

// var res = strCalculator("//[*][%]\n11*2%30&1001)1000,-1,-3,-2,-5&-9");
// console.log(res);

module.exports = strCalculator;
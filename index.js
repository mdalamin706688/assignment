//---------Problem 1 Start -------//
// this function return value of a where it will multiply by 3 then add by 10 then divide by 2 the substract by 5
function mindGame(num) {
    if (typeof num !== "number") {
        return "Arguments must be strings";
    }
    let result = (((num * 3) + 10) / 2) - 5;
    return result;
}

const result1 = mindGame(5);

console.log(result1);

//---------Problem 1 End -------//
//---------Problem 2 Start -------//
// This function will take string as a arguments will calculate the given strings character and will return it is odd or even
function evenOdd(str) {

    if (typeof str !== "string") {
        return "Arguments must be strings";
    }

    let length = str.length;
    if (length % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}


const result2 = evenOdd('chatgpt');
console.log(result2);
//--------- Problem 2 end -------//
//---------Problem 3 Start -------//
// this function will take arguments as a number and will compare with 7 if it is less than 7 after substraction then it will return the result otherwise it will return 2 * argument
function isLGSeven(num) {

    if (typeof num !== "number") {
        return "Arguments must be numbers";
    }

    let value = num - 7;

    if (value < 7) {
        return value;
    } else {
        return num * 2;
    }
}


const result3 = isLGSeven(6);
console.log(result3);
//---------Problem 3 End -------//
//---------Problem 4 Start -------//
//this function will return how many minus value into a array so the return will be how many bad data
function findingBadData(arr) {

    if (!Array.isArray(arr)) {
        return `Expected an array, but got ${typeof arr}`;
    }

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

let data = [2, -5, -7, -13];

const result4 = findingBadData(data);

console.log(result4);
//---------Problem 4 End -------//
//---------Problem 5 Start -------//
// this function will take 3 arguments and will return total diamond if the total_diamond will greate than 2 * 1000 then it will substract 2000 from total diamond
function gemsToDiamond(one, two, three) {

    if (typeof one !== "number" || typeof two !== "number" || typeof three !== "number") {
        return "Three arguments must be numbers";
    }

    total_diamond = (one * 21) + (two * 32) + (three * 43);

    if (total_diamond > 1000 * 2) {
        return total_diamond - 2000;
    } else {
        return total_diamond;
    }

}


const result5 = gemsToDiamond(20, 200, 50);
console.log(result5);
//---------Problem 5 End -------//
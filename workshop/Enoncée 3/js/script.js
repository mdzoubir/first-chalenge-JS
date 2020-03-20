function nextInLine(arr, item) {
    arr.push(item);
    console.log(testArr)
    let renvoyer = arr.shift();
    return renvoyer;
}
let testArr = [1, 2, 3, 4, 5]

console.log(nextInLine(testArr, 6));
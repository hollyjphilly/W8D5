const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

console.log('a')

function askIfGreaterThan(el1, el2, callback) {
    // Prompt user to tell us whether el1 > el2; pass true back to the
        rl.question(`Is ${el1} > ${el2}? Type yes or no:\n`, (answer) => {
            if(answer === "yes"){
                callback(true);
            }
            callback(false);
        })
    // callback if true; else false.
    // rl.close();
}
askIfGreaterThan(3, 4, function (a) { console.log(a) })
// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
    }

    // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// function absurdBubbleSort(arr, callback) {
//     let sorted = false;
//     while (!sorted){
//         sorted = true;
//         for (let i = 0; i < arr.length - 1; i++){
//             if (){
//                 let x = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = x;
//                 sorted = false;
//             }
//         }
//     }
//     return arr
// }
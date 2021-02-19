const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

function addNumbers(sum, numsLeft, completionCallback) {
    // console.log(`${rl}`)
    if (numsLeft > 0) {
        rl.question("Put in a number", (answer) => {
            
            let num = parseInt(answer);
            sum += num;
            console.log(`${sum}`);
            addNumbers(sum, numsLeft-1, completionCallback);
        });
    };

    if (numsLeft === 0) { completionCallback(sum) };

};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
function findSquareRoot() {
    // Display an prompt box to the user to enter a number
    let number = prompt('Enter a number: ');

    // Calculate the square root of the number
    let squareRoot = Math.sqrt(number);

    // Display the result
    console.log(`The square root of ${number} is ${squareRoot}`);

    //mention a message to the user in the dom that the result is displayed in the console
    document.getElementById("result").innerHTML = "The result is displayed in the console";

}
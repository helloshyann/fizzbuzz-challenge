function fizzBuzz(){

    let fizz = 3;
    let buzz = 5;

    //Get numbers from the UI
    fizz = document.getElementById("fizz").value;
    buzz = document.getElementById("buzz").value;

    //Turn potential decimal numbers to whole numbers
    fizz = parseInt(fizz);
    buzz = parseInt(buzz);

    //Check if input are numbers
    if (Number.isInteger(fizz) && Number.isInteger(buzz)) {

        //Generate numbers 1 to 100 and check for multiples of the fizz and buzz values
        let numbers = fizzleNumbers(fizz, buzz);

        //Display the numbers on the page
        displayFizzBuzz(numbers)

    } else {
        
    }

}

function fizzleNumbers(fizz, buzz){
    let numbers = [];

    for (let i = 1; i <= 100; i++) {
        if (i % fizz == 0 && i % buzz == 0){
            numbers.push(" FizzBuzz")
        }
        else if (i % fizz == 0){
            numbers.push(" Fizz")
        }
        else if (i % buzz == 0){
            numbers.push(" Buzz")
        }
        else {
            numbers.push(" " + i)
        }
    }

    return numbers;
}

function displayFizzBuzz(numbers){
    
    let tableBody = document.getElementById("results");
    //Clear out previous rows
    tableBody.innerHTML = "";

    for (let index = 0; index < numbers.length; index++) {
        
        let tableRow = "";

        let number = numbers[index];

        tableRow = `<tr><td class="${number}">${number}</td></tr>`;
        
        tableBody.innerHTML += tableRow;
        
    }
}
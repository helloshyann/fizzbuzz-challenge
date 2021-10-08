function fizzBuzz(){

    let fizz = 3;
    let buzz = 5;

    // Get numbers from the UI
    fizz = document.getElementById("fizzInput").value;
    buzz = document.getElementById("buzzInput").value;

    // Turn potential decimal numbers to whole numbers
    fizz = parseInt(fizz);
    buzz = parseInt(buzz);

    // Check if input are numbers
    if (Number.isInteger(fizz) && Number.isInteger(buzz)) {

        // Generate numbers 1 to 100 and check for multiples of the fizz and buzz values
        let numbers = fizzleNumbers(fizz, buzz);

        // Display the numbers on the page
        displayFizzBuzz(numbers)

    } else {
        Swal.fire({
            title: "Uh oh!",
            text: "You must enter two values to play FizzBuzz.",
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#f95779",
            focusConfirm: false,
            showCloseButton:true,
          });;
    }

}

function fizzleNumbers(fizz, buzz){
    let numbers = [];

    for (let i = 1; i <= 100; i++) {
        if (i % fizz == 0 && i % buzz == 0){
            numbers.push("FizzBuzz")
        }
        else if (i % fizz == 0){
            numbers.push("Fizz")
        }
        else if (i % buzz == 0){
            numbers.push("Buzz")
        }
        else {
            numbers.push(i)
        }
    }
    return numbers;
}

function displayFizzBuzz(numbers){
    
    // Get variable element from the DOM
    let tableBody = document.getElementById("results");

    // Get the template to make the table
    let rowTemplate = document.getElementById("fbTemplate");

    // Clear out previous rows
    tableBody.innerHTML = "";

    for (let i = 0; i < numbers.length; i += 5) {

        // Grab HTML from DOM with Node to make copies and modify each with individual changes
        const tableRow = document.importNode(rowTemplate.content, true);

        // Find the element in the Node I want to modify
        let rowCols = tableRow.querySelectorAll("td");

        // Add a class from CSS to the table cell
        // Add text to the table cell
        rowCols[0].classList.add(numbers[i]);
        rowCols[0].textContent = numbers[i];

        rowCols[1].classList.add(numbers[i+1]);
        rowCols[1].textContent = numbers[i+1];

        rowCols[2].classList.add(numbers[i+2]);
        rowCols[2].textContent = numbers[i+2];

        rowCols[3].classList.add(numbers[i+3]);
        rowCols[3].textContent = numbers[i+3];

        rowCols[4].classList.add(numbers[i+4]);
        rowCols[4].textContent = numbers[i+4];

        tableBody.appendChild(tableRow);
        
    }
}


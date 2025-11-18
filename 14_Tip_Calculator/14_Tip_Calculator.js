// Function to calculate Tip and Total Amount
function Tipcalculate() {

    // Get the bill amount from the input field and convert it to a floating number
    let billAmount = parseFloat(document.getElementById("billAmount").value);

    // Get the tip percentage from the input field and convert it to a floating number
    let percentage = parseFloat(document.getElementById("percentage").value);

    // Calculate the tip amount using the formula: Tip = Bill × (Percentage / 100)
    let tip = billAmount * (percentage / 100);

    // Calculate the total amount (bill + tip)
    let total = billAmount + tip;

    // Display the calculated tip amount (rounded to 2 decimal places)
    document.getElementById("result_amount").innerText =
        "Tip Amount: " + tip.toFixed(2);

    // Display the total amount including tip (rounded to 2 decimal places)
    document.getElementById("result_percentage").innerText =
        "Total Amount: " + total.toFixed(2);
}

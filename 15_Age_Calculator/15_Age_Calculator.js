// Function to calculate Age in Years, Months, and Days
function calculateAge() {

    // Get the selected birth date from the input field
    let birth = document.getElementById("birthDate").value;

    // If no date is selected, show error and stop the function
    if (!birth) {
        document.getElementById("result").innerText = "Please select your birth date!";
        return;
    }

    // Convert the selected date into a Date object
    let birthDate = new Date(birth);

    // Get today's date
    let today = new Date();

    // Calculate year difference
    let years = today.getFullYear() - birthDate.getFullYear();

    // Calculate month difference
    let months = today.getMonth() - birthDate.getMonth();

    // Calculate day difference
    let days = today.getDate() - birthDate.getDate();

    // ---------------------------
    // Adjust days if negative
    // ---------------------------
    // Example: Birth date = 25th, Today = 10th → days will be negative
    if (days < 0) {
        months--; // Borrow 1 month
        // Add number of days in the previous month
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    // ---------------------------
    // Adjust months if negative
    // ---------------------------
    // Example: Birth month = December, Today = March → months will be negative
    if (months < 0) {
        years--;    // Borrow 1 year
        months += 12;
    }

    // Display final age result
    document.getElementById("result").innerText =
        "Age: " + years + " Years, " + months + " Months, " + days + " Days";
}

// Function to reverse the input string
function reverseString() {

    // Get the string entered in the input field with id "inputStr"
    let str = document.getElementById("inputStr").value;

    // Convert string into array using split("")
    // Reverse the array using reverse()
    // Join the array back into a string using join("")
    let reversed = str.split("").reverse().join("");

    // Display the reversed string in the result area
    document.getElementById("result").innerText = "Reversed String: " + reversed;
}

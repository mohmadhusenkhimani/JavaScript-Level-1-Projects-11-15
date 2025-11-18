// Function to count total vowels in the input text
function countVowels() {

    // Get the input text from the textbox
    let text = document.getElementById("textInput").value;

    // Convert entire text to lowercase so checking becomes easy (A/a both treated same)
    text = text.toLowerCase();

    // String containing all vowels
    let vowels = "aeiou";

    // Variable to store total vowel count
    let count = 0;

    // Loop through each character of the input text
    for (let i = 0; i < text.length; i++) {

        // Check if the current character exists inside the vowels string
        if (vowels.includes(text[i])) {

            // If it is a vowel, increase the count
            count++;
        }
    }

    // Show the total vowels found in the text
    document.getElementById("result").innerText = "Total Vowels: " + count;
}

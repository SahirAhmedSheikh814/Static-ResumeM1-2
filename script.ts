// Select the button and interest section elements
const toggleInterestButton = document.getElementById("toggleInterestButton") as HTMLButtonElement;
const interestSection = document.getElementById("interestSection") as HTMLElement;

// Initially hide the interest section
interestSection.style.display = "none";

// Function to toggle visibility of the interest section
function toggleInterestVisibility(): void {
    if (interestSection.style.display === "none") {
        interestSection.style.display = "block";  // Show the section
    } else {
        interestSection.style.display = "none";   // Hide the section
    }
}

// Add an event listener to the button to trigger the toggle function
toggleInterestButton.addEventListener("click", toggleInterestVisibility);

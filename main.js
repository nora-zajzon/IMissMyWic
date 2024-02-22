document.addEventListener('DOMContentLoaded', function() {
    // Variable to store reference to the currently playing audio
    var currentAudio = null;

    // Function to play the sound
    function playSound(soundFile) {
        // If there's an existing audio element, stop and reset it
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        } else {
            // Create a new audio element
            currentAudio = new Audio();
        }

        // Set the audio source
        currentAudio.src = soundFile;

        // Play the audio
        currentAudio.play();
    }

    // Function to stop the currently playing audio
    function stopMusic() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            // Remove the audio source to prevent any further play
            currentAudio.src = "";
            // Help with garbage collection by nullifying the reference
            currentAudio = null;
        }
    }

    // Get the submit button element
    var submitButton = document.getElementById('submit');

    // Add event listener for submit button click
    submitButton.addEventListener('click', submitForm);

    // Function to handle form submission
    function submitForm(event) {
        // Prevent default form submission
        event.preventDefault();

        // Get the selected genre
        var selectedGenre = document.getElementById('genre').value;

        // Check if there's currently playing audio and pause it
        if (currentAudio) {
            currentAudio.pause();
        }

        // Play the sound based on the selected genre
        playSound(selectedGenre + '.mp3');
    }

    // Get the stop music button element
    var stopButton = document.getElementById('stopbutton');

    // Add event listener for stop music button click
    stopButton.addEventListener('click', stopMusic);
});
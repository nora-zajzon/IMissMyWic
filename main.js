document.addEventListener('DOMContentLoaded', function() {
    // Variable to store reference to the currently playing audio
    var currentAudio = null;

    // Get the form element
    var form = document.getElementById('djForm');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
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
    });

    // Function to play the sound
    function playSound(soundFile) {
        // Create a new audio element
        var audio = new Audio(soundFile);
        
        // Play the audio
        audio.play();

        // Update the reference to the currently playing audio
        currentAudio = audio;
    }
});

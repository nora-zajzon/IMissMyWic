document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.getElementById('djForm');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Get the selected genre
        var selectedGenre = document.getElementById('genre').value;

        // Play the sound based on the selected genre
        playSound(selectedGenre + '.mp3');
    });

    // Function to play the sound
    function playSound(soundFile) {
        var audio = new Audio(soundFile);
        audio.play();
    }
});

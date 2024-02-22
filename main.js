document.addEventListener('DOMContentLoaded', function() {
    // Get the select element
    var selectGenre = document.getElementById('genre');

    // Add event listener for change
    selectGenre.addEventListener('change', function() {
        // Get the selected value
        var selectedGenre = selectGenre.value;

        // Check if the selected value matches the desired option
        if (selectedGenre === 'house') {
            // Play the sound for house genre
            playSound('house-sound.mp3');
        } else if (selectedGenre === 'rap') {
            // Play the sound for rap genre
            playSound('rap-sound.mp3');
        } else if (selectedGenre === 'pop') {
            // Play the sound for pop genre
            playSound('pop-sound.mp3');
        } else if (selectedGenre === 'indie') {
            // Play the sound for indie genre
            playSound('indie-sound.mp3');
        } else if (selectedGenre === 'EDM') {
            // Play the sound for EDM genre
            playSound('edm-sound.mp3');
        }
    });

    // Function to play the sound
    function playSound(soundFile) {
        var audio = new Audio(soundFile);
        audio.play();
    }
});

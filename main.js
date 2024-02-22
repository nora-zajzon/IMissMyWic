document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.getElementById('djForm');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Get the selected genre
        var genre = document.getElementById('genre').value;

        // You can do whatever you want with the genre value here, for example:
        alert('You selected ' + genre + ' genre!');
    });

    // Get the audio element
    var audio = document.getElementById('sampleAudio');

    // Add event listener for playing audio
    audio.addEventListener('play', function() {
        console.log('Audio is playing');
    });
});

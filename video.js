// video.js
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("autoplayVideo");

    // Check if the video element is available
    if (video) {
        // Autoplay the video with sound muted
        video.muted = true;
        video.play();

        // Listen for the "ended" event and replay the video
        video.addEventListener("ended", function() {
            video.currentTime = 0; // Reset the video to the beginning
            video.play(); // Replay the video
        });
    }
});

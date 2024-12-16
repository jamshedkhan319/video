// Function to change the main video and update details
function changeVideo(videoSrc, title, description) {
    const mainVideo = document.getElementById("main-video");
    const videoTitle = document.getElementById("video-title");
    const videoDescription = document.getElementById("video-description");

    // Update video source and details
    mainVideo.src = videoSrc;
    videoTitle.textContent = title;
    videoDescription.textContent = description;

    // Play the selected video
    mainVideo.play();
}

// Generate thumbnails dynamically
document.addEventListener("DOMContentLoaded", () => {
    const canvases = document.querySelectorAll("canvas[data-video]");

    canvases.forEach((canvas) => {
        const videoSrc = canvas.getAttribute("data-video");
        const video = document.createElement("video");

        video.src = videoSrc;
        video.currentTime = 5; // Capture the thumbnail at 5 seconds

        video.addEventListener("loadeddata", () => {
            const ctx = canvas.getContext("2d");
            canvas.width = video.videoWidth / 4; // Adjust thumbnail size
            canvas.height = video.videoHeight / 4;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        });
    });
});

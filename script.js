// Function to show video player and play video
function playVideo(videoSrc, title, description) {
    const mainVideoContainer = document.getElementById("main-video-container");
    const mainVideo = document.getElementById("main-video");
    const videoTitle = document.getElementById("video-title");
    const videoDescription = document.getElementById("video-description");

    // Show the video player
    mainVideoContainer.classList.add("visible");

    // Update video source and details
    mainVideo.src = videoSrc;
    videoTitle.textContent = title;
    videoDescription.textContent = description;

    // Play the video
    mainVideo.play();
}

// Function to filter videos
function searchVideos() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const videos = document.querySelectorAll("#video-items li");

    videos.forEach((video) => {
        const title = video.getAttribute("data-title").toLowerCase();
        const description = video.getAttribute("data-description").toLowerCase();

        if (title.includes(query) || description.includes(query)) {
            video.style.display = "block";
        } else {
            video.style.display = "none";
        }
    });
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
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        });
    });
});

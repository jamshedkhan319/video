const videos = document.querySelectorAll("video");

// Play/Pause toggle
function togglePlay(videoId) {
    const video = document.getElementById(videoId);
    const playButton = video.closest(".video-item").querySelector(".play-btn");

    videos.forEach((vid) => {
        if (vid !== video) {
            vid.pause();
            vid.closest(".video-item").querySelector(".play-btn").textContent = "▶";
        }
    });

    if (video.paused) {
        video.play();
        playButton.textContent = "❚❚";
    } else {
        video.pause();
        playButton.textContent = "▶";
    }
}

// Update time and progress bar
videos.forEach((video) => {
    video.addEventListener("timeupdate", () => {
        const timeDisplay = video.closest(".video-item").querySelector("span");
        const progressBar = video.closest(".video-item").querySelector(".progress-bar");

        const currentTime = formatTime(video.currentTime);
        const duration = formatTime(video.duration);

        timeDisplay.textContent = `${currentTime} / ${duration}`;
        progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
    });
});

// Seek video on progress bar click
function seekVideo(event, videoId) {
    const video = document.getElementById(videoId);
    const progressContainer = video.closest(".video-item").querySelector(".progress-container");
    const progressWidth = progressContainer.offsetWidth;
    const clickX = event.offsetX;

    video.currentTime = (clickX / progressWidth) * video.duration;
}

// Format time in MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

// Download video
function downloadVideo(videoSrc) {
    const a = document.createElement("a");
    a.href = videoSrc;
    a.download = videoSrc;
    a.click();
}

// Share video
function shareVideo(videoSrc) {
    const url = `${window.location.origin}/${videoSrc}`;
    navigator.clipboard.writeText(url).then(() => {
        alert("Video link copied to clipboard!");
    });
}

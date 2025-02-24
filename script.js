// Video Data Array
const videos = [
    {
        src: "oma.mp4",
        title: "QURAN ",
        description: "This is t of arabic 1."
    },
    {
        src: "yanoor.mp4",
        title: "ARABIC BEST SONG",
        description: "This is the ."
    },
    {
        src: "rahman.mp4",
        title: "Video 3",
        description: "This is the description."
    },

    {
        src: "monajat.mp4",
        title: "Video 00003",
        description: "This is ption ."
    },


    {
        src: "arabic1.mp4",
        title: "Video 3",
        description: "This is the description."
    },

    {
        src: "arabi.mp4",
        title: "Video 3",
        description: "This is the deion of 3."

    },


    {
        src: "koi.mp4",
        title: "Video 3",
        description: "This is the deion of."

    },
    
{
        src: "jkv6.mp4",
        title: "mostofa",
        description: "This is the deion of."
},

{
        src: "jkv7.mp4",
        title: "rohman",
        description: "This is the deion of."
},
    {

       src: "YouCut_20210422_175604046.mp4",
        title: "jk",
        description: "This is the deion of."


    }


    
    
];

// Function to dynamically generate the video list
function generateVideoList() {
    const videoItems = document.getElementById("video-items");
    videoItems.innerHTML = ""; // Clear any existing items

    videos.forEach((video) => {
        const li = document.createElement("li");
        li.dataset.title = video.title;
        li.dataset.description = video.description;
        li.onclick = () => {
            clearSearch(); // Clear search input on click
            playVideo(video.src, video.title, video.description);
        };

        const canvas = document.createElement("canvas");
        canvas.dataset.video = video.src;

        const videoDetails = document.createElement("div");
        videoDetails.classList.add("video-details");

        const title = document.createElement("h4");
        title.textContent = video.title;

        const description = document.createElement("p");
        description.textContent = video.description;

        videoDetails.appendChild(title);
        videoDetails.appendChild(description);
        li.appendChild(canvas);
        li.appendChild(videoDetails);

        videoItems.appendChild(li);
    });

    generateThumbnails();
}

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
    const videoItems = document.querySelectorAll("#video-items li");

    videoItems.forEach((item) => {
        const title = item.dataset.title.toLowerCase();
        const description = item.dataset.description.toLowerCase();

        if (title.includes(query) || description.includes(query)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Function to clear search input
function clearSearch() {
    document.getElementById("search-input").value = ""; // Clear the search input
    searchVideos(); // Reset the video list to show all items
}

// Function to generate thumbnails dynamically
function generateThumbnails() {
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
}

// Initialize the video list on page load
document.addEventListener("DOMContentLoaded", generateVideoList);

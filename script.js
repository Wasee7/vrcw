    function goBack() {
      window.history.back();
    }

function togglePlay() {
  const video = document.getElementById("pVideo");
  const button = document.querySelector(".play-btn");

  video.muted = false;

  if (video.paused || video.ended) {
    video.play().then(() => {
      button.textContent = "Pause";
      button.classList.add("pause-mode"); // ✅ add red style
    }).catch(error => {
      console.error("Playback failed:", error);
    });
  } else {
    video.pause();
    button.textContent = "Play";
    button.classList.remove("pause-mode"); // ✅ remove red style
  }
}


    // Grab a frame from video and set as poster
    window.addEventListener("DOMContentLoaded", () => {
      const video = document.getElementById("pVideo");
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      video.addEventListener("loadeddata", () => {
        // Seek to 1 second in
        video.currentTime = 1;

        video.addEventListener("seeked", () => {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageData = canvas.toDataURL("image/jpeg");
          video.setAttribute("poster", imageData);
          video.currentTime = 0; // Reset
        }, { once: true });
      });
    });
	
	
  function openLightbox() {
    document.getElementById("lightboxModal").style.display = "block";
  }

  function closeLightbox() {
    document.getElementById("lightboxModal").style.display = "none";
  }
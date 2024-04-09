document.addEventListener("DOMContentLoaded", function() {

	const video = document.getElementById("player1");
	console.log("Good job opening the window")
	video.autoplay = false;
	console.log("Auto play is set to ", video.autoplay);
	video.loop = false;
	console.log("Loop is set to ", video.loop);
	video.volume = 1;

    document.getElementById("play").addEventListener("click", function() {
        video.play();
		console.log("Play Video");
        document.getElementById("volume").textContent = video.volume*100 + "%";
    });

    document.getElementById("pause").addEventListener("click", function() {
        video.pause();
		console.log("Pause Video");
    });

    document.getElementById("slower").addEventListener("click", function() {
        video.playbackRate -= 0.1;
		console.log("Slow Down Video");
        console.log("Speed is ", video.playbackRate);
    });

    document.getElementById("faster").addEventListener("click", function() {
        video.playbackRate += 0.1;
		console.log("Speed Up Video");
        console.log("Speed is ", video.playbackRate);
    });

    document.getElementById("skip").addEventListener("click", function() {
        const newTime = video.currentTime + 10;
        if (newTime > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime = newTime;
        }
		console.log("Skip Ahead");
        console.log("Video current time is ", video.currentTime);
    });

    document.getElementById("mute").addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            this.textContent = "Mute";
			console.log("Mute");
        } else {
            video.muted = true;
            this.textContent = "Unmute";
			console.log("Unmute");
        }
    });

    const volumeSlider = document.getElementById("slider");
    volumeSlider.addEventListener("input", function() {
        video.volume = this.value / 100;
        document.getElementById("volume").textContent = this.value + "%";
    });

    document.getElementById("vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    document.getElementById("orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
});

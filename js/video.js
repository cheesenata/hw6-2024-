var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1");
	video.autoplay=false;
	video.loop=false;
	console.log("auto play is set to"+video.autoplay);
	console.log("loop is set to"+video.loop);

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume*100+"%";
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log("New speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
    console.log("New speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime += 10;
    }
    console.log("Current location: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    video.muted = !video.muted;
    this.innerHTML = video.muted ? "Unmute" : "Mute";
});

document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
    console.log("Volume: " + video.volume * 100 + "%");
});

document.querySelector("#styled").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.querySelector("#original").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});
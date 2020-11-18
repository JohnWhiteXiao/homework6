var video;
var volume;
var element = document.getElementById("myVideo");

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	volume = document.querySelector("#volume");
});

// Play the video and update the volume information.  
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	console.log(this)
	// volume.innerHTML = "100%";
	video.play();
	volume.innerHTML = video.volume*100+"%"
});

// Pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	console.log(this);
	video.pause();
});

// Slow the current video speed by 10% each time the button is clicked 
// and log the new speed to the console.
document.querySelector("#slower").addEventListener("click", function() {
	console.log(this);
	// video.playbackRate = 0.5;
	video.playbackRate = 0.9*video.playbackRate;
	console.log("speed is "+video.playbackRate)
});

// Increase the current video speed by each time the button is clicked 
// and log the new speed to the console.  
// Change it by an amount proportional to the slow down.
document.querySelector("#faster").addEventListener("click", function() {
	console.log(this);
	// video.playbackRate = 1.5;
	video.playbackRate = video.playbackRate/0.9;
	console.log("speed is "+video.playbackRate)
});

// Advance the current video by 5 seconds.  If the video length has been exceeded 
// - go back to the start of the video.   
// Log the current location of the video and play the video.
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	console.log(this);
	// video.duration: the length of the current video (in seconds)
	if (video.currentTime + 5 >= video.duration){
		video.currentTime = 0;}
	else{video.currentTime += 5;}
	console.log(video.currentTime)
});

// Mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function() {	
	console.log(this);
	if (video.muted == true){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmute");}
	else if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Mute");}
});

// Change the volume based on the slider and update the volume information.
document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this.volume);
	// ？？？？？？？？？？？？？？？？？？
	volume.innerHTML = this.volume*100+"%"
	// volume should be a number between 0 and 10
	video.volume=this.volume/100
});

// Utilize the existing grayscale class on the video element
document.querySelector("#old").addEventListener("click", function() {
	console.log("Old Video");
	element.classList.add("oldTime");
});

// Remove the grayscale class from the video.
document.querySelector("#original").addEventListener("click", function() {
	console.log("Original Video");
	element.classList.remove("oldTime");
});


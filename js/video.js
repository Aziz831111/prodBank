// Script for popup for video button
document.addEventListener('DOMContentLoaded', function(){
	let btn = document.querySelector(".btn_video");
	let close = document.querySelector(".popup_close");
	let bg = document.querySelector(".close");
	let body = document.getElementsByTagName('body')[0];
	btn.addEventListener('click', function(){
		let popup = document.querySelector(".popup");
		popup.classList.toggle("popup__hidden");
		body.classList.add("overflow");
	});
	close.addEventListener('click', function(){
		let popup = document.querySelector(".popup");
		popup.classList.add("popup__hidden");
		body.classList.remove("overflow");
	});
	bg.addEventListener('click', function(){
		let popup = document.querySelector(".popup");
		popup.classList.add("popup__hidden");
		body.classList.remove("overflow");
	});
});


// Script for video player
document.addEventListener('DOMContentLoaded', function(){
	let video_block = document.querySelectorAll(".video_block");
	let play = document.querySelector(".play");
	let video = document.getElementsByTagName('video')[0];
	let close = play.querySelector(".smartphone_close");
	let bg = play.querySelector(".close");
	let body = document.getElementsByTagName('body')[0];

	video_block.forEach(function(iten, i, arr){
		video_block[i].addEventListener('click', function(){
			play.classList.toggle("popup__hidden");
			video.setAttribute("src", "./video/feedback" + (i + 1) + ".mp4");
			video.play();
			body.classList.add("overflow");
		});
	});

		close.addEventListener('click', function(){
		video.pause();
		play.classList.add("popup__hidden");
		body.classList.remove("overflow");
	});

	bg.addEventListener('click', function(){
		video.pause();
		play.classList.add("popup__hidden");
		body.classList.remove("overflow");
	});
});
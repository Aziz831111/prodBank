document.addEventListener('DOMContentLoaded', function(){
	let btns = document.querySelectorAll(".btn__nav");
	let folders = document.querySelectorAll(".folder");
	btns.forEach(function(item, i, arr){
		btns[i].addEventListener('click', function(){
			console.log("Im working! " + i);
			if (btns[i].classList.contains('btn__nav__active')){
				return;
			} else {
				let visible = document.querySelector(".folder__visible");
				visible.classList.remove("folder__visible");
				let activeBtn = document.querySelector(".btn__nav__active");
				activeBtn.classList.remove("btn__nav__active");
				btns[i].classList.add('btn__nav__active');
				folders[i].classList.add('folder__visible');
			}
		});
	});
});
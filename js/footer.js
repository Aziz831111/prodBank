document.addEventListener('DOMContentLoaded', function(){
	const list = document.querySelector(".footer_list__menu");
	const point = document.querySelectorAll(".footer_list__point");
	const img = document.querySelector(".footer_list__menu > img");
	list.addEventListener('click', function(){
		point[0].classList.toggle("footer_list__hide");
		point[1].classList.toggle("footer_list__hide");
		img.classList.toggle("footer_img__reflect");
	});
});
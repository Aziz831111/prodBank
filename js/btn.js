// Script for btn
document.addEventListener('DOMContentLoaded', function(){
	let url;
	btns = document.querySelectorAll(".btn__link ");
	btns.forEach(function(item, i, arr){
		url = "./lead.html";
		btns[i].addEventListener('click', function(){
			window.open(url, '_blank');
		});
	});
});
// Script for the Second form
function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
document.addEventListener('DOMContentLoaded', function(){
	const form_caption = document.querySelector('.form_caption__straight');
	var date = new Date();
	var now = new Date();
	date.setDate(now.getDate() + 25);
	form_caption.innerHTML = `Обязаюсь вернуть 25 000 рублей до ${("0" + (date.getDate())).slice(-2)}.${("0" + (date.getMonth() + + 1)).slice(-2)}.${date.getFullYear().toString().substr(-2)}`;
});

document.addEventListener('DOMContentLoaded', function(){
	const straight = document.querySelector('.form__straight');
	const slider = straight.querySelector('.slider');
	const progress = straight.querySelector('.progress');
	const form_value = straight.querySelector('.form_value');
	const form_content = straight.querySelector('.form_content');
	var date = new Date();
	var now = new Date();

	function numberWithSpaces(x) {
	  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}

	slider.oninput = function(){
	  if (this.value <= 55000){
	  	progress.style.width = `calc(${(this.value - 1000)/1000}% + 1px)`;
	  } else {
	  	progress.style.width = `calc(${(this.value - 1000)/1000}% - 10px)`;
	  }
	  form_value.style.left = `${((this.value - 1000)/105000) * 224 - 35}px`;
	  if (this.value <= 99999){
	  	form_content.style.left = `${((this.value - 1000)/105000) * 224 - 18}px`;
	  } else {
	  	form_content.style.left = `${((this.value - 1000)/105000) * 224 - 21}px`;
	  }
	  form_content.innerHTML = `${numberWithSpaces(this.value)}`;
	  form_caption.innerHTML = `Обязаюсь вернуть ${numberWithSpaces(slider.value)} рублей до ${("0" + (date.getDate())).slice(-2)}.${("0" + (date.getMonth() + + 1)).slice(-2)}.${date.getFullYear().toString().substr(-2)}`;
	};

	const slider2 = straight.querySelector('.slider2');
	const progress2 = straight.querySelector('.progress2');
	const form_value2 = straight.querySelector('.form_value2');
	const form_content2 = straight.querySelector('.form_content2');
	const form_caption = document.querySelector('.form_caption__straight');

	slider2.oninput = function(){
	  progress2.style.width = `calc(${(this.value)/0.5}% - 20px)`;
	  form_value2.style.left = `${((this.value - 5)/50) * 224 - 30}px`;
	  form_content2.style.left = `${((this.value - 5)/50) * 224 + 1}px`;
	  form_content2.innerHTML = `${numberWithSpaces(this.value)}`;

	  //console.log("date: " + date);
	  //console.log("value: " + slider2.value);
	  date.setDate(now.getDate());
	  date.setMonth(now.getMonth());
	  date.setFullYear(now.getFullYear());
	  date.setDate(now.getDate() + + slider2.value);
	  //console.log("Result: " + date);
	  form_caption.innerHTML = `Обязаюсь вернуть ${numberWithSpaces(slider.value)} рублей до ${("0" + (date.getDate())).slice(-2)}.${("0" + (date.getMonth() + + 1)).slice(-2)}.${date.getFullYear().toString().substr(-2)}`;
	};
});
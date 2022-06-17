		document.addEventListener('DOMContentLoaded', function(){
			const form_caption = document.querySelector('.form_caption');
			var date = new Date();
			date.setDate(now.getDate() + 25);
			 form_caption.innerHTML = `Обязаюсь вернуть ${numberWithSpaces(slider.value)} рублей до ${("0" + (date.getDate())).slice(-2)}.${("0" + (date.getMonth() + + 1)).slice(-2)}.${date.getFullYear().toString().substr(-2)}`;
		});

		const slider = document.querySelector('.slider');
		const progress = document.querySelector('.progress');
		const form_value = document.querySelector('.form_value');
		const form_content = document.querySelector('.form_content');
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



		const slider2 = document.querySelector('.slider2');
		const progress2 = document.querySelector('.progress2');
		const form_value2 = document.querySelector('.form_value2');
		const form_content2 = document.querySelector('.form_content2');
		const form_caption = document.querySelector('.form_caption');

		slider2.oninput = function(){
		  progress2.style.width = `calc(${(this.value)/0.5}% - 15px)`;
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

		// Script for header
		const burger = document.querySelectorAll('.header_menu > li')[0];
		const li = document.querySelectorAll('.header_menu > li');
		const header = document.querySelector('.header_menu');

		burger.addEventListener("click", function(){
				li[2].classList.toggle("header__show");
				li[3].classList.toggle("header__show");
				li[4].classList.toggle("header__show");
				// if (li[2].style.top = "-300px"){
				// 	header.style.height = "60px";
				// } else {
				// 	header.style.height = "60px";
				// }
		});

		// Script for second section slider
		if(document.documentElement.clientWidth < 960){
			let slider = document.querySelector('.second_slider'),
			  sliderList = slider.querySelector('.second_slider-list'),
			  sliderTrack = slider.querySelector('.second_slider-track'),
			  slides = slider.querySelectorAll('.slide'),
			  slideWidth = slides[0].offsetWidth,
			  slideIndex = 0,
			  posInit = 0,
			  posX1 = 0,
			  posX2 = 0,
			  posY1 = 0,
			  posY2 = 0,
			  posFinal = 0,
			  isSwipe = false,
			  isScroll = false,
			  allowSwipe = true,
			  transition = true,
			  nextTrf = 0,
			  prevTrf = 0,
			  lastTrf = --slides.length * slideWidth,
			  posThreshold = slides[0].offsetWidth * 0.35,
			  trfRegExp = /([-0-9.]+(?=px))/,
			  swipeStartTime,
			  swipeEndTime,
			  getEvent = function() {
			    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
			  },
			  slide = function() {
			    if (transition) {
			      sliderTrack.style.transition = 'transform .5s';
			    }
			    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
			  },
			  swipeStart = function() {
			    let evt = getEvent();

			    if (allowSwipe) {

			      swipeStartTime = Date.now();
			      
			      transition = true;

			      nextTrf = (slideIndex + 1) * -slideWidth;
			      prevTrf = (slideIndex - 1) * -slideWidth;

			      posInit = posX1 = evt.clientX;
			      posY1 = evt.clientY;

			      sliderTrack.style.transition = '';

			      document.addEventListener('touchmove', swipeAction);
			      document.addEventListener('mousemove', swipeAction);
			      document.addEventListener('touchend', swipeEnd);
			      document.addEventListener('mouseup', swipeEnd);

			      sliderList.classList.remove('grab');
			      sliderList.classList.add('grabbing');
			    }
			  },
			  swipeAction = function() {

			    let evt = getEvent(),
			      style = sliderTrack.style.transform,
			      transform = +style.match(trfRegExp)[0];

			    posX2 = posX1 - evt.clientX;
			    posX1 = evt.clientX;

			    posY2 = posY1 - evt.clientY;
			    posY1 = evt.clientY;

			    if (!isSwipe && !isScroll) {
			      let posY = Math.abs(posY2);
			      if (posY > 7 || posX2 === 0) {
			        isScroll = true;
			        allowSwipe = false;
			      } else if (posY < 7) {
			        isSwipe = true;
			      }
			    }

			    if (isSwipe) {
			      if (slideIndex === 0) {
			        if (posInit < posX1) {
			          setTransform(transform, 0);
			          return;
			        } else {
			          allowSwipe = true;
			        }
			      }

			      // запрет ухода вправо на последнем слайде
			      if (slideIndex === --slides.length) {
			        if (posInit > posX1) {
			          setTransform(transform, lastTrf);
			          return;
			        } else {
			          allowSwipe = true;
			        }
			      }

			      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
			        reachEdge();
			        return;
			      }

			      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
			    }

			  },
			  swipeEnd = function() {
			    posFinal = posInit - posX1;

			    isScroll = false;
			    isSwipe = false;

			    document.removeEventListener('touchmove', swipeAction);
			    document.removeEventListener('mousemove', swipeAction);
			    document.removeEventListener('touchend', swipeEnd);
			    document.removeEventListener('mouseup', swipeEnd);

			    sliderList.classList.add('grab');
			    sliderList.classList.remove('grabbing');

			    if (allowSwipe) {
			      swipeEndTime = Date.now();
			      if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
			        if (posInit < posX1) {
			          slideIndex--;
			        } else if (posInit > posX1) {
			          slideIndex++;
			        }
			      }

			      if (posInit !== posX1) {
			        allowSwipe = false;
			        slide();
			      } else {
			        allowSwipe = true;
			      }

			    } else {
			      allowSwipe = true;
			    }

			  },
			  setTransform = function(transform, comapreTransform) {
			    if (transform >= comapreTransform) {
			      if (transform > comapreTransform) {
			        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
			      }
			    }
			    allowSwipe = false;
			  },
			  reachEdge = function() {
			    transition = false;
			    swipeEnd();
			    allowSwipe = true;
			  };

			sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
			sliderList.classList.add('grab');

			sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
			slider.addEventListener('touchstart', swipeStart);
			slider.addEventListener('mousedown', swipeStart);
		}

		// Script for the third slider
		document.addEventListener('DOMContentLoaded', function(){

			let slider = document.querySelector('.third_slider'),
			  sliderList = slider.querySelector('.third_slider-list'),
			  sliderTrack = slider.querySelector('.third_slider-track'),
			  slides = slider.querySelectorAll('.slide'),
			  arrows = document.querySelector('.third_slider-arrows'),
			  prev = arrows.children[0],
			  next = arrows.children[1],
			  slideWidth = slides[0].offsetWidth,
			  slideIndex = 0,
			  posInit = 0,
			  posX1 = 0,
			  posX2 = 0,
			  posY1 = 0,
			  posY2 = 0,
			  posFinal = 0,
			  isSwipe = false,
			  isScroll = false,
			  allowSwipe = true,
			  transition = true,
			  nextTrf = 0,
			  prevTrf = 0,
			  lastTrf = --slides.length * slideWidth,
			  posThreshold = slides[0].offsetWidth * 0.35,
			  trfRegExp = /([-0-9.]+(?=px))/,
			  swipeStartTime,
			  swipeEndTime,
			  clickCount = 0,
			  getEvent = function() {
			    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
			  },
			  slide = function() {
			    if (transition) {
			      sliderTrack.style.transition = 'transform .5s';
			    }
			    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

			    prev.classList.toggle('disabled', slideIndex === 0);
			    next.classList.toggle('disabled', slideIndex === --slides.length);
			  },
			  swipeStart = function() {
			    let evt = getEvent();

			    if (allowSwipe) {

			      swipeStartTime = Date.now();
			      
			      transition = true;

			      nextTrf = (slideIndex + 1) * -slideWidth;
			      prevTrf = (slideIndex - 1) * -slideWidth;

			      posInit = posX1 = evt.clientX;
			      posY1 = evt.clientY;

			      sliderTrack.style.transition = '';

			      document.addEventListener('touchmove', swipeAction);
			      document.addEventListener('mousemove', swipeAction);
			      document.addEventListener('touchend', swipeEnd);
			      document.addEventListener('mouseup', swipeEnd);

			      sliderList.classList.remove('grab');
			      sliderList.classList.add('grabbing');
			    }
			  },
			  swipeAction = function() {

			    let evt = getEvent(),
			      style = sliderTrack.style.transform,
			      transform = +style.match(trfRegExp)[0];

			    posX2 = posX1 - evt.clientX;
			    posX1 = evt.clientX;

			    posY2 = posY1 - evt.clientY;
			    posY1 = evt.clientY;

			    if (!isSwipe && !isScroll) {
			      let posY = Math.abs(posY2);
			      if (posY > 7 || posX2 === 0) {
			        isScroll = true;
			        allowSwipe = false;
			      } else if (posY < 7) {
			        isSwipe = true;
			      }
			    }

			    if (isSwipe) {
			      if (slideIndex === 0) {
			        if (posInit < posX1) {
			          setTransform(transform, 0);
			          return;
			        } else {
			          allowSwipe = true;
			        }
			      }

			      // запрет ухода вправо на последнем слайде
			      if (slideIndex ===  (-2 + slides.length)) {
			        if (posInit > posX1) {
			         setTransform(transform, lastTrf);
			         //console.log("here!1");
			         next.classList.add('disabled');
			          return;
			        } else {
			          allowSwipe = true;
			        }
			      }

			      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
			        reachEdge();
			        //console.log("here!2");
			        return;
			      }


			      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
			    }

			  },
			  swipeEnd = function() {
			    posFinal = posInit - posX1;

			    isScroll = false;
			    isSwipe = false;

			    document.removeEventListener('touchmove', swipeAction);
			    document.removeEventListener('mousemove', swipeAction);
			    document.removeEventListener('touchend', swipeEnd);
			    document.removeEventListener('mouseup', swipeEnd);

			    sliderList.classList.add('grab');
			    sliderList.classList.remove('grabbing');

			    if (allowSwipe) {
			      swipeEndTime = Date.now();
			      if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
			        if (posInit < posX1) {
			          slideIndex--;
			        } else if (posInit > posX1) {
			          slideIndex++;
			        }
			      }

			      if (posInit !== posX1) {
			        allowSwipe = false;
			        slide();
			      } else {
			        allowSwipe = true;
			      }

			    } else {
			      allowSwipe = true;
			    }

			  },
			  setTransform = function(transform, comapreTransform) {
			    if (transform >= comapreTransform) {
			      if (transform > comapreTransform) {
			        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
			      }
			    }
			    allowSwipe = false;
			  },
			  reachEdge = function() {
			    transition = false;
			    swipeEnd();
			    allowSwipe = true;
			  };

			sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
			sliderList.classList.add('grab');

			sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
			slider.addEventListener('touchstart', swipeStart);
			slider.addEventListener('mousedown', swipeStart);

			arrows.addEventListener('click', function() {
			  let target = event.target;

			  if (target.classList.contains('third_next') && clickCount < 2) {
			  	clickCount = clickCount + 1;

			  	console.log("clickCount " + clickCount);
			    slideIndex++;
			  } else if (target.classList.contains('third_prev')) {
			  	if (clickCount > 1){
			  		clickCount--;
			  	}
			    slideIndex--;
			    console.log("clickCount " + clickCount);
			  } else {
			    return;
			  }

			  slide();
			});

		});
	// Script for the forth slider
	document.addEventListener('DOMContentLoaded', function(){		
		let slider = document.querySelector('.forth_slider'),
		  sliderList = slider.querySelector('.forth_slider-list'),
		  sliderTrack = slider.querySelector('.forth_slider-track'),
		  slides = slider.querySelectorAll('.slide'),
		  arrows = document.querySelector('.forth_slider-arrows'),
		  prev = arrows.children[0],
		  next = arrows.children[1],
		  slideWidth = slides[0].offsetWidth,
		  slideIndex = 0,
		  posInit = 0,
		  posX1 = 0,
		  posX2 = 0,
		  posY1 = 0,
		  posY2 = 0,
		  posFinal = 0,
		  isSwipe = false,
		  isScroll = false,
		  allowSwipe = true,
		  transition = true,
		  nextTrf = 0,
		  prevTrf = 0,
		  lastTrf = --slides.length * slideWidth,
		  posThreshold = slides[0].offsetWidth * 0.35,
		  trfRegExp = /([-0-9.]+(?=px))/,
		  swipeStartTime,
		  swipeEndTime,
		  clickCount = 0,
		  getEvent = function() {
		    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
		  },
		  slide = function() {
		    if (transition) {
		      sliderTrack.style.transition = 'transform .5s';
		    }
		    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

		    prev.classList.toggle('disabled', slideIndex === 0);
		    next.classList.toggle('disabled', slideIndex === --slides.length);
		  },
		  swipeStart = function() {
		    let evt = getEvent();

		    if (allowSwipe) {

		      swipeStartTime = Date.now();
		      
		      transition = true;

		      nextTrf = (slideIndex + 1) * -slideWidth;
		      prevTrf = (slideIndex - 1) * -slideWidth;

		      posInit = posX1 = evt.clientX;
		      posY1 = evt.clientY;

		      sliderTrack.style.transition = '';

		      document.addEventListener('touchmove', swipeAction);
		      document.addEventListener('mousemove', swipeAction);
		      document.addEventListener('touchend', swipeEnd);
		      document.addEventListener('mouseup', swipeEnd);

		      sliderList.classList.remove('grab');
		      sliderList.classList.add('grabbing');
		    }
		  },
		  swipeAction = function() {

		    let evt = getEvent(),
		      style = sliderTrack.style.transform,
		      transform = +style.match(trfRegExp)[0];

		    posX2 = posX1 - evt.clientX;
		    posX1 = evt.clientX;

		    posY2 = posY1 - evt.clientY;
		    posY1 = evt.clientY;

		    if (!isSwipe && !isScroll) {
		      let posY = Math.abs(posY2);
		      if (posY > 7 || posX2 === 0) {
		        isScroll = true;
		        allowSwipe = false;
		      } else if (posY < 7) {
		        isSwipe = true;
		      }
		    }

		    if (isSwipe) {
		      if (slideIndex === 0) {
		        if (posInit < posX1) {
		          setTransform(transform, 0);
		          return;
		        } else {
		          allowSwipe = true;
		        }
		      }

		      // запрет ухода вправо на последнем слайде
		      if(document.documentElement.clientWidth < 960){
		      if (slideIndex === -1 + slides.length) {
		        if (posInit > posX1) {
		          setTransform(transform, lastTrf);
		          return;
		        } else {
		          allowSwipe = true;
		        }
		      }
		  } else {
		  	if (slideIndex === -3 + slides.length) {
		  	  if (posInit > posX1) {
		  	    setTransform(transform, lastTrf);
		  	    next.classList.add('disabled');
		  	    return;
		  	  } else {
		  	    allowSwipe = true;
		  	  }
		  	}
		  }

		      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
		        reachEdge();
		        return;
		      }

		      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
		    }

		  },
		  swipeEnd = function() {
		    posFinal = posInit - posX1;

		    isScroll = false;
		    isSwipe = false;

		    document.removeEventListener('touchmove', swipeAction);
		    document.removeEventListener('mousemove', swipeAction);
		    document.removeEventListener('touchend', swipeEnd);
		    document.removeEventListener('mouseup', swipeEnd);

		    sliderList.classList.add('grab');
		    sliderList.classList.remove('grabbing');

		    if (allowSwipe) {
		      swipeEndTime = Date.now();
		      if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
		        if (posInit < posX1) {
		          slideIndex--;
		        } else if (posInit > posX1) {
		          slideIndex++;
		        }
		      }

		      if (posInit !== posX1) {
		        allowSwipe = false;
		        slide();
		      } else {
		        allowSwipe = true;
		      }

		    } else {
		      allowSwipe = true;
		    }

		  },
		  setTransform = function(transform, comapreTransform) {
		    if (transform >= comapreTransform) {
		      if (transform > comapreTransform) {
		        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
		      }
		    }
		    allowSwipe = false;
		  },
		  reachEdge = function() {
		    transition = false;
		    swipeEnd();
		    allowSwipe = true;
		  };

		sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
		sliderList.classList.add('grab');

		sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
		slider.addEventListener('touchstart', swipeStart);
		slider.addEventListener('mousedown', swipeStart);

		arrows.addEventListener('click', function() {
		  let target = event.target;

		  if (target.classList.contains('forth_next')) {
		  	clickCount = clickCount + 1;
		    slideIndex++;
		  } else if (target.classList.contains('forth_prev')) {
		  	if (clickCount > 1){
		  		clickCount--;
		  	}
		    slideIndex--;
		  } else {
		    return;
		  }
		  slide();
		});

	});

// Script for the fifth section slider
if(document.documentElement.clientWidth < 1065){
	let slider = document.querySelector('.fifth_slider'),
	  sliderList = slider.querySelector('.fifth_slider-list'),
	  sliderTrack = slider.querySelector('.fifth_slider-track'),
	  slides = slider.querySelectorAll('.slide'),
	  slideWidth = slides[0].offsetWidth,
	  slideIndex = 0,
	  posInit = 0,
	  posX1 = 0,
	  posX2 = 0,
	  posY1 = 0,
	  posY2 = 0,
	  posFinal = 0,
	  isSwipe = false,
	  isScroll = false,
	  allowSwipe = true,
	  transition = true,
	  nextTrf = 0,
	  prevTrf = 0,
	  lastTrf = --slides.length * slideWidth,
	  posThreshold = slides[0].offsetWidth * 0.35,
	  trfRegExp = /([-0-9.]+(?=px))/,
	  swipeStartTime,
	  swipeEndTime,
	  getEvent = function() {
	    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
	  },
	  slide = function() {
	    if (transition) {
	      sliderTrack.style.transition = 'transform .5s';
	    }
	    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
	  },
	  swipeStart = function() {
	    let evt = getEvent();

	    if (allowSwipe) {

	      swipeStartTime = Date.now();
	      
	      transition = true;

	      nextTrf = (slideIndex + 1) * -slideWidth;
	      prevTrf = (slideIndex - 1) * -slideWidth;

	      posInit = posX1 = evt.clientX;
	      posY1 = evt.clientY;

	      sliderTrack.style.transition = '';

	      document.addEventListener('touchmove', swipeAction);
	      document.addEventListener('mousemove', swipeAction);
	      document.addEventListener('touchend', swipeEnd);
	      document.addEventListener('mouseup', swipeEnd);

	      sliderList.classList.remove('grab');
	      sliderList.classList.add('grabbing');
	    }
	  },
	  swipeAction = function() {

	    let evt = getEvent(),
	      style = sliderTrack.style.transform,
	      transform = +style.match(trfRegExp)[0];

	    posX2 = posX1 - evt.clientX;
	    posX1 = evt.clientX;

	    posY2 = posY1 - evt.clientY;
	    posY1 = evt.clientY;

	    if (!isSwipe && !isScroll) {
	      let posY = Math.abs(posY2);
	      if (posY > 7 || posX2 === 0) {
	        isScroll = true;
	        allowSwipe = false;
	      } else if (posY < 7) {
	        isSwipe = true;
	      }
	    }

	    if (isSwipe) {
	      if (slideIndex === 0) {
	        if (posInit < posX1) {
	          setTransform(transform, 0);
	          return;
	        } else {
	          allowSwipe = true;
	        }
	      }

	      // запрет ухода вправо на последнем слайде
	      if (slideIndex === --slides.length) {
	        if (posInit > posX1) {
	          setTransform(transform, lastTrf);
	          return;
	        } else {
	          allowSwipe = true;
	        }
	      }

	      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
	        reachEdge();
	        return;
	      }

	      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
	    }

	  },
	  swipeEnd = function() {
	    posFinal = posInit - posX1;

	    isScroll = false;
	    isSwipe = false;

	    document.removeEventListener('touchmove', swipeAction);
	    document.removeEventListener('mousemove', swipeAction);
	    document.removeEventListener('touchend', swipeEnd);
	    document.removeEventListener('mouseup', swipeEnd);

	    sliderList.classList.add('grab');
	    sliderList.classList.remove('grabbing');

	    if (allowSwipe) {
	      swipeEndTime = Date.now();
	      if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
	        if (posInit < posX1) {
	          slideIndex--;
	        } else if (posInit > posX1) {
	          slideIndex++;
	        }
	      }

	      if (posInit !== posX1) {
	        allowSwipe = false;
	        slide();
	      } else {
	        allowSwipe = true;
	      }

	    } else {
	      allowSwipe = true;
	    }

	  },
	  setTransform = function(transform, comapreTransform) {
	    if (transform >= comapreTransform) {
	      if (transform > comapreTransform) {
	        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
	      }
	    }
	    allowSwipe = false;
	  },
	  reachEdge = function() {
	    transition = false;
	    swipeEnd();
	    allowSwipe = true;
	  };

	sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
	sliderList.classList.add('grab');

	sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
	slider.addEventListener('touchstart', swipeStart);
	slider.addEventListener('mousedown', swipeStart);
}

// Script for the Second form
document.addEventListener('DOMContentLoaded', function(){
	const form_caption = document.querySelector('.form_caption__straight');
	var date = new Date();
	var now = new Date();
	date.setDate(now.getDate() + 25);
	form_caption.innerHTML = `Обязаюсь вернуть ${numberWithSpaces(slider.value)} рублей до ${("0" + (date.getDate())).slice(-2)}.${("0" + (date.getMonth() + + 1)).slice(-2)}.${date.getFullYear().toString().substr(-2)}`;
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


// Script to copy link to clipboard
function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  //
  // *** This styling is an extra step which is likely not required. ***
  //
  // Why is it here? To ensure:
  // 1. the element is able to have focus and selection.
  // 2. if element was to flash render it has minimal visual impact.
  // 3. less flakyness with selection and copying which **might** occur if
  //    the textarea element is not visible.
  //
  // The likelihood is the element won't even render, not even a flash,
  // so some of these are just precautions. However in IE the element
  // is visible whilst the popup box asking the user for permission for
  // the web page to copy to the clipboard.
  //

  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent';


  textArea.value = text;

  document.body.appendChild(textArea);

  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}

function CopyLink() {
  copyTextToClipboard(location.href);
}

document.addEventListener('DOMContentLoaded', function(){
	let btn = document.querySelector(".btn_copy");
	btn.addEventListener('click', function(){
		CopyLink();
	});
});


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



// Script for credit_accepted
document.addEventListener('DOMContentLoaded', function(){

	if (document.documentElement.clientWidth > 700){
		let card = document.querySelector(".credit-accepted_card");
		let p = card.querySelector(".credit-accepted_p");
		let i = 0;

		function showCard () {
			card.classList.toggle("credit-accepted_card__show");
		}

		function randomInteger(min, max) {
		  // случайное число от min до (max+1)
		  let rand = min + Math.random() * (max + 1 - min);
		  return Math.floor(rand);
		}

		function refreshCard () {
			let a = randomInteger(1, 20);
			while (i == a){
				a = randomInteger(1, 20);
			}
			i = a;
			console.log(i);
			str = ``;
			switch(i) {
				case 1: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Александр Д. из Шатуры получил займ 35 000 ₽ на 50 дн.`;
			    break;

				case 2: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Артемий Л. из Жуковского получил займ 15 000 ₽ на 20 дн.`;
			    break;

			    case 3: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Леонид З. из Новогорода получил займ 27 000 ₽ на 35 дн.`;
			    break;

			    case 4: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Михаил Р. из Сочи получил займ 22 000 ₽ на 12 дн.`;
			    break;

			    case 5: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Светлана А. из Москвы получила займ 64 000 ₽ на 41 дн.`;
			    break;

			    case 6: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Родион В. из Зеленограда получил займ 7 000 ₽ на 12 дн.`;
			    break;

			    case 7: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Алексей Г. из Москвы получил займ 17 000 ₽ на 14 дн.`;
			    break;

			    case 8: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Алексей И. из Сочи получил займ 11 000 ₽ на 7 дн.`;
			    break;

			    case 9: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Александра А. из Жуковского получила займ 20 000 ₽ на 18 дн.`;
			    break;

			    case 10: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Елена К. из Новгорода получила займ 30 000 ₽ на 40 дн.`;
			    break;

			    case 11: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Евгения З. из Стерлитамака получила займ 40 000 ₽ на 45 дн.`;
			    break;

			    case 12: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Даниил И. из Москвы получил займ 50 000 ₽ на 31 дн.`;
			    break;

			    case 13: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Данил М. из Москвы получил займ 15 000 ₽ на 7 дн.`;
			    break;

			    case 14: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Леонид В. из Самары получил займ 25 000 ₽ на 20 дн.`;
			    break;

			    case 15: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Анастасия В. из Москвы получила займ 45 000 ₽ на 50 дн.`;
			    break;

			    case 16: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Михаил С. из Самары получил займ 65 000 ₽ на 45 дн.`;
			    break;

			    case 17: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Анна А. из Казани получила займ 55 000 ₽ на 40 дн.`;
			    break;

			    case 18: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Ксения Д. из Казани получила займ 32 000 ₽ на 30 дн.`;
			    break;

			    case 19: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Анна Г. из Екатеринбурга получила займ 15 000 ₽ на 10 дн.`;
			    break;

			    case 20: str = `<span class="h4_bold">
					Новый выданный займ!
				</span> <br>
				Антон Ш. из Волгограда получил займ 35 000 ₽ на 40 дн.`;
			    break;

			  default:
			    break;
			}
				p.innerHTML = str;
		}

		setTimeout(function(){
			setInterval(refreshCard, 24000);
		}, 12000);
		setInterval(showCard, 12000);
	}
});


// Script for btn
document.addEventListener('DOMContentLoaded', function(){
	let url;
	btns = document.querySelectorAll(".btn__link ");
	btns.forEach(function(item, i, arr){
		url = "./credit.html";
		btns[i].addEventListener('click', function(){
			window.open(url, '_blank');
		});
	});
});
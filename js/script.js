const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if(menuLinks.length > 0){
	menuLinks.forEach(menuLink => {
	menuLink.addEventListener("click", onMenuLinkClick);
});

function onMenuLinkClick(e) {
	const menuLink = e.target;
	if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
		const gotoBlock = document.querySelector(menuLink.dataset.goto);
		const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
		if(iconBurger.classList.contains('_active')){
			document.body.classList.remove('_lock');
			iconBurger.classList.remove('_active');
			menuBody.classList.remove('_active');
		}
			window.scrollTo({
			top: gotoBlockValue,
			behavior: "smooth",
			});
		e.preventDefault(); // отключает работу ссылки
		}
	}
}

// появление кнопки "наверх"
let arrowVar = document.querySelector('.scroll-arrow');

window.addEventListener('scroll',function(){
	arrowVar.classList.toggle("active", window.scrollY>500)
})

//Бургер
const iconBurger = document.querySelector('.main-screen__burger-icon');
const menuBody = document.querySelector('.main-screen__burger-body');
const buttonVis = document.querySelector('.main-screen__button-wrapper');
if(iconBurger){

	iconBurger.addEventListener('click', function(e){
		document.body.classList.toggle('_lock');
		iconBurger.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		if (buttonVis.style.opacity == 0.1){ // Если прикручивать анимацию к кнопке на г. экране без этой проверки, то при включенном б. меню кнопка не затемняется.
			buttonVis.style.opacity = '1';
		} else{
			buttonVis.style.opacity = '0.1';
		}
		
	})
}


let circleAnim = document.querySelector('.second__inner-circle');
let mainScreen = document.querySelector('.main-screen');
let mainScreenHeight = mainScreen.offsetHeight;

const getItemCoords = circleAnim.getBoundingClientRect();

let circleCoord = getItemCoords.y;
let circlePix = circleCoord - mainScreenHeight;
let circleBlocks = document.querySelectorAll('.second__inner-circle');
let iconBlocks = document.querySelectorAll('.second__inner-icon');

let secondBlock = document.querySelector('.second');
let secondBlockHeight = secondBlock.offsetHeight;

let thirdBlock = document.querySelector('.third');
let thirdBlockHeight = thirdBlock.offsetHeight;

let secondTitle = document.querySelector('.second__title');
let check = 0;


let thirdImg = document.querySelector('.third__main-img');
let fourthTitle = document.querySelector('.fourth__title');

let sixImg = document.querySelector('.six__img');
let sixSpan = document.querySelector('.six__tvl-video-watch-icon-txt');
let sixButton = document.querySelector('.six__tvl-video-watch-border');
let getSixCoord = sixButton.getBoundingClientRect();
let sixCoord = getSixCoord.y;

window.addEventListener('scroll', function (event) {
	needToScroll = scrollY;
	if(needToScroll >= circlePix){
		for(let i = 0; i < circleBlocks.length; i++){
			circleBlocks[i].classList.add('animation-circle');
		}
		for(let i = 0; i < iconBlocks.length; i++){
			iconBlocks[i].classList.add('animation-icon');
		}
	}
	if(needToScroll >= 110){
		secondTitle.classList.add('_animation');
	}

	if(needToScroll >= (secondBlockHeight + 120)){
		thirdImg.classList.add('third-img-animation');
	}

	if((check === 0) && (needToScroll >= (toNumbersY + 50))){
		numbersCounter();
		check += 1;
	}
	if(needToScroll >= (secondBlockHeight + thirdBlockHeight + 100)){
		fourthTitle.classList.add('fourth-animation');
	}
	if(needToScroll >= (sixCoord - mainScreenHeight)){
		sixButton.classList.add('six__border-animation')
		sixImg.classList.add('six__img-animation');
		sixSpan.classList.add('six__txt-animation');
	}
	
});



let firstCircle;
let secondCircle;
let thirdCircle;
for(let i of circleBlocks){
	if(firstCircle === undefined){
		firstCircle = i;
	} else if(secondCircle === undefined){
		secondCircle = i;
	} else if(thirdCircle === undefined){
		thirdCircle = i;
	}
}

let firstIcon;
let secondIcon;
let thirdIcon;
for(let i of iconBlocks){
	if(firstIcon === undefined){
		firstIcon = i;
	} else if(secondIcon === undefined){
		secondIcon = i;
	} else if(thirdIcon === undefined){
		thirdIcon = i;
	}
}


firstCircle.addEventListener('mouseover', function(){
	firstIcon.style.top = '32px';
	firstIcon.style.left = '36px';
})
firstCircle.addEventListener('mouseout', function(){
	firstIcon.style.top = '34px';
	firstIcon.style.left = '34px';
})


secondCircle.addEventListener('mouseover', function(){
	secondIcon.style.top = '32px';
	secondIcon.style.left = '36px';
})
secondCircle.addEventListener('mouseout', function(){
	secondIcon.style.top = '34px';
	secondIcon.style.left = '34px';
})


thirdCircle.addEventListener('mouseover', function(){
	thirdIcon.style.top = '32px';
	thirdIcon.style.left = '36px';
})
thirdCircle.addEventListener('mouseout', function(){
	thirdIcon.style.top = '34px';
	thirdIcon.style.left = '34px';
})


let numberAnim = document.querySelectorAll('.third__numbers-animation');
let firstNumber;

let secondNumber;
let thirdNumber;
let fourthNumber;
let fifthNumber;
let sixNumber;
for (let i of numberAnim){
	if(firstNumber === undefined){
		firstNumber = i;
}	else if(secondNumber === undefined){
	secondNumber = i;
} else if(thirdNumber === undefined){
	thirdNumber = i;
} else if(fourthNumber === undefined){
	fourthNumber = i;
} else if(fifthNumber === undefined){
	fifthNumber = i;
} else if(sixNumber === undefined){
	sixNumber = i;
} 
}



getNumbersCoord = firstNumber.getBoundingClientRect();
numbersCoord = getNumbersCoord.y;
let toNumbersY = numbersCoord - mainScreenHeight;
console.log(toNumbersY);


function numbersCounter(){
	let dataFirst = firstNumber.innerHTML;
	let example = dataFirst - 12;
		setInterval(function funcCaller(){
			if(example <= dataFirst){
				firstNumber.innerHTML = example;
				secondNumber.innerHTML = example;
				thirdNumber.innerHTML = example;
				fourthNumber.innerHTML = example;
				fifthNumber.innerHTML = example;
				sixNumber.innerHTML = example;
				example += 1;
			}
		}, 100);
};















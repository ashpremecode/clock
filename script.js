const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate (){
	const now = new Date();

	const seconds = now.getSeconds();
	const secondDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;
	console.log(secondDegrees);

	const mins = now.getMinutes();
	const minsDegrees = ((mins / 60) * 360)+ 90;
	minsHand.style.transform = `rotate(${minsDegrees}deg)`;
	console.log(minsDegrees);

	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) * 360)+ 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	console.log(minsDegrees);


}

setInterval(setDate, 1000);
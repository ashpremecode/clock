const secondHand = document.querySelector('.second-hand');

function setDate (){
	const now = new Date();
	console.log(now);
	const seconds = now.getSeconds();
	console.log(seconds);
	const secondDegrees = ((seconds / 60) * 360) + 90;
	console.log(secondDegrees);
	secondHand.style.transfrom = `rotate(${secondDegrees}deg)`;
}

setInterval(setDate, 1000);
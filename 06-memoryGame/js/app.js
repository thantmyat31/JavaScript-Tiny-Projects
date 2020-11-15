const gameStart = () => {
	const container = document.querySelector('#container');
	const colors = ['red', 'green', 'blue', 'pink'];
	const numberOfCard = 16;
	const numberForMultiply = numberOfCard / colors.length;
	let cardArray = [];

	
	
	for(let i = 0; i < numberForMultiply; i++) {
		cardArray = [...cardArray, ...colors];
	}
	cardArray.sort(() => Math.random() - 0.5);
	container.innerHTML = '';
	
	cardArray.map(card => {
		container.innerHTML += `<div class="imgContainer"><img class="img" src="./img/${card}.png" /><div class="backface"></div></div>`;
	});


	const imgContainers = document.querySelectorAll('.imgContainer');
	let openedCard = [];

	imgContainers.forEach(img => {
		img.addEventListener('click', () => {
			
			if(openedCard.length <= 1) {
				openedCard.push(img.firstElementChild.src);
				img.style.transform = "rotateY(0deg)";
				
				if(openedCard.length === 2) {
					if(openedCard[0] === openedCard[1]) {
						openedCard = [];
					} else {
						img.style.transform = "rotateY(0deg)";
						setTimeout(() => {
							img.style.transform = "rotateY(180deg)";
						}, 600)
						openedCard.pop();
						
					}
				}
			}
		});
	});
}

gameStart();
document.querySelector('#gameStartButton').addEventListener('click', gameStart);
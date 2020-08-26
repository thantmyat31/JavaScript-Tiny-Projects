let winState = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 4, 8],
	[1, 4, 7],
	[2, 4, 6],
	[0, 3, 6],
	[2, 5, 8]
];

let collector = [
	'','','',
	'','','',
	'','',''
];

const components = document.querySelectorAll('.component');
const getRand = (length) => Math.floor(Math.random() * length);

for(let i = 0; i < components.length; i++) {
	components[i].addEventListener('click', () => {
		
			if(collector[i] === '') {
				collector[i] = 'O';
				components[i].textContent = 'O';

				let filters = [];
				collector.forEach((item, index) => {
					if(item === '') {
						filters.push(index);
					}
				});

				let rand = parseInt(filters[getRand(filters.length)]);
				
				if(filters !== [] && components[rand]) {
					collector[rand] = 'X' ;
					components[rand].textContent = 'X';
				}						
			}
			
			winState.forEach(state => {
				if(collector[state[0]] &&
					collector[state[0]] === collector[state[1]] &&
					collector[state[0]] === collector[state[2]] ) {

					let result = collector[state[0]];
					if(result === 'O') {
						alert('you win');
					} else {
						alert('you lose');
					}
				} 
			})
			
		
	});
}
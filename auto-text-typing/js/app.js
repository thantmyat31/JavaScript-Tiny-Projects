let textString = '';
const setText = () => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sit beatae, numquam pariatur similique perspiciatis eveniet tempore laudantium repudiandae, facere quos odit aut qui distinctio libero animi omnis. Aperiam, hic! Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Itaque, suscipit cum dolorum molestiae quaerat similique consequuntur accusamus, doloremque asperiores vitae magnam quisquam obcaecati, quidem esse hic ad, ipsam delectus nobis. Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Laudantium quis illo, saepe exercitationem dolor optio sint aspernatur dolorem error id qui quod, possimus? Obcaecati vel voluptatum sunt corrupti quasi fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, exercitationem debitis pariatur dolores eveniet voluptatibus hic, impedit doloribus ipsam quae mollitia facere inventore vitae enim quod soluta perferendis nemo. Suscipit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nostrum illum unde doloremque fugit, quas et aut officiis incidunt cupiditate animi perspiciatis! Asperiores molestias, nostrum modi voluptatibus iusto placeat dolore. Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Illo quasi dolores at ipsum rem, ipsam ut? Incidunt, esse beatae. Recusandae doloribus tenetur eos necessitatibus corporis ipsa illo sequi nobis hic.";
textString = setText();

textSplitted = textString.split('');
const startTyping = () => {

	if(textSplitted.length > 0) {
		const textShifted = textSplitted.shift();
		document.getElementById('textBox').innerHTML += textShifted;
	} else if(textSplitted.length === 0) {
		document.getElementById('textBox').innerHTML = '';
		textSplitted = textString.split('');
	} else {
		clearInterval(startInterval);
	}
}


const startInterval = setInterval(startTyping, 10);
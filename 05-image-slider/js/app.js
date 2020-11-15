var btnL = document.getElementById('btnL');
var btnR = document.getElementById('btnR');
var imgs = document.getElementsByClassName('slide_item');
var cw = document.getElementById('rc_slider').offsetWidth;
var mcount = document.getElementsByClassName('slide_item').length;
var content = document.getElementById("content");
var offset = cw * (mcount - 1);
var currentIndex = 0;

for (var i = 0; i < imgs.length; i++) {
	imgs[i].style.left = i * cw + 'px';
}

var dataList = [
	{
		image: `<img class="slide_img" src="images/1.jpeg" alt="photo not found" />`,
		content: `Slide -1 TEXT => Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero reprehenderit autem molestias totam qui.`
	},
	{
		image: `<img class="slide_img" src="images/2.jpg" alt="photo not found" />`,
		content: `Slide -2 TEXT => Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea tempora esse, cum dicta rerum? Similique.`
	},
	{
		image: `<img class="slide_img" src="images/3.jpeg" alt="photo not found" />`,
		content: `Slide -3 TEXT => Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis eligendi repellat veniam, nemo .`
	}
];

dataList.forEach((data, index) => {
	imgs[index].innerHTML = data.image;
});

content.innerHTML = dataList[currentIndex].content;

btnL.addEventListener('click', slideRight, false);
btnR.addEventListener('click', slideLeft, false);

function slideLeft() {
	if (parseInt(imgs[0].style.left) > -offset) {
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.left = parseInt(imgs[i].style.left) - cw + 'px';
		}
	} else {
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.left = i * cw + 'px';
		}
	}

	if(parseInt(imgs[0].style.left) === 0) {
		currentIndex = 0;
	} else if(parseInt(imgs[0].style.left) === 0-cw) {
		currentIndex = 1;
	} else {
		currentIndex = 2;
	}
	content.innerHTML = dataList[currentIndex].content;
}

function slideRight() {
	if (parseInt(imgs[0].style.left) < 0) {
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.left = parseInt(imgs[i].style.left) + cw + 'px';
		}
	} else {
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.left = -offset + i * cw + 'px';
		}
	}

	if(parseInt(imgs[0].style.left) === 0) {
		currentIndex = 0;
	} else if(parseInt(imgs[0].style.left) === 0-cw) {
		currentIndex = 1;

	} else {
		currentIndex = 2;
	}
	content.innerHTML = dataList[currentIndex].content;
}

// ACTIVATE THE SLIDER
setInterval(slideLeft, 5000);

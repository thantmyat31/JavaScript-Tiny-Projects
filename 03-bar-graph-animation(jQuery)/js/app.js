$(document).ready(function() {
	var dataArray = [];
	$('.bar_num').each(function() {
		dataArray.push({ target: $(this).attr('data-target'), value: $(this).attr('data-value') });
	})
	
	var largest = Math.max.apply(Math, dataArray.map(function(data) { return data.value; }))
	dataArray = dataArray.map(function(data) {
		return { ...data, percent: (data.value/largest) * 100};
	})
	
	dataArray.forEach(function(data) {
		$(data.target).css('width', data.percent + '%')
	})

	// CHECK IN VIEWPORT
	function isAnyPartOfElementInViewport(el) {
	    const rect = el.getBoundingClientRect();
	    
	    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
	    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

	    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
	    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

	    
	    if(vertInView && horInView) {
	    	el.style.animationName = 'barGraph';
	    }
	}

	// ANIMATION FOR SCROLLING
	$(window).scroll(function() {
		$('.innerGraph').each(function() {
			isAnyPartOfElementInViewport(this);
		})
	})
})
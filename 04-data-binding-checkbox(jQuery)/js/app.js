$(document).ready(function() {
	var checkCollects = ['.check-collect-1','.check-collect-2'];
	var inputCollects = ['.input-collect-1','.input-collect-2'];
	var valCollector = [];

	for(var i = 0; i < checkCollects.length; i++) {
		checkedAdd(checkCollects[i],inputCollects[i]);
	}

	function checkedAdd(val1,val2) {
		$(val1 + ' .check-place input').click(function() {
			var checkedValue = $(this).val();

			if( $(this).is(':checked') ) {
				var htmlCode = '<span title="' + checkedValue + '">'+ checkedValue +' <i class="fas fa-times-circle"></i></span>';

				$(val2).append(htmlCode);
				$(this).attr('checked','checked');

			} else {
				$('span[title="' + checkedValue + '"]').remove();
				$(this).removeAttr('checked','checked');
			}
		});

		$(val2).on('click', 'span', function() {
			var removeVal = $(this).text();
			$(this).remove();
			$('input[value='+ removeVal +']').removeAttr('checked','checked');

			$('input[value='+ removeVal +']').prop('checked', false);

			console.log($('input[value="'+ removeVal +'"]'));
		});
	}

});
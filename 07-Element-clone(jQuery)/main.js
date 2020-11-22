var i = 1;
$('#parent').on('click', '.clone', function() {

	// Clone the whole element
	var cloneBox = $(this).parent('.clonebox').clone();

	// Clear the value from input and select elements
	cloneBox.children('input').val('');
	cloneBox.children('.select').val('');
	
	// Add specific id or class name as you like
	cloneBox.children('button.clone').attr('id', 'cloneButton' + i);
	cloneBox.attr('id', 'cloneBox' + i);

	// Append the clone element in parent element
	$('#parent').append(cloneBox);

	// List the clone element
	$('.list').append("<li>" + i + '. ' + cloneBox.attr('id') +"</li>");

	i++;
});

$('#parent').on('change', '.select', function() {
	$(this).siblings('input').val($(this).val());
});
$(document).ready(function() {

	function appendToList(val){
		$("#list").append("<li>" +"<input type='checkbox' name='myCheckbox' class='checkbox' />" + " " + val + " <a href='#' class='remove-btn'>Remove</a></li>");
	}

	if (localStorage['groceries-senk0009']) {
		var items = JSON.parse(localStorage['groceries-senk0009']);
	} else {
		var items = [];
	}

	for (var i = 0; i < items.length; i++) {
		appendToList(items[i]);
	};

	var addItem = function(){
		var val = $("#taskInput").val();
		items.push(val);
		localStorage['groceries-senk0009'] = JSON.stringify(items);
		appendToList(val);
		$("#taskInput").val(" ").focus();
	}

	$("#tasks-list").submit(function(e){
		addItem()

		e.preventDefault()
		return false
	})

	
		/* remove */
	$(document).on('click', ".remove-btn", function(){
		$(this).parent('li').remove();
		localStorage.removeItem('groceries-senk0009');
		
	});

});
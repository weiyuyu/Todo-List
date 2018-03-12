//Check off todos
$('ul').on('click','li',function(){
	$(this).toggleClass('completed');
});

//Delete todo
$('ul').on('click','span',function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	})
	event.stopPropagation();
})

$("input[type='text']").keypress(function(){
	if(event.which === 13){
		var todo_text = $(this).val();
		$(this).val("");
		if(todo_text != ""){
			$('ul').append("<li> <span><i class='fas fa-trash'></i></span> " +todo_text+"</li>");
		}
	}
});


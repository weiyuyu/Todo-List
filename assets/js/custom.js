//Check off todos
$('ul').on('click','.li-content',function(){
	if($(this).css('color') != 'rgb(41, 128, 185)'){
		$(this).toggleClass('completed');
	}
});

//Delete todo
$('ul').on('click','.delete',function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Edit todo
$('ul').on('click','.edit', function() {
        $(this).closest("li").find(".li-content").attr('contentEditable', true).focus();
				$(this).closest("li").find(".li-content").css('color','#2980b9');
				$(".li-content").keypress(function(){
					if(event.which === 13){
						$(".li-content").css('color','#666');
						$(".li-content").attr('contentEditable', false);
					}
				});
				$(".li-content").blur(
		        function() {
							$(".li-content").css('color','#666');
		          $(".li-content").attr('contentEditable', false);
		        });
    });

//Add new todo
$("input[type='text']").keypress(function(){
	if(event.which === 13){
		var todo_text = $(this).val();
		$(this).val("");
		if(todo_text != ""){
			$('ul').append("<li> <span class='delete'> <i class='fas fa-trash'></i> </span> <span class='li-content'> " +todo_text+" </span> <span class='edit'> <i class='far fa-edit'></i> </span></li>");
		}
	}
});

//Clear all completed todos
$("#clear").click(function(){
	$(".completed").parent().fadeOut(function(){
		$(this).remove();
	});
});

//Sort complete and incomplete todos
$("#filter").click(function(){
	tinysort('ul#todoData>li',{selector:'.li-content',attr:'class'});
});

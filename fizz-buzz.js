$(document).ready(function() {

	$('#start').on("click", function(){
    	$(this).fadeOut(300);
		countOut();
	});

	function countOut() {
		for (var i = 1; i <= 100; i++){
			var j = 1;
			setTimeout(function()
			{
				console.log(j);
				delayedLoop(j)
				j++;	
				},
				1000 * i);
			}(i);
	}
	
	function delayedLoop(num){
	
		var list = '<li><span> ' + ' ' + num + '</span></li>';
		var fizz = '<li><span>fizz</span></li>';
		var buzz = '<li><span>buzz</span></li>';
		var fizzBuzz = '<li><span>fizz buzz</span></li>';		
	
		if (num % 3 == 0 && num % 5 == 0){
			$(fizzBuzz).clone().appendTo('#numbers-list ul').fadeOut(900);
		}
		else if (num % 3 == 0){
			$(fizz).clone().appendTo('#numbers-list ul').fadeOut(900);
		}
		else if (num % 5 == 0){
			$(buzz).clone().appendTo('#numbers-list ul').fadeOut(900);
		}
		else{
			$(list).clone().appendTo('#numbers-list ul').fadeOut(900);
		}
	}
	
});
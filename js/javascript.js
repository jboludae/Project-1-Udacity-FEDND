var mq=window.matchMedia('all and (max-width:768px)');
if (mq.matches){
		$(document).ready(function(){
		$('.text').click(function() {
			$(this).toggleClass('show-description');
			});
		});
}else{
		$(document).ready(function(){
		$('.text').hover(function() {
			$(this).toggleClass('show-description');
			});
		});

}



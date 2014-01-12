$(document).ready(function(){
	$('.login-btn').on('click', function(){
		var name = $('.username').val(),
			pwd = $('password').val();
		Common.getFake("user/login.php",{username:name, password:pwd}, function(data){
			if (data.res == 0) {
				location.href = 'register.html';
			}
		});
	});
});
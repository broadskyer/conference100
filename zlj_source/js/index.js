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
	$('.rigister-btn').on('click', function(){
		var $rigister = $('.rigister-wrapper'),
			name = $rigister.find('.name').val(),
			pwd = $rigister.find('password').val(),
			email = $rigister.find('email').val();
		Common.getFake("user/register.php",{username:name, password:pwd, email:email}, function(data){
			if (data.res == 0) {
				location.href = 'modify.html';
			}
		});
	});
});
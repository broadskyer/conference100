$(document).ready(function(){
	var errorInfo = ['OK',
					'ERR_INVAILD_PARAM',
					'ERR_SERVER_INTERNAL_ERROR',
					'ERR_ACTION_NOT_SUPPORT',
					'ERR_USER_NOT_EXISTS',
					'ERR_USERNAME_ALREADY_EXISTS',
					'ERR_EMAIL_ALREADY_EXISTS',
					'ERR_USER_PW_NOT_MATCH',
					'ERR_SEED_TIMEOUT',
					'ERR_SEED_HASH_NOT_MATCH',
					'ERR_NO_CONERENCE_OR_ROLE_SELECTED',
					'ERR_CONFERENCE_NOT_EXIST',
					'ERR_NOT_PERMITTED',
					'ERR_ROLE_CONFERENCE_NOT_MATCH'];
	$('.login-btn').on('click', function(){
		var name = $('.username').val(),
			pwd = $('.password').val();
		Common.get("/user/login",{username:name, password:pwd}, function(data){
			if (data.res == 0) {
				location.href = 'register.html';
			} else {
				alert(errorInfo[data.res]);
			}
		});
	});
	$('.rigister-btn').on('click', function(){
		var $rigister = $('.rigister-wrapper'),
			name = $rigister.find('.name').val(),
			pwd = $rigister.find('.password').val(),
			email = $rigister.find('.email').val();
		Common.get("/user/new",{username:name, password:pwd, email:email}, function(data){
			if (data.res == 0) {
				location.href = 'modify.html';
			} else {
				alert(errorInfo[data.res]);
			}
		});
	});
	//修改信息
	$('.update-personinfo').on('click', function(){
		var $personinfo = $('.modify-wrapper .personal-info'),
			fame = $personinfo.find('.fame').val(),
			lname = $personinfo.find('.lname').val(),
			org = $personinfo.find('.org').val(),
			website = $personinfo.find('.website').val(),
			phone = $personinfo.find('.phone').val(),
			addr = $personinfo.find('.addr').val(),
			city = $personinfo.find('.city').val(),
			post = $personinfo.find('.post').val(),
			state = $personinfo.find('.state').val(),
			country = $personinfo.find('.country').val(),
			username = $personinfo.find('.username').val(),
			pwd = $personinfo.find('pwd').val();
		Common.getFake("user/edit.php",{username:fame, password:pwd, firstname:fame, lastname:lname, addr:addr, organization:org, website:website, phone:phone, city:city, postcode:post, country:country, state:state}, function(data){
			if (data.res == 0) {
				alert('更新个人信息成功！');
			}
		});
	});
	$('.main-email').on('click', function(){
		var $par = $(this).parent().parent(),
			$check = $par.find('.del-email');
		$par.parent().find('.del-email').removeAttr('disabled');
		$check.attr('disabled', 'disabled');
	});
	$('.modify-email').on('click', function(){
		var $modifyemail = $('.modify-email-wrapper'),
			mainemail = $modifyemail.find('.main-email').val(),
			delemail = $modifyemail.find('.del-email').val();
		Common.getFake("user/email/change.php",{email:mainemail}, function(data){
			if (data.res == 0) {
				alert('修改主email成功！');
			}
		});
	});
	$('.add-email').on('click', function(){
		var $addemail = $('.add-email-wrapper'),
			newemail = $addemail.find('.new-email').val(),
			name = $addemail.find('.name').val(),
			pwd = $addemail.find('.pwd').val();
		Common.getFake("user/email/add.php",{email:newemail}, function(data){
			if (data.res == 0) {
				alert('增加新email成功！');
			}
		});
	});
});
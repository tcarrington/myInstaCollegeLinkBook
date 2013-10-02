Template.signup.helpers({
	isStudent: function() {
		return Session.get('isStudent');
	},
	isEmployer: function() {
		return Session.get('isEmployer');
	}
});
function checkPassword(str)
{
   	var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
   	return re.test(str);
};

function checkForm(form)
{
	if(form.username.value == "") {
    	alert("Error: Username cannot be blank!");
    	form.username.focus();
    	return false;
    }
    re = /^\w+$/;
    if(!re.test(form.username.value)) {
    	alert("Error: Username must contain only letters, numbers and underscores!");
    	form.username.focus();
    	return false;
    }
    if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
    	if(!checkPassword(form.pwd1.value)) {
       		alert("The password you have entered is not valid!");
       		form.pwd1.focus();
       		return false;
    	}
    } 
    else {
    	alert("Error: Please check that you've entered and confirmed your password!");
    	form.pwd1.focus();
      	return false;
   	}
   	return true;
};

Template.signup.events({

	'click .student-button': function() {
		Session.set('isStudent', true);
		Session.set('isEmployer', false);
	},
	'click .employer-button': function() {
		Session.set('isEmployer', true);
		Session.set('isStudent', false);
	},

	
	'click #register': function(e) {
		e.preventDefault();

		var fname = $('#fname').val();
		var lname = $('#lname').val();
		var email = $('#email').val();
		var password = $('#password').val();
		var confirm = $('#confirm').val();

		console.log(fname, lname, email, password, confirm);
		if (password != confirm)
		{
			console.log('they dont match');
		}


	},
});
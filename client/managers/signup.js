Template.home.helpers({
	isStudent: function() {
		return Session.get('isStudent');
	},
	isEmployer: function() {
		return Session.get('isEmployer');
	}
});

Template.register.events({
	//question for tim...
	//on signup click employ, nav away, signup student. Result: navs to employ
	//click student signup needs to nav to correct page


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
	'keypress #confirm': function(e) {
		// FIX THIS
		// 
		// ========
		// var password = $('#password').val();
		// if (e.target.value != password) {
		// 	console.log('no match');
		// }
		// console.log(password, e.target.value);
	}
});


//question: is the signup.js manager tied to the register.html page? -taylor
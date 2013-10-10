Template.register.helpers({
	isStudent: function() {
		return Session.get('isStudent');
	},
	isEmployer: function() {
		return Session.get('isEmployer');
	}
});

Template.register.events({
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
Template.signup.helpers({
	isStudent: function() {
		return Session.get('isStudent');
	},
	isEmployer: function() {
		return Session.get('isEmployer');
	}
});

Template.signup.events({
	'click .student-button': function() {
		Session.set('isStudent', true);
		Session.set('isEmployer', false);
	},
	'click .employer-button': function() {
		Session.set('isEmployer', true);
		Session.set('isStudent', false);
	}
});
Template.home.events({

	'click .student-button': function() {
		Session.set('isStudent', true);
		Session.set('isEmployer', false);
	},
	'click .employer-button': function() {
		Session.set('isEmployer', true);
		Session.set('isStudent', false);
	}
});
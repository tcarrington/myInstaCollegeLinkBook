Template.StudentProfile.helpers({
	School: function() {
		return Session.get('School');
	}
});

Template.StudentProfile.events({
	'click .School': function() 
	{
		Session.set('Chico', true);
		Session.set('Berkeley', false);
	},
	'click .School': function()
	{
		Session.set('Berkeley', true);
		Session.set('Chico', false);
	}
});
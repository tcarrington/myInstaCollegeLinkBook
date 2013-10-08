Meteor.startup(function() {
	Session.setDefault('currentPage', 'Home');
	var currentPage = Session.get('currentPage');
	$('.nav li a:contains("' + currentPage + '")').addClass('active');

});

Deps.autorun(function() {
	var currentPage = Session.get('currentPage');
	$('.nav li a:contains("' + currentPage + '")').addClass('active');
});
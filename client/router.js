Router.configure({layout: 'layout'});

Router.map(function() {
	this.route('main', {path: '/'});
	this.route('about');
	this.route('signup');
	this.route('contact');
});
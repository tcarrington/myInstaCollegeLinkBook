Router.configure({layout: 'layout'});

Router.map(function() {
	this.route('home', {path: '/'});
	this.route('about');
	this.route('signup');
	this.route('contact');
});
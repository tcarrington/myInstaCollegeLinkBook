Router.configure({layout: 'layout'});

Router.map(function() {
	this.route('home', {
				path: '/',
			    onBeforeRun: function() {
			    	Session.set('currentPage', 'Home');	
			    }
	});
	this.route('about', {
				onBeforeRun: function() {
					Session.set('currentPage', 'About'); 
				}
	});
	this.route('register', {
				onBeforeRun: function() {
					Session.set('currentPage', 'Register');
				}
	});
	this.route('contact', {
				onBeforeRun: function() {
					Session.set('currentPage', 'Contact');
				}
	});
});
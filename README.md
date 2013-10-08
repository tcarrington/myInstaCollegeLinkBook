	-client                   #Code that will run on the client
		-css                  #CSS
		-managers             #javascript code that goes with the templates
		-views                #html templates
	-collections              #code related to our collections of models
	-lib                      #external libraries and universal things like permissions.
	-packages                 #meteorite packages
	-public                   #things like images and font files
	-server                   #Code that will run on the server


	Our models
	users:
	{
		_id: 'ahjbHbhjabhBHJB',
		createdAt: 1379609425768,
		username: 'Testing',
		email: 'testing@mail.csuchico.edu',
		//accountType is where we designate student/company/school on signup
		accountType: 'student',
		//profile will be different for student/company/school 
		profile: {
			avatar: 'http://filepicker.io/api/file/hsbjhfbjshbdfhjbasdc',
			shortDesc: "Hi, I'm a student looking for a job!",
			longDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, voluptas animi veritatis soluta fuga in vel accusantium cupiditate vero culpa est molestias beatae nihil nisi facere incidunt accusamus eligendi distinctio.",
			/* 
			we'll have to think of how we'll store classes. if classes become their own model, then we would store those class id's in this array. Ex. classes: ['JHbngoipiohbJHbhbV', 'AkjsbjkaBJKBKJbbkjb']
			*/
			classes: [CSCI101, CSCI102],
		}		
	}
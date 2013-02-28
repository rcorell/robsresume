 /* resume.js - JavaScript code for Rob Corell's resume at http://robsresume.com

 	Author: Rob Corell
 */

// TODO: namespace

var employmentData = [
	{
		companyName : 			"PayPal",
		jobTitle : 				"Senior UI Developer",
		employmentDuration : 	"2011-current",
		projects : 				
			[
				{
					name 		: 	"Log In with PayPal",
					description : 	"Single sign-on commerce identity",
					detail		: 	"Log In with PayPal allows users to sign in to new websites using their PayPal credentials.  \
									They can then skip the registration process, securely and seamlessly pay for products \
									and, if they desire, consent to share information like their shipping address and phone number.",
					tech		: 	"Implemented with JavaScript, jQuery, Node.js, Linux and Java." 
				}
			]
	},

	{
		companyName : 			"Traitwise",		
		jobTitle: 				"Chief Technical Officer",
		employmentDuration : 	"2008-2011",
		projects : 				
			[	
				{
					name 		: 	"<a href='http://traitwise.com'>Traitwise.com</a>",
					description	: 	"Crowdsourced survey engine with automated analytics",
					detail		: 	"A web 2.0 survey engine that allows communities to	ask	and	rate new survey questions, view automated \
									analytics about the answers, and create and rate results based on them.",
					tech		: 	"Implemented with Ruby on Rails, jQuery, Apache, MySQL, Ubuntu and Facebook using Ruby in Steel" 
				}
			]
	},

	{
		companyName : 			"Adobe",
		jobTitle: 				"Senior Architect",
		employmentDuration : 	"1997-2008",
		projects : 				
			[	
				{
					name 		: 	"<a href='http://photoshop.com'>Photoshop.com</a>",					
					description : 	"Online photo editing, organizing and storage",
					role		: 	"Server Architect",					
					detail		: 	"Adobe's first large web application, this browser-based version of Photoshop for consumers tested \
									the limits of the Flash development and helped sculpt the underlying service platform.  I created \
									and maintained the database schema, acted as technical liaison for its many client and server teams \
									and managed the initial deployment.",
					tech		: 	"Implemented with Flash, Flex, AIR, Merb, nginx, custom C++ database (Ozzy) and CentOS" 
				},

				{
					name 		: 	"Ozzy",
					description : 	"Cloud file storage",
					role		: 	"Consulting Architect",  
					detail		: 	"The Ozzy project aimed to provide a storage service comparable to Amazon's S3, and to serve as a \
									low-level platform for future Adobe services.  I represented client needs to the Ozzy team, consulted \
									with the lead architect and drove feature requests.",
					tech		: 	"Implemented with C++, Slackware, FastCGIs and lighttpd." 
				},

				{
					name 		: 	"Adobe Bridge",
					description : 	"Adobe's file browser and metadata manager",
					role		: 	"Architect", 					
					detail		: 	"Starting as a file selection feature of Photoshop, Adobe Bridge became a full-fledged file browser \
									that supports preview of all Adobe formats, acts as an extensibility platform for the product suites \
									and ships with every Adobe application.  I created the JavaScript API and redesigned the app to \
									adhere to Model-View-Controller principles.",
					tech		: 	"Implemented in C++ for Windows and Mac OS." 
				},

				{
					name 		: 	"BridgeTalk",
					description : 	"JavaScript inter-app communication for desktop products",
					role		: 	"Architect", 					
					detail		: 	"All Adobe applications use BridgeTalk to communicate with each other, usually by sending a \
									JavaScript to be executed in the target DOM.  I identified the need for it,	gained consensus \
									on its implementation strategy, designed the protocol and API, implemented version 1.0 and \
									aided its integration into all CS2 Suite applications.",
					tech		: 	"Implemented in C++ for Windows and Mac OS." 
				},

				{
					name 		: 	"Version Cue",
					description : 	"Version control for non-programmers",
					role		: 	"Technical Lead", 					
					detail		: 	"Version Cue 1.0 offered a familiar filesystem metaphor	for version control and added an \
									exception-based workflow to handle conflicts. I consulted on the API, led its implementation \
									and integration into the first Creative Suite and selected the Open Source \
									<a href='http://www.cs.fsu.edu/~engelen/soap.html'>gSoap</a> library for	our remote \
									procedure-call needs; worked with Adobe	legal and University of Florida to make it viable \
									for corporate development.",
					tech		: 	"Implemented in C++ for Windows and Mac OS." 
				},

				{
					name 		: 	"WebAccess",
					description : 	"Version control for non-programmers",
					role		: 	"Architect", 					
					detail		: 	"An internal library for full-featured network support not offered by Mac or Windows at the \
									time. Designed API and architecture for asynchronous network protocols and coded on them.",
					tech		: 	"Implemented in C++ for Windows and Mac OS." 
				},

				{
					name 		: 	"CreatePDF.com",
					description : 	"Adobe's first full web service",
					role		: 	"Architect", 					
					detail		: 	"CreatePDF added a web front-end and online subscriptions to the Capture 3.0 server support \
									in Acrobat 5.0, becoming Adobe's first profitable web service. I designed and implemented the \
									database schema and client/server protocol.",
					tech		: 	"Implemented in C++, Perl, HTML and JavaScript." 
				},

				{
					name 		: 	"Acrobat 5.0",
					description : 	"Dynamic integration of back-end web services",
					role		: 	"Plug-in Architect", 					
					detail		: 	"Created WHAPI (Web-Hosted Application Plug-In) that self-updated, performed intranet and \
									internet service discovery and dynamically added UI to Acrobat to access new services. \
									Supported Capture 3.0-based OCR.",
					tech		: 	"Acrobat's first C++ plug-in, implemented for Windows and Mac OS." 
				},

				{
					name 		: 	"ADAM",
					description : 	"Scanner library for Acrobat and Photoshop",
					role		: 	"Architect", 					
					detail		: 	"An internal product, ADAM (Adobe Device Acquisition Manager) provided a general scanning \
									library that abstracted TWAIN and ISIS access. I co-designed and coded on it.",
					tech		: 	"Implemented in C++ for Windows and Mac OS." 
				}

			]
	},

	{
		companyName : 			"Brute Force Games",
		jobTitle: 				"Chief Technical Officer",
		employmentDuration : 	"1996-1997",
		projects : 				
			[	
				{
					name 		: 	"Delvers",
					description	: 	"Diablo-style action RPG (before Diablo)",
					detail		: 	"I created the isometric game engine and associated art tools.",
					tech		: 	"Implemented in C++ for Windows, using DirectX." 
				}
			]
	},	

	{
		companyName : 			"SimTex / MicroProse",
		jobTitle: 				"Project Lead, Software Engineer",
		employmentDuration 	: 	"1995-1996",
		projects : 				
			[
				{
					name 		: 	"Agents of Justice",
					description	: 	"Turn-based squad combat game",
					role		: 	"Project Lead",
					detail		: 	"Designed and implemented IPX network library and created 2D visual effects",
					tech		: 	"Implemented in C++ for Windows." 
				},

				{
					name 		: 	"Master of Orion II",
					description	: 	"4X turn-based strategy game",
					role		: 	"Library programer",
					detail		: 	"Designed and implemented IPX network library and created 2D visual effects",
					tech		: 	"Implemented in C++ for Windows." 
				}			
			]
	},	

	{
		companyName : 			"Origin Systems",		
		jobTitle: 				"Software Engineer",
		employmentDuration : 	"1993-1995",
		projects : 				
			[	
				{
					name 		: 	"Crusader: No Remorse",
					description	: 	"Isometric action game",
					detail		: 	"",
					tech		: 	"Implemented in C++ for Windows." 
				},

				{
					name 		: 	"Ultima XIII: Pagan",
					description	: 	"Fantasy role-playing game",
					detail		: 	"",
					tech		: 	"Implemented in C++ for Windows." 
				},

				{
					name 		: 	"Wing Commander Armada",
					description	: 	"Multiplayer space combat game",
					detail		: 	"",
					tech		: 	"Implemented in C++ for Windows." 
				}
			]
	},		

	{
		companyName : 			"University of Texas, Austin",		
		jobTitle: 				"Bachelor of Science, Computer Science",
		employmentDuration : 	"1988-1992",
		projects : []				
	},		
				
];


var experienceTemplate = doT.template( " \
	<div>\
		<span class='companyName'>{{=it.companyName }}</span> \
		<span class='jobTitle'>{{=it.jobTitle}}</span> \
		<span class='employmentDuration'>{{=it.employmentDuration}}</span> \
		{{? it.projects }} \
			<div class='project'> \
			Foo \
			</div> \
		{{?}} \
	</div>" );

$(document).ready(function() {

 	$( '#contactInfo' ).hide();
 	$( '#contactToggle' ).click( function() {
 			$( '#contactInfo' ).toggle();
 		});


	var $experience = $("#experience");

	for( var i = 0; i < employmentData.length; i++ ) {
		var job = employmentData[i];
		$experience.append( experienceTemplate(job) );	
	};

/*
	jQuery.each( employmentData, function(companyName,job) {

		function addElement( tag, cssClass, value, $target ) {
			$( "<" + tag + "></" + tag +">" ).addClass( cssClass ).html( value ).appendTo( $target );
		}


		var $job = $( "<div></div>" ).addClass( "job" );
		addElement( "span", "companyName", 			companyName + ", ", 	$job );
		addElement( "span", "jobTitle",				job.jobTitle,			$job );
		addElement( "span", "employmentDuration",	job.employmentDuration,	$job );

		jQuery.each( job.projects, function(key,project) {
			var $project = $( "<div></div>", { "class" : "project" } );
			addElement( "span", "projectName", 			project.name + " ", 	$project );
			addElement( "span", "projectDescription", 	project.description, 	$project );
			addElement( "div", 	"projectDetail", 		project.detail, 		$project );			
			addElement( "div", 	"projectTech", 			project.tech, 			$project );	
		
			$project.appendTo( $job );
		});

		$job.appendTo( $experience );
	});
*/
/*
	var template = doT.template("<h1>Here is a sample template {{=it.foo}}</h1>");
	var resultText = template({foo: 'with doT'});

	$experience.append( resultText );
*/
	//TODO: handle URL with "/full" at the end that displays all toggle areas
	//if( /full$/.test(document.URL) || /showDetails$/.test(document.URL)	)
	//	toggleAll();

 });




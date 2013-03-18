 /* resume.js - JavaScript code for Rob Corell's resume at http://robsresume.com

 	Author: Rob Corell
 */

var robsresume = robsresume || {};


robsresume.data = { 
	skills: [
		{
			name:			"Leadership",
			description : 	"Lead role as architect/coder on ten large projects from inception to success."
		},
		
		{
			name: 			"Technical",
			description: 	"API design, web services, networking, C++, JavaScript/jQuery, Ruby, Rails, " +
							"Java, metadata, cross-platform and internationalization."
		},

		{
			name: 			"Communication",
			description: 	"Published author, experienced public speaker, skilled at remote presence " +
							"and achieving consensus."
		},

		{
			name:  			"Process",
			description: 	"Project manager, Scrum Master"
		}
	],
	
	experience: [
		{
			companyName: 			"PayPal",
			jobTitle: 				"Senior UI Developer",
			employmentDuration: 	"2011-current",
			projects : 				
				[
					{
						name 		: 	"Log In with PayPal",
						description : 	"Single sign-on commerce identity",
						detail		: 	"Log In with PayPal allows users to sign in to new websites using their PayPal credentials.  " +
										"They can then skip the registration process, securely and seamlessly pay for products " +
										"and, if they desire, consent to share information like their shipping address and phone number.",
						tech		: 	"JavaScript (jQuery, less, doT, Node.js, grunt), Java, Spring and Linux." 
					}
				]
		},

		{
			companyName: 			"Traitwise",		
			jobTitle: 				"Chief Technical Officer",
			employmentDuration : 	"2008-2011",
			projects : 				
				[	
					{
						name 		: 	"<a href='http://traitwise.com'>Traitwise.com</a>",
						description	: 	"Crowdsourced survey engine with automated analytics",
						detail		: 	"A web 2.0 survey engine that allows communities to ask and rate new survey questions, view automated " +
										"analytics about the answers, and create and rate results based on them.",
						tech		: 	"Ruby on Rails, JavaScript/jQuery, Apache, MySQL, Ubuntu and Facebook"
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
						detail		: 	"Adobe's first large web application, this browser-based version of Photoshop for consumers tested " +
										"the limits of the Flash development and helped sculpt the underlying service platform.  I created " +
										"and maintained the database schema, acted as technical liaison for its many client and server teams " +
										"and managed the initial deployment.  Designed API for middleware servers, implemented " +
										"friends feature.",
						tech		: 	"Flash, Flex, C++, AIR, Merb, nginx, custom database (Ozzy) and CentOS" 
					},

					{
						name 		: 	"Ozzy",
						description : 	"Cloud file storage",
						role		: 	"Consulting Architect",  
						detail		: 	"The Ozzy project aimed to provide a storage service comparable to Amazon's S3, and to serve as a " +
										"low-level platform for future Adobe services.  I represented client needs to the Ozzy team, consulted " +
										"with the lead architect and drove feature requests.",
						tech		: 	"C++, FastCGI, lighttpd and Slackware Linux"
					},

					{
						name 		: 	"Adobe Bridge",
						description : 	"File browser and metadata manager",
						role		: 	"Architect", 					
						detail		: 	"Starting as a file selection feature of Photoshop, Adobe Bridge became a full-fledged file browser " +
										"that supports preview of all Adobe formats, acts as an extensibility platform for the product suites " +
										"and ships with every Adobe application.  I created the JavaScript API and redesigned the app to " +
										"adhere to Model-View-Controller principles.",
						tech		: 	"JavaScript, C++, MySQL" 
					},

					{
						name 		: 	"BridgeTalk",
						description : 	"JavaScript inter-app communication for desktop products",
						role		: 	"Architect", 					
						detail		: 	"All Adobe applications use BridgeTalk to communicate with each other, usually by sending a " +
										"JavaScript to be executed in the target DOM.  I identified the need for it,	gained consensus " +
										"on its implementation strategy, designed the protocol and API, implemented version 1.0 and " +
										"aided its integration into all CS2 Suite applications.",
						tech		: 	"C++, Windows/MacOS" 
					},

					{
						name 		: 	"Version Cue",
						description : 	"Version control for non-programmers",
						role		: 	"Technical Lead", 					
						detail		: 	"Version Cue 1.0 offered a familiar filesystem metaphor	for version control and added an " +
										"exception-based workflow to handle conflicts. I consulted on the API, led its implementation " +
										"and integration into the first Creative Suite and selected the Open Source " +
										"<a href='http://www.cs.fsu.edu/~engelen/soap.html'>gSoap</a> library for our remote " +
										"procedure-call needs; worked with Adobe	legal and University of Florida to make it viable " +
										"for corporate development.",
						tech		: 	"C++, Windows/MacOS" 
					},

					{
						name 		: 	"WebAccess",
						description : 	"Version control for non-programmers",
						role		: 	"Architect", 					
						detail		: 	"An internal library for full-featured network support not offered by Mac or Windows at the " +
										"time. Designed API and architecture for asynchronous network protocols and coded on them.",
						tech		: 	"C++, Windows/MacOS" 
					},

					{
						name 		: 	"CreatePDF.com",
						description : 	"Adobe's first full web service",
						role		: 	"Architect", 					
						detail		: 	"CreatePDF added a web front-end and online subscriptions to the Capture 3.0 server support " +
										"in Acrobat 5.0, becoming Adobe's first profitable web service. I designed and implemented the " +
										"database schema and client/server protocol.",
						tech		: 	"C++, Perl, HTML and JavaScript" 
					},

					{
						name 		: 	"Acrobat 5.0",
						description : 	"Dynamic integration of back-end web services",
						role		: 	"Plug-in Architect", 					
						detail		: 	"Created WHAPI (Web-Hosted Application Plug-In) that self-updated, performed intranet and " +
										"internet service discovery and dynamically added UI to Acrobat to access new services. " +
										"Supported Capture 3.0-based OCR.",
						tech		: 	"Acrobat's first C++ plug-in, implemented for Windows and MacOS" 
					},

					{
						name 		: 	"ADAM",
						description : 	"Scanner library for Acrobat and Photoshop",
						role		: 	"Architect", 					
						detail		: 	"An internal product, ADAM (Adobe Device Acquisition Manager) provided a general scanning " +
										"library that abstracted TWAIN and ISIS access. I co-designed and coded on it.",
						tech		: 	"C++, Windows/MacOS" 
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
						detail		: 	"Created isometric game engine and associated art tools.",
						tech		: 	"C++ for Windows, using DirectX" 
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
						tech		: 	"C++ for Windows" 
					},

					{
						name 		: 	"Master of Orion II",
						description	: 	"4X turn-based strategy game",
						role		: 	"Library programer",
						detail		: 	"Designed and implemented IPX network library and created 2D visual effects",
						tech		: 	"C++ for Windows" 
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
						tech		: 	"C++ for Windows" 
					},

					{
						name 		: 	"Ultima XIII: Pagan",
						description	: 	"Fantasy role-playing game",
						detail		: 	"",
						tech		: 	"C++ for Windows" 
					},

					{
						name 		: 	"Wing Commander Armada",
						description	: 	"Multiplayer space combat game",
						detail		: 	"",
						tech		: 	"C++ for Windows" 
					}
				]
		},		

		{
			companyName : 			"University of Texas, Austin",		
			jobTitle: 				"Bachelor of Science, Computer Science",
			employmentDuration : 	"1988-1992",
			projects : []				
		}			
	],

	notableWorks: [
		{
			brief: 		"<a href='http://happyfuncoding.com'>happyfuncoding.com</a>, an instructional, game-oriented JavaScript IDE",
			detail: 	""
		},

		{
			brief: 		"<a href='http://www.google.com/patents/US7249318'>U.S. Patent #7,249,318 - Automatic Stylesheet Generation</a>",
			detail: 	""
		},

		{
			brief: 		"Co-authored three JavaScript DOM references and guides",
			detail: 	"Adobe Bridge CS2 JavaScript Reference, Adobe Bridge CS3 JavaScript Reference, Adobe Bridge CS3 JavaScript Guide"
		},

		{
			brief: 		"Addressed the <abbr title='World Wide Web Consortium'>W3C</abbr> about Adobe's Open Source Extensible Metadata Platform",
			detail: 	"In 2002, <a href='http://www2002.org/devday.html#D2'>addressed the W3C developers</a> and met with " +
						"<a href='http://en.wikipedia.org/wiki/Tim_Berners-Lee'>Tim Berners-Lee</a> and <a href='http://en.wikipedia.org/wiki/Ramanathan_V._Guha'> " +
						"Guha</a> among others, in order to create an easily-parsable subset of <a href='http://en.wikipedia.org/wiki/Resource_Description_Framework'>RDF</a>"
		},

		{
			brief: 		"Helped foster telecommuter culture at Adobe",
			detail: 	"At Adobe, I worked with teams sited at numerous locations around the U.S and abroad.  Amongst others, I evangelized " +
						"the use of Instant Messaging (IM), wiki and chatrooms to bind these widely spread teams together.  I helped provide the necessary tools, " +
						"offered technical support, managed the structure of wiki sites and made myself almost constantly available to answer questions via IM. " +
						"In recognition of the value of these tools, the IT department now runs them and they have become a ubiquitous aspect of Adobe's corporate " +
						"culture."
		}
	],

	references: [
		{
			name: 		"Zack Simpson", 
			role: 		"Chief Architect",
			company: 	"Traitwise",
			link: 		"http://www.linkedin.com/pub/zack-booth-simpson/0/4b3/108" 
		},

		{
			name: 		"Dan Brotsky", 
			role: 		"Chief Architect",
			company: 	"Adobe",
			link: 		"http://www.linkedin.com/in/dbrotsky" 
		},

		{
			name: 		"Arno Gourdol", 
			role: 		"Senior Director, Web Platform and Authoring",
			company: 	"Adobe",
			link: 		"http://www.linkedin.com/in/arnog" 
		}				
	]
};


$(document).ready(function() {

	var mode 					= "resume";
	var htmlResumeDotTemplate 	= doT.template( $("#htmlResumeTemplate").html() );
	var htmlResume 				= htmlResumeDotTemplate( robsresume.data );
	var textResumeDotTemplate 	= null;
	var textResume 				= null;
	var $resumeContent			= $("#resumeContent");

	$("#resumeContent").html( htmlResume );	

 	$("#resumeLink").click( function() {
 		switch( mode ) {
 			case "resume":
 				break;

 			case "CV":
				$(".cvContent").slideUp();
				break;

			case "plaintext":
				$resumeContent
					.hide()
					.html( htmlResume )
					.fadeIn();
				$(".cvContent").hide();
				break;
		}

		mode = "resume";
 	});

 	$("#CV").click( function() {
 		switch( mode ) {
 			case "resume":
				$(".cvContent").slideDown();
				break;

			case "CV":
				break;

			case "plaintext":
				$resumeContent
					.hide()
					.html( htmlResume )
					.fadeIn();
					$(".cvContent").show();
				break;
		}

		mode = "CV";		
 	}); 	

 	$("#plaintext").click( function() {
		textResumeDotTemplate 	= textResumeDotTemplate || doT.template( $("#textResumeTemplate").html() );	
		textResume				= textResume || textResumeDotTemplate( robsresume.data );
		$resumeContent
			.hide()
			.html( textResume )
			.fadeIn();

		mode = "plaintext";
 	});

 	$("#CV").click( function() {
		var jspdf = document.createElement( "link" );
		jspdf.setAttribute( "type","text/javascript" );
		jspdf.setAttribute( "src", "jspdf.min.js" );
	}); 	

 	$('.contactInfo').hide();
 	$('#contact').click( function() {
 		$('.contactInfo').fadeToggle();
 	});	 	

 });




 /* resume.js - JavaScript code for Rob Corell's resume at http://robsresume.com

 	Author: Rob Corell
 */

// TODO: namespace

var employmentData = {
	"PayPal"	: 	{ 	
						jobTitle : 				"Senior UI Developer",
						employmentDuration : 	"2011-current",
						projects : 				
							{	project: {
									projectName 		: 	"Log In with PayPal",
									projectDescription 	: 	"Single sign-on commerce identity",
									projectDetail		: 	"Log In with PayPal allows users to sign in to new websites using their PayPal credentials.  \
															They can then skip the registration process, securely and seamlessly pay for products \
															and, if they desire, consent to share information like their shipping address and phone number.",
									projectTech			: 	"Implemented with JavaScript, jQuery, Node.js, Linux and Java." 
								}
							}
					},

	"Traitwise"	:	{
						jobTitle: 				"Chief Technical Officer",
						employmentDuration : 	"2008-2011",
						projects : 				
							{	project: {
									projectName 		: 	"<a href='http://traitwise.com'>Traitwise.com</a>",
									projectDescription 	: 	"Crowdsourced survey engine with automated analytics",
									projectDetail		: 	"A web 2.0 survey engine that allows communities to	ask	and	rate new survey questions, view automated \
															analytics about the answers, and create and rate results based on them.",
									projectTech			: 	"Implemented with Ruby on Rails, jQuery, Apache, MySQL, Linux and Facebook using Ruby in Steel" 
								}
							}
					},

	"Adobe"		: 	{
						jobTitle: 				"Senior Architect",
						employmentDuration : 	"1997-2008",
						projects : 				
							{	project: {
									projectName 		: 	"<a href='http://photoshop.com'>Photoshop.com</a>",
									projectDescription 	: 	"Online photo editing, organizing and storage",
									projectDetail		: 	"Adobe's first large web application, this browser-based version of Photoshop for consumers tested \
															the limits of the Flash development and helped sculpt the underlying service platform.  I created \
															and maintained the database schema, acted as technical liaison for its many client and server teams \
															and managed the initial deployment.",
									projectTech			: 	"Implemented with Flash, Flex, AIR, Merb, nginx, lighttpd, custom database (Ozzy) and Linux" 
								}
							}
					}
				
};


$(document).ready(function() {

	$contactInfo 	= $( '#contactInfo' );
	$contactToggle	= $( '#contactToggle' );

 	$contactInfo.hide();
 	$contactToggle.click( function() {
 			$contactInfo.toggle();
 		});


	$experience = $("#experience");

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
			addElement( "span", "projectName", 			project.projectName + " ", 	$project );
			addElement( "span", "projectDescription", 	project.projectDescription, $project );
			addElement( "div", 	"projectDetail", 		project.projectDetail, 		$project );			
			addElement( "div", 	"projectTech", 			project.projectTech, 		$project );	
		
			$project.appendTo( $job );
		});

		$job.appendTo( $experience );
	});

	//TODO: handle URL with "/full" at the end that displays all toggle areas
	//if( /full$/.test(document.URL) || /showDetails$/.test(document.URL)	)
	//	toggleAll();

 });




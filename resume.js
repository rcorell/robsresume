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
									projectTech			: 	"Implemented with JavaScript, jQuery, Node.js and Java." 
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




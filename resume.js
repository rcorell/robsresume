 /* resume.js - JavaScript code for Rob Corell's resume at http://robsresume.com

 	Author: Rob Corell
 */

 $(document).ready(function() {
 	$contactInfo 	= $( '#contactInfo' );
	$contactToggle	= $( '#contactToggle' );

 	$contactInfo.hide();
 	$contactToggle.click( function() {
 			$contactInfo.toggle();
 		});
 });

		function expandHidable( index, hideContractionControl )
		{
			var hidable			= document.getElementById( "hidable" + index );
			var hidableToggle	= document.getElementById( "hidableToggle" + index );

			hidable.className = "show";
			if( typeof hideContractionControl == "undefined" )
				hidableToggle.innerHTML = "[&ndash;]";	
			else
				hidableToggle.innerHTML = "";
		}
		
		function contractHidable( index )
		{
			var hidable			= document.getElementById( "hidable" + index );
			var hidableToggle	= document.getElementById( "hidableToggle" + index );

			hidable.className = "hide";	
			hidableToggle.innerHTML = "[+]";				
		}		
		
		function toggleHidable( index )
		{
			var hidable	= document.getElementById( "hidable" + index );		
			
			if( hidable.className == "hide" )
				expandHidable( index );
			else
				contractHidable( index );
		}

		var toggleAllState	= "expand";
		var numHidables		= 21;
		var adobeExpanded	= false;
				
		function toggleAll()
		{
			var masterToggle = document.getElementById( "masterToggle" );
			var adobeToggle = document.getElementById( "adobeToggle" );							
			
			if( toggleAllState == "expand" )
			{
				for( var i = 0; i < numHidables; i++ )	
					expandHidable( i, "hideContractionControl" );					
			
				toggleAllState = "contract";
				masterToggle.innerHTML = " hide&nbsp;details ";
				
				adobeExpanded = true;
				adobeToggle.innerHTML = "";				
			}
			else
			{
				for( var i = 0; i < numHidables; i++ )	
					contractHidable( i );					
			
				toggleAllState = "expand";	
				masterToggle.innerHTML = "show&nbsp;details";
				
				adobeExpanded = false;
				adobeToggle.innerHTML = "[+]";
			}
		}		
		
		var adobeHidables = [ 0, 1, 6, 7, 8, 9, 10, 11, 12, 13, 19 ];
		function toggleAdobe()
		{
			var adobeToggle = document.getElementById( "adobeToggle" );
			
			if( adobeExpanded )
			{
				for( var i = 0; i < adobeHidables.length; i++ )
					contractHidable( adobeHidables[i] );					
					
				adobeToggle.innerHTML = "[+]";				
				
				adobeExpanded = false;
			}
			else
			{
				for( var i = 0; i < adobeHidables.length; i++ )
					expandHidable( adobeHidables[i], "hideContractionControl" );					
					
				adobeToggle.innerHTML = "[&ndash;]";
				
				adobeExpanded = true;
			}		
		}
		
		if( /full$/.test(document.URL) || /showDetails$/.test(document.URL)	)
			toggleAll();



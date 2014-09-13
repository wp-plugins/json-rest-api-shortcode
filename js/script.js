/**
 * When the user submits the form, Send the API request.
 * 
 * @package WordPress
 * @subpackage SJF_Test_JSON_REST_API
 * @since SJF_Test_JSON_REST_API 1.0
 */

/**
 * When the user submits the form, Send the API request.
 */
( function( $ ) {

    // Set us up for a sick show/hide when we get a response from the API.
	$( '#output' ).hide();

	// When the form is submit...
	$( '#sjf_tjra_form' ).on( 'submit', function( event ) {
		
		// Don't actually submit the form or reload the page.
		event.preventDefault();
    
    	// Replace it with loading text.
		$( '#sjf_tjra_form [type="submit"]' ).replaceWith( 'loading...' );
        
        domain = $( '#domain' ).text();
        method = $( '#method' ).text();
        route = $( '#route' ).text();
        data = $( '#data' ).text();
        
		// Send the post ID to the server side so we can get content for this post.
        var ajaxData = {

            // This value corresponds with a call to "localize script" in the php code.
            action: 'sjf_tjra_ajax',
            
        	domain: domain,
			
			route: route,
			
			method: method,
			
			data: data,

        };

        $.get( sjf_tjra.ajaxurl, ajaxData, function( ajaxData ) {
            
            $( '#output' ).html( ajaxData ).fadeIn();

            $( '#sjf_tjra_form' ).fadeOut();

        });
        
        return false;
    });
})( jQuery );
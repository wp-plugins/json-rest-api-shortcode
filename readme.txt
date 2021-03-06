=== JSON REST API Shortcode ===
Contributors: scofennell@gmail.com
Tags: JSON REST API, JSON REST API Shortcode
Requires at least: 3.4.2
Tested up to: 4.0
Stable tag: 1.0.4
License: GPLv2
License URI: http://www.gnu.org/licenses/gpl-2.0.html

This plugin offers developers a simple block of code for hello-worlding the JSON REST API, and a shortcode to watch it in action: [json].

== Description ==

Activate this plugin and use the shortcode [json] in a post or page.  It takes a few different arguments that will be documented soon.

== Installation ==

This section describes how to install the plugin and get it working.

1. Upload `json-rest-api-shortcode` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Activate this plugin and use the shortcode [json] in a post or page.  It takes a few different arguments that will be documented soon.

== Frequently Asked Questions ==

= Does my blog need the JSON REST API plugin in order for this plugin to work? =

Until the JSON REST API is merged into core, yes.

= If I use this plugin to ping a remote blog, does the remote blog need the JSON REST API? 

Yes.

== Screenshots ==

1. This screen shot shows the result of using the shortcode to fire a JSON request.

== Changelog ==

= 1.0.4 =
* Include auth data in debug output.

= 1.0.3 =
* Fix bug with passing nonce for cookie auth.

= 1.0.2 =
* Refactor duplicate code into methods.

= 1.0.1 =
* Refactor plugin to use WP Ajax API & WP HTTP API.

= 1.0 =
* Initial Release
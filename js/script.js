/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($) {

/* START: SMARTMENUS */
    (function($) {
    // initialise smartmenus for main menu
    // $('#main-menu').smartmenus();
    })(jQuery);
/* END: SMARTMENUS */

// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    $(document).ready(function(){
        // $('#block-system-main-menu ul li.first').removeClass('leaf');
        // $('#block-system-main-menu ul li.last').removeClass('leaf');
        //  $('#block-system-main-menu ul li.leaf').prepend('<span class="halflings halflings-play"></span>');
        // $('#block-system-main-menu ul li.first').prepend('<span class="glyphicon glyphicon-home"></span>');
        // $('#block-system-main-menu ul li.last').prepend('<span class="halflings halflings-play"></span>');  

        // $('#block-menu-menu-secondary-menu ul>li>ul>li.leaf').prepend('<span class="halflings halflings-menu-right"></span>');
        // $('#block-menu-menu-secondary-menu>ul>li.leaf').prepend('<span class="halflings halflings-play"></span>');

        //$('#block-menu-menu-rechte-sidebar ul li.first').prepend('<span class="glyphicons glyphicons-pencil"></span>');
        //$('#block-menu-menu-rechte-sidebar ul li.last').prepend('<span class="glyphicons glyphicons-education"></span>');
    });

  }
};


})(jQuery);

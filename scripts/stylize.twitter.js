$(window).load(function()
{
// Define the style variables
var $import_google_font = "http://fonts.googleapis.com/css?family=Exo+2:700,400,100,100italic,700italic,400italic";
var $background_color = "transparent";
var $font = "'Exo 2',Georgia,sans-serif";
var $font_weight = "normal";
var $font_size = "115%";
var $line_height = "22px";
var $border_color = "#36b787";
var $border_radius = "0px";  //Curve the entire iframe
var $text_color = "#fff";
var $link_color = "#fff";
var $name_color = "#fff";
var $subtext_color = "#fff"; // Colour of any small text
var $sublink_color = "#fff"; // Colour of smaller links, eg: @user, date, expand/collapse links
var $avatar_border = "0px solid #36b787";
var $avatar_border_radius = "0%"; //Curve icons
var $icon_color = "#fff"; // Color of the reply/retweet/favourite icons
var $icon_hover_color = "#fff"; // Hover color the reply/retweet/favourite icons
var $header_background = "#36b787";
var $header_text_color = "#ffffff";
var $follow_button_link_color = "#5ea9dd";
var $footer_background = "#36b787";
var $footer_tweetbox_background = "#2d936d";
var $footer_tweetbox_textcolor = "#ffffff";
var $footer_tweetbox_border ="0px";
var $load_more_background ="#2d936d";
var $load_more_text_color = "#ffffff";

// Apply the styles
// ... Looks into the iframe that the twitter widget makes, appends stylization to the "head" area of it, and the browser then renders accordingly.
// We are literally adding CSS to the widget to override twitter's default Sh**y CSS.  At least, in our case. ;D
$("#twitter-widget-0").contents().find('head').append('<style>@import url('+$import_google_font+'); .html, body, h1, h2, h3, blockquote, p, ol, ul, li, img, iframe, button, .tweet-box-button{font-family:'+$font+' !important;font-weight:'+$font_weight+' !important; font-size:' +$font_size +'!important; line-height: ' +$line_height +'!important;} .timeline{border-radius: ' + $border_radius + '!important;} .thm-dark .retweet-credit,.h-feed, .stats strong{color:' + $text_color + ' !important;}a:not(.follow-button):not(.tweet-box-button):not(.expand):not(.u-url), .load-more{color:' + $link_color + ' ;} .follow-button{color:' + $follow_button_link_color + ' !important;} .timeline-header{background:' + $header_background + '; border-radius:' + $border_radius + ' ' + $border_radius + ' 0px 0px;} .timeline-header h1 a{color:' + $header_text_color + ' !important;} .timeline-footer{border-radius:0px 0px ' + $border_radius + ' ' + $border_radius + ' !important; background:' + $footer_background + ' !important;} .tweet-box-button{background-color:' + $footer_tweetbox_background + ' !important; color:' + $footer_tweetbox_textcolor + ' !important; border:' + $footer_tweetbox_border + ' !important;} .timeline .stream, .tweet-actions{background:' + $background_color + ' !important;} .tweet-actions{box-shadow:0 0 10px 5px' + $background_color + ' !important;} .ic-mask{background-color:' + $icon_color + ' !important;} a:hover .ic-mask, a:focus .ic-mask{background-color:' + $icon_hover_color + ' !important;} .header .avatar{border-radius: '+ $avatar_border_radius + ' !important; border:' + $avatar_border + ' !important;} .p-name{color:'+$name_color+' !important;} .customisable-border{border-color:' + $border_color + ' !important;} span.p-nickname, .u-url, .expand{color:'+$sublink_color+' !important;} .load-more, .no-more-pane {background-color:' + $load_more_background + ' !important; color:' + $load_more_text_color + '!important;} .retweet-credit{color:' + $subtext_color + ' !important;}</style>');
$("#twitter-widget-1").contents().find('head').append('<style>@import url('+$import_google_font+'); .html, body, h1, h2, h3, blockquote, p, ol, ul, li, img, iframe, button, .tweet-box-button{font-family:'+$font+' !important;font-weight:'+$font_weight+' !important; font-size:' +$font_size +'!important; line-height: ' +$line_height +'!important;} .timeline{border-radius: ' + $border_radius + '!important;} .thm-dark .retweet-credit,.h-feed, .stats strong{color:' + $text_color + ' !important;}a:not(.follow-button):not(.tweet-box-button):not(.expand):not(.u-url), .load-more{color:' + $link_color + ' ;} .follow-button{color:' + $follow_button_link_color + ' !important;} .timeline-header{background:' + $header_background + '; border-radius:' + $border_radius + ' ' + $border_radius + ' 0px 0px;} .timeline-header h1 a{color:' + $header_text_color + ' !important;} .timeline-footer{border-radius:0px 0px ' + $border_radius + ' ' + $border_radius + ' !important; background:' + $footer_background + ' !important;} .tweet-box-button{background-color:' + $footer_tweetbox_background + ' !important; color:' + $footer_tweetbox_textcolor + ' !important; border:' + $footer_tweetbox_border + ' !important;} .timeline .stream, .tweet-actions{background:' + $background_color + ' !important;} .tweet-actions{box-shadow:0 0 10px 5px' + $background_color + ' !important;} .ic-mask{background-color:' + $icon_color + ' !important;} a:hover .ic-mask, a:focus .ic-mask{background-color:' + $icon_hover_color + ' !important;} .header .avatar{border-radius: '+ $avatar_border_radius + ' !important; border:' + $avatar_border + ' !important;} .p-name{color:'+$name_color+' !important;} .customisable-border{border-color:' + $border_color + ' !important;} span.p-nickname, .u-url, .expand{color:'+$sublink_color+' !important;} .load-more, .no-more-pane {background-color:' + $load_more_background + ' !important; color:' + $load_more_text_color + '!important;} .retweet-credit{color:' + $subtext_color + ' !important;}</style>');
});

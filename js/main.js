(function(){"use strict";jQuery(document).ready(function(){$(window).on("scroll",function(){if($(document).scrollTop()>400){$(".bottom-to-top").css("transform","scale(1,1)")}else{$(".bottom-to-top").css("transform","scale(0,0)")}
if($(document).scrollTop()>50){$(".bottom-bar").css("bottom","0")}else{$(".bottom-bar").css("bottom","-41px")}})})}(jQuery))
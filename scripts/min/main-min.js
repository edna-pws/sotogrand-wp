var util={Global:{init:function(){var e=this;e.preloader(),e.headerBannerLayout(),e.headerResize(),e.owlSlider(),e.showMap(),e.carouselPhotos(),e.subscribeLightBox()},headerBannerLayout:function(){function e(){var e=$(window).height()-82+"px";$(".home .l-banner").css("height",e),e=$(window).height()+"px",$(window).scroll(function(){var e=$(this).scrollTop();$(".banner-caption").css({"margin-top":-(e/5)+"px",opacity:1-e/300}),$(".topbar").css({opacity:1-e/800})})}var a=function(){e()};e(),$(document).ready(a),$(window).resize(a)},subscribeLightBox:function(){function e(e){e.preventDefault();var a=$("#subscribe-wrapper");a.hasClass("hidden")?a.fadeIn().removeClass("hidden"):a.addClass("hidden")}function a(e){"form-button"===e.target.id&&$("#subscribe-wrapper").fadeOut().addClass("hidden")}$("#subscribe").on("click",e),$("#form-button").on("click",a)},carouselPhotos:function(){$("#myCarousel").carousel({interval:4e3}),$("[id^=carousel-selector-]").click(function(){var e=$(this).attr("id"),a=e.substr(e.length-1);a=parseInt(a),$("#myCarousel").carousel(a),$("[id^=carousel-selector-]").removeClass("selected"),$(this).addClass("selected")}),$("#myCarousel").on("slide",function(e){var a=$(".item.active").data("slide-number");a=parseInt(a),$("[id^=carousel-selector-]").removeClass("selected"),$("[id=carousel-selector-"+a+"]").addClass("selected")})},headerResize:function(){function e(){var e=$(window).scrollTop(),a=200;e>a?($(".nav.navbar-nav").addClass("m1"),$(".navbar-brand > img").addClass("img-small"),$(".navbar-top").addClass("h70")):($(".nav.navbar-nav").removeClass("m1"),$(".navbar-brand > img").removeClass("img-small"),$(".navbar-top").removeClass("h70"))}$(window).on("scroll",e)},preloader:function(){$("#status").fadeOut(),$("#preloader").delay(350).fadeOut("slow"),$("body").delay(350).css({overflow:"visible"})},owlSlider:function(){$("#carousel-promo").owlCarousel({items:3,addClassActive:!0})},showMap:function(){!function(){window.onload=function(){var e=new google.maps.Map(document.getElementById("map"),{center:new google.maps.LatLng(10.300141,124.016376),zoom:15,disableDefaultUI:!0,scrollwheel:!1,disableDoubleClickZoom:!0,draggable:!0,mapTypeControl:!0,mapTypeId:google.maps.MapTypeId.ROADMAP,zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL}}),a=[{stylers:[{saturation:-100},{lightness:0}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#d2d2d2"}]}];e.setOptions({styles:a});for(var t=new google.maps.MarkerImage("images/icons/map-marker.png",new google.maps.Size(48,48),new google.maps.Point(0,0),new google.maps.Point(12,24)),n=[{title:'<i class="fa fa-map-marker"></i> La Mirada Hotel',lat:10.3004099,lng:124.0150216,description:'<div id="listName-interestpoint1" class="mapContent"><h3>La Mirada Hotel</h3><span>Dap-Dap, Mactan, Lapu-Lapu City 6015 Cebu</span><a target="_blank" href="/" class="">More Info</a><a target="_blank" href="">Get Directions</a></div>',marker:null},{title:'<i class="fa fa-map-marker"></i> La Breza Hotel',lat:14.641341,lng:121.037057,description:'<div id="listName-interestpoint2" class="mapContent"><h3>La Breza Hotel</h3><span>Mother Ignacia Ave Diliman, Manila 7876 Metro Manila, Philippines</span><a target="_blank" href="/" class="">More Info</a><a target="_blank" href="">Get Directions</a></div>',marker:null},{title:'<i class="fa fa-map-marker"></i> Stradella Hotel',lat:30.2625927,lng:-87.6134412,description:'<div id="listName-interestpoint3" class="mapContent"><h3>Stradella Hotel</h3><span>24060 Perdido Beach Blvd<br>Orange Beach, Alabama 36561</span><a target="_blank" href="/" class="">More Info</a><a target="_blank" href="">Get Directions</a></div>',marker:null},{title:'<i class="fa fa-map-marker"></i> Wyndham Hotel',lat:30.2625927,lng:-87.6134412,description:'<div id="listName-interestpoint3" class="mapContent"><h3>Stradella Hotel</h3><span>24060 Perdido Beach Blvd<br>Orange Beach, Alabama 36561</span><a target="_blank" href="/" class="">More Info</a><a target="_blank" href="">Get Directions</a></div>',marker:null},{title:'<i class="fa fa-map-marker"></i> Marriot Suites',lat:30.2625927,lng:-87.6134412,description:'<div id="listName-interestpoint3" class="mapContent"><h3>Stradella Hotel</h3><span>24060 Perdido Beach Blvd<br>Orange Beach, Alabama 36561</span><a target="_blank" href="/" class="">More Info</a><a target="_blank" href="">Get Directions</a></div>',marker:null}],o=new google.maps.InfoWindow,i=0,l=n.length;l>i;i++){var r=n[i],s=new google.maps.LatLng(r.lat,r.lng),d=new google.maps.Marker({position:s,map:e,title:r.title,icon:t});r.marker=d,function(a,t){google.maps.event.addListener(a,"click",function(n){o.setContent(t.description),o.open(e,a)});var n=$("<li>"+t.title+"</li>");if("undefined"!=typeof t.pageid)for(var i=t.pageid.split(","),l=0;l<i.length;l++)n.addClass("mapPageId"+i[l]);n.click(function(){google.maps.event.trigger(t.marker,"click")}),$("#mapLegend").append(n)}(d,r)}var c=$("body").attr("id").replace("pageid","");$("li.mapPageId"+c).click()}}(),$(window).load(function(){function e(){var e=($(window).width()-$(".container").width())/2+"px"}$(window).resize(e),e()})}}};!function($){jQuery(document).ready(function(){util.Global.init()})}(jQuery);
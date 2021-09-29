// CAROUSEL
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    dotsData: true,
    responsive:{
        0:{
            items:1
        }
    }
});
// CAROUSEL

// DROPDOWN MAIN NAV
$(document).on('click','.main_item li',function(){
    let section = $(this).attr("data-attribute");
        dropdown = $(".dropdown[data-attribute='"+section+"']");
        droper = dropdown.parent("li").find(".droper");

        $(".droper").attr("src", "images/icon/droper.svg");
        $(".dropdown").fadeOut(0);

        if ($(this).attr("data-status") != "active") {
           $(dropdown).fadeIn("Show");
           droper.attr("src", "images/icon/droper-active.svg");
           $(".main_item li").attr("data-status", "unactive");
           $(this).attr("data-status", "active");
        }
        else{
           $(".dropdown").fadeOut(0);
           $(".droper").attr("src", "images/icon/droper.svg");
           $(this).attr("data-status", "unactive");
        }   
});
// DROPDOWN MAIN NAV

// DROPDOWN NAV
$(".navigation li").hover(
    function() {
      $(this).find(".nav_dropdown").fadeIn("Show");
      $(this).find("a").addClass("active_nav");
    }, function() {
      $(this).find(".nav_dropdown").fadeOut("Hide");
      $(this).find("a").removeClass("active_nav");
    }
);
// DROPDOWN NAV

// CAROUSEL HIGHT
$(document).click(function() {
   let carousel = $(".main_carousel_item");
       mainNav = $(".main_navigation");
       carousel.height(mainNav.height());
});
// CAROUSEL HIGHT

jQuery(document).ready(function ($) {


  $('body').removeClass('loading');










  //Mega Menu Image
  $("#menu-main-menu > li .mega-menu-inner").wrapInner("<li class='category-menu'></li>");
  $("#menu-main-menu > li .mega-menu-inner").append("<li class='category-image'></li>");





  //Mega Menu Featured Image


  // Shop > Featured Products
  $("li#menu-item-83173").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://minnkota.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/shop.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Shop > Freshwater Trolling Motors
  $("li#menu-item-83196").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://minnkota.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/shop-freshwater-motors.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Shop > Saltwater Trolling Motors
  $("li#menu-item-83195").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://minnkota.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/shop-saltwater-motors.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Shop > Shallow Water Anchors
  $("li#menu-item-84924").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://minnkota.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/shop-shallow-water-anchors.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Shop > Battery Chargers
  $("li#menu-item-83203").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://minnkota.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/shop-battery-chargers.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Shop > Accessories
  $("li#menu-item-84908").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://minnkota.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/shop-accessories.png)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Shop > Apparel
  $("li#menu-item-84920").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://minnkota.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/shop-apparel.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });

  // Learn > Technology
  $("li#menu-item-83549").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://minnkota.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/learn-technology.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Learn > Buying Guide
  $("li#menu-item-83857").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://minnkota.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/learn-buying-guide.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Learn > Videos
  $("li#menu-item-84288").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://minnkota.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/learn-videos.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Learn > About
  $("li#menu-item-84325").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://minnkota.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/learn-about.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });


  // Support > Faqs
  $("li#menu-item-84369").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://minnkota.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/support-faqs.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Support > Software Updates
  $("li#menu-item-85313").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://minnkota.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/support-software-updates.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });
  // Support > Contact Us
  $("li#menu-item-84384").hover(function () { $('#menu-main-menu .mega-menu-inner .category-image').css("background-image", "url(https://minnkota.com.au/wp-content/themes/uncode-child/core/assets/images/megamenu/support-contact-us.jpg)") }, function () { $('#menu-main-menu .mega-menu-inner .category-image').css('background-image', '') });



  //Top Menu toggle Johnson Outdoors Family brands images
  $('.top-menu-toggle').on('click', function (e) {
    $(this).toggleClass("opened");
    $('.top-menu .brands-images').toggleClass("expanded"); //you can list several class names 
    e.preventDefault();
  });


  //Slider Revolution append borders and text
  $(".rev-btn").wrapInner("<div class='text'></div>");
  $(".rev-btn").append("<span class='borders'></span>");
  $(".rev-btn .fa-chevron-right").remove();



  $(".btn").wrapInner("<div class='text'></div>");
  $(".btn").append("<span class='borders'></span>");



  $(".single-product #elex_prod_btn").addClass('find-a-dealer');





  //Isotope post/page gallery custom 
  //$( ".t-entry-readmore .btn" ).wrapInner( "<div class='text'></div>");
  //$( ".t-entry-readmore .btn" ).append( "<span class='borders'></span>" );
  $(".t-entry-readmore .btn").addClass('btn-alt');
  $(".t-entry-readmore .btn").removeClass('btn');
  $(".isotope-container .tmb .t-overlay-text .t-entry-title").each(function (i) {
    var $test = $(this).parent().parent().parent();
    $(this).clone().addClass('title-clone').prependTo($test);
  });

  $(".mk-component-page-banner-title-alt .row-background").append("<div class='animated-static'></div>");
  $(".mk-component-page-banner-title-alt .row-background").append("<div class='vignette'></div>");



  //Product page
  $("#elex_prod_btn").removeClass('btn-success');
  $("#elex_prod_btn").addClass('btn-alt');

  $(".reset_variations").addClass('btn-inline');



  //Disable clicking pro team pages
  //   $('.pro-team-listing .t-entry-visual-cont a').click(function(e) {
  //     e.preventDefault();
  // });


  //
  var words = [
    "EXPLORE i-PILOT",
    "EXPLORE i-PILOT LINK",
    "Explore i-pilot",
    "Explore i-pilot Link"
  ];

  $('.text').html(function (_, html) {
    var reg = new RegExp('(' + words.join('|') + ')', 'gi');
    return html.replace(reg, '<span class="i-pilot">$1</span>', html)
  });



  $(".woocommerce-variation-description").append($(".single-product .product-tab ul").html());


  $(".single-product .product-tab ul").prepend("<li class='field-item odd product-shortdesc hide'></li>");

  // $('.single-product .uncode-single-product-gallery .woocommerce-product-gallery-nav-wrapper .owl-stage').on('dragstart', function (event) { event.preventDefault(); });


});




(function ($) {
  $(document).on('found_variation', function () {

    var $desc = $('.woocommerce-variation.single_variation').find('.woocommerce-variation-description').html();
    var $entry_summary = $('.product-shortdesc');
    var $wc_var_desc = $entry_summary.find('.woocommerce-variation-description');

    if ($desc.length > 0) {
      $entry_summary.html('');
      $entry_summary.removeClass('hide');
      $entry_summary.addClass('item');
      $entry_summary.html($desc);
      $entry_summary.find('p').contents().unwrap();
    } else {
      $entry_summary.removeClass('item');
      $entry_summary.addClass('hide');
    }


    $('.reset_variations').click(function () {
      $entry_summary.addClass('hide');
    });


  });
})(jQuery);

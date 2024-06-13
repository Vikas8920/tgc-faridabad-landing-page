/* 1. logodata */
jQuery(document).ready(function($){
    if ( $.isFunction($.fn.owlCarousel) ) {
    $('.quotation').owlCarousel({
            loop:true,
            dot:true,
            nav:false,
            autoplay:true,
            items:1,
            autoplayTimeout:3000,
            })

/* 2. clients-slider */
    $('.clients-slider').owlCarousel({
            loop:true,
            dot:false,
            nav:false,
            // autoplay:true,
            // autoplayTimeout:3000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                993:{
                    items:4
                },
                1200:{
                    items:5
                },
              }
            })
        }
        jQuery('.mobile-nav .menu-item-has-children').on('click', function($) {

          jQuery(this).toggleClass('active');

        }); 

        jQuery('#nav-icon4').click(function($){

            jQuery('#mobile-nav').toggleClass('open');

        });

        jQuery('.res-cross').click(function($){

           jQuery('#mobile-nav').removeClass('open');

        });


        jQuery('.bar-menu').click(function($){

            jQuery('#mobile-nav').toggleClass('open');
            jQuery('#mobile-nav').toggleClass('hmburger-menu');
            jQuery('#mobile-nav').show();

        });

        jQuery('.res-cross').click(function($){

           jQuery('#mobile-nav').removeClass('open');

        });
  }) ;


/* 3. stickyHeader */
if ($("#stickyHeader")[0]){
 
    var new_scroll_position = 0;

        var last_scroll_position;

        var header = document.getElementById("stickyHeader");

        window.addEventListener('scroll', function(e) {

        last_scroll_position = window.scrollY;

        if (new_scroll_position < last_scroll_position && last_scroll_position > 100) {

          header.classList.remove("slideUp");

          header.classList.add("slideUp");
        } 

        else if (last_scroll_position < 100) {

          header.classList.remove("slideUp");

        } 

        else if (new_scroll_position > last_scroll_position) {

          header.classList.remove("slideUp");

          header.classList.add("slideUp");

        }

         new_scroll_position = last_scroll_position;

        });
      }



/* 4. accordion-item */
$('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();

    if($(this).closest('.accordion-item').hasClass('active')) {
        $('.accordion-item').removeClass('active');
    } else {
        $('.accordion-item').removeClass('active');

        $(this).closest('.accordion-item').addClass('active');
    }
    var $content = $(this).next();
    $content.slideToggle(100);
    $('.accordion-item .content').not($content).slideUp('fast');
});

/* 5. Go to top */ 
function inVisible(element) {
  //Checking if the element is
  //visible in the viewport
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  //animating the element if it is
  //visible in the viewport
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  //Animating the element if not animated before
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, {
      //duration 5 seconds
      duration: 5000,
      easing: 'linear',
      step: function() {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function() {
        element.html(this.countNum + html);
      }
    });
  }

}

//When the document is ready
$(function() {
  //This is triggered when the
  //user scrolls the page
  $(window).scroll(function() {
    //Checking if each items to animate are 
    //visible in the viewport
    $("h3[data-max]").each(function() {
      inVisible($(this));
    });
  })
});




let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#000 ${scrollValue}%, #ffffff00 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// 6. loaded


$(window).on('load', function () {
    $("body").addClass("page-loaded");
    ("loaded")
});



// Popups
$(document).ready(function(){

  // Popup1
  $("#openPopup").click(function(){
      $("#overlay").fadeIn();
      $("#popupForm").fadeIn();
  });

  $(".close").click(function(){
      $("#overlay").fadeOut();
      $("#popupForm").fadeOut();
  });

  // form1
  $("#form").submit(function(e){
      e.preventDefault();
      let name = $("#name").val();
      let email = $("#email").val();
      let phone = $("#phone").val();
      $("#nameError").text("");
      $("#emailError").text("");
      $("#phoneError").text("");

      if(name.trim() === ""){
          $("#nameError").text("Name is required.");
          return;
      }

      if(email.trim() === ""){
          $("#emailError").text("Email is required.");
          return;
      }

      if(!isValidEmail(email)){
          $("#emailError").text("Invalid email address.");
          return;
      }

      if(phone.trim() === ""){
          $("#phoneError").text("Phone number is required.");
          return;
      }

      if(!isValidPhoneNumber(phone)){
          $("#phoneError").text("Invalid phone number.");
          return;
      }

      $("#form").unbind('submit').submit();
  });

  function isValidEmail(email){
      let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return emailRegex.test(email);
  }

  function isValidPhoneNumber(phone){
      let phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
  }


  // Popup2
  $("#openPopup2").click(function(){
    $("#overlay2").fadeIn();
    $("#popupForm2").fadeIn();
});

$(".close").click(function(){
    $("#overlay2").fadeOut();
    $("#popupForm2").fadeOut();
});

// form2
$("#form2").submit(function(e){
    e.preventDefault();
    let name = $("#name2").val();
    let email = $("#email2").val();
    let phone = $("#phone2").val();
    $("#nameError2").text("");
    $("#emailError2").text("");
    $("#phoneError2").text("");

    if(name.trim() === ""){
        $("#nameError2").text("Name is required.");
        return;
    }

    if(email.trim() === ""){
        $("#emailError2").text("Email is required.");
        return;
    }

    if(!isValidEmail(email)){
        $("#emailError2").text("Invalid email address.");
        return;
    }

    if(phone.trim() === ""){
        $("#phoneError2").text("Phone number is required.");
        return;
    }

    if(!isValidPhoneNumber(phone)){
        $("#phoneError2").text("Invalid phone number.");
        return;
    }

    $("#form2").unbind('submit').submit();
});

function isValidEmail(email){
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone){
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}


  // Popup3
  $("#openPopup3").click(function(){
    $("#overlay3").fadeIn();
    $("#popupForm3").fadeIn();
});

$(".close").click(function(){
    $("#overlay3").fadeOut();
    $("#popupForm3").fadeOut();
});

// form3
$("#form3").submit(function(e){
    e.preventDefault();
    let name = $("#name3").val();
    let email = $("#email3").val();
    let phone = $("#phone3").val();
    $("#nameError3").text("");
    $("#emailError3").text("");
    $("#phoneError3").text("");

    if(name.trim() === ""){
        $("#nameError3").text("Name is required.");
        return;
    }

    if(email.trim() === ""){
        $("#emailError3").text("Email is required.");
        return;
    }

    if(!isValidEmail(email)){
        $("#emailError3").text("Invalid email address.");
        return;
    }

    if(phone.trim() === ""){
        $("#phoneError3").text("Phone number is required.");
        return;
    }

    if(!isValidPhoneNumber(phone)){
        $("#phoneError3").text("Invalid phone number.");
        return;
    }

    $("#form3").unbind('submit').submit();
});

function isValidEmail(email){
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone){
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

  // Popup4
  $("#openPopup4").click(function(){
    $("#overlay4").fadeIn();
    $("#popupForm4").fadeIn();
});

$(".close").click(function(){
    $("#overlay4").fadeOut();
    $("#popupForm4").fadeOut();
});

// form4
$("#form4").submit(function(e){
    e.preventDefault();
    let name = $("#name4").val();
    let email = $("#email4").val();
    let phone = $("#phone4").val();
    $("#nameError4").text("");
    $("#emailError4").text("");
    $("#phoneError4").text("");

    if(name.trim() === ""){
        $("#nameError4").text("Name is required.");
        return;
    }

    if(email.trim() === ""){
        $("#emailError4").text("Email is required.");
        return;
    }

    if(!isValidEmail(email)){
        $("#emailError4").text("Invalid email address.");
        return;
    }

    if(phone.trim() === ""){
        $("#phoneError4").text("Phone number is required.");
        return;
    }

    if(!isValidPhoneNumber(phone)){
        $("#phoneError4").text("Invalid phone number.");
        return;
    }

    $("#form4").unbind('submit').submit();
});

function isValidEmail(email){
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone){
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}


  // Popup5
  $("#openPopup5").click(function(){
    $("#overlay5").fadeIn();
    $("#popupForm5").fadeIn();
});

$(".close").click(function(){
    $("#overlay5").fadeOut();
    $("#popupForm5").fadeOut();
});

// form5
$("#form5").submit(function(e){
    e.preventDefault();
    let name = $("#name5").val();
    let email = $("#email5").val();
    let phone = $("#phone5").val();
    $("#nameError5").text("");
    $("#emailError5").text("");
    $("#phoneError5").text("");

    if(name.trim() === ""){
        $("#nameError5").text("Name is required.");
        return;
    }

    if(email.trim() === ""){
        $("#emailError5").text("Email is required.");
        return;
    }

    if(!isValidEmail(email)){
        $("#emailError5").text("Invalid email address.");
        return;
    }

    if(phone.trim() === ""){
        $("#phoneError5").text("Phone number is required.");
        return;
    }

    if(!isValidPhoneNumber(phone)){
        $("#phoneError5").text("Invalid phone number.");
        return;
    }

    $("#form5").unbind('submit').submit();
});

function isValidEmail(email){
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone){
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}


  // Popup6
  $("#openPopup6").click(function(){
    $("#overlay6").fadeIn();
    $("#popupForm6").fadeIn();
});

$(".close").click(function(){
    $("#overlay6").fadeOut();
    $("#popupForm6").fadeOut();
});

// form6
$("#form6").submit(function(e){
  e.preventDefault();
  let name = $("#name6").val();
  let email = $("#email6").val();
  let phone = $("#phone6").val();
  $("#nameError6").text("");
  $("#emailError6").text("");
  $("#phoneError6").text("");

  if(name.trim() === ""){
      $("#nameError6").text("Name is required.");
      return;
  }

  if(email.trim() === ""){
      $("#emailError6").text("Email is required.");
      return;
  }

  if(!isValidEmail(email)){
      $("#emailError6").text("Invalid email address.");
      return;
  }

  if(phone.trim() === ""){
      $("#phoneError6").text("Phone number is required.");
      return;
  }

  if(!isValidPhoneNumber(phone)){
      $("#phoneError6").text("Invalid phone number.");
      return;
  }

  $("#form6").unbind('submit').submit();
});

function isValidEmail(email){
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone){
  let phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

  // Popup7
  $("#openPopup7").click(function(){
    $("#overlay7").fadeIn();
    $("#popupForm7").fadeIn();
});

$(".close").click(function(){
    $("#overlay7").fadeOut();
    $("#popupForm7").fadeOut();
});

// form7
$("#form7").submit(function(e){
  e.preventDefault();
  let name = $("#name7").val();
  let email = $("#email7").val();
  let phone = $("#phone7").val();
  $("#nameError7").text("");
  $("#emailError7").text("");
  $("#phoneError7").text("");

  if(name.trim() === ""){
      $("#nameError7").text("Name is required.");
      return;
  }

  if(email.trim() === ""){
      $("#emailError7").text("Email is required.");
      return;
  }

  if(!isValidEmail(email)){
      $("#emailError7").text("Invalid email address.");
      return;
  }

  if(phone.trim() === ""){
      $("#phoneError7").text("Phone number is required.");
      return;
  }

  if(!isValidPhoneNumber(phone)){
      $("#phoneError7").text("Invalid phone number.");
      return;
  }

  $("#form7").unbind('submit').submit();
});

function isValidEmail(email){
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone){
  let phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

  // Popup8
  $("#openPopup8").click(function(){
    $("#overlay8").fadeIn();
    $("#popupForm8").fadeIn();
});

$(".close").click(function(){
    $("#overlay8").fadeOut();
    $("#popupForm8").fadeOut();
});

// form8
$("#form8").submit(function(e){
  e.preventDefault();
  let name = $("#name8").val();
  let email = $("#email8").val();
  let phone = $("#phone8").val();
  $("#nameError8").text("");
  $("#emailError8").text("");
  $("#phoneError8").text("");

  if(name.trim() === ""){
      $("#nameError8").text("Name is required.");
      return;
  }

  if(email.trim() === ""){
      $("#emailError8").text("Email is required.");
      return;
  }

  if(!isValidEmail(email)){
      $("#emailError8").text("Invalid email address.");
      return;
  }

  if(phone.trim() === ""){
      $("#phoneError8").text("Phone number is required.");
      return;
  }

  if(!isValidPhoneNumber(phone)){
      $("#phoneError8").text("Invalid phone number.");
      return;
  }

  $("#form8").unbind('submit').submit();
});

function isValidEmail(email){
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone){
  let phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

  // Popup9
  $("#openPopup9").click(function(){
    $("#overlay9").fadeIn();
    $("#popupForm9").fadeIn();
});

$(".close").click(function(){
    $("#overlay9").fadeOut();
    $("#popupForm9").fadeOut();
});

// form9
$("#form9").submit(function(e){
  e.preventDefault();
  let name = $("#name9").val();
  let email = $("#email9").val();
  let phone = $("#phone9").val();
  $("#nameError9").text("");
  $("#emailError9").text("");
  $("#phoneError9").text("");

  if(name.trim() === ""){
      $("#nameError9").text("Name is required.");
      return;
  }

  if(email.trim() === ""){
      $("#emailError9").text("Email is required.");
      return;
  }

  if(!isValidEmail(email)){
      $("#emailError9").text("Invalid email address.");
      return;
  }

  if(phone.trim() === ""){
      $("#phoneError9").text("Phone number is required.");
      return;
  }

  if(!isValidPhoneNumber(phone)){
      $("#phoneError9").text("Invalid phone number.");
      return;
  }

  $("#form9").unbind('submit').submit();
});

function isValidEmail(email){
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone){
  let phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}


  // Popup10
  $("#openPopup10").click(function(){
    $("#overlay10").fadeIn();
    $("#popupForm10").fadeIn();
});

$(".close").click(function(){
    $("#overlay10").fadeOut();
    $("#popupForm10").fadeOut();
});

// form10
$("#form10").submit(function(e){
  e.preventDefault();
  let name = $("#name10").val();
  let email = $("#email10").val();
  let phone = $("#phone10").val();
  $("#nameError10").text("");
  $("#emailError10").text("");
  $("#phoneError10").text("");

  if(name.trim() === ""){
      $("#nameError10").text("Name is required.");
      return;
  }

  if(email.trim() === ""){
      $("#emailError10").text("Email is required.");
      return;
  }

  if(!isValidEmail(email)){
      $("#emailError10").text("Invalid email address.");
      return;
  }

  if(phone.trim() === ""){
      $("#phoneError10").text("Phone number is required.");
      return;
  }

  if(!isValidPhoneNumber(phone)){
      $("#phoneError10").text("Invalid phone number.");
      return;
  }

  $("#form10").unbind('submit').submit();
});

function isValidEmail(email){
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone){
  let phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

  // Popup11
  $("#openPopup11").click(function(){
    $("#overlay11").fadeIn();
    $("#popupForm11").fadeIn();
});

$(".close").click(function(){
    $("#overlay11").fadeOut();
    $("#popupForm11").fadeOut();
});

// form11
$("#form11").submit(function(e){
  e.preventDefault();
  let name = $("#name11").val();
  let email = $("#email11").val();
  let phone = $("#phone11").val();
  $("#nameError11").text("");
  $("#emailError11").text("");
  $("#phoneError11").text("");

  if(name.trim() === ""){
      $("#nameError11").text("Name is required.");
      return;
  }

  if(email.trim() === ""){
      $("#emailError11").text("Email is required.");
      return;
  }

  if(!isValidEmail(email)){
      $("#emailError11").text("Invalid email address.");
      return;
  }

  if(phone.trim() === ""){
      $("#phoneError11").text("Phone number is required.");
      return;
  }

  if(!isValidPhoneNumber(phone)){
      $("#phoneError11").text("Invalid phone number.");
      return;
  }

  $("#form11").unbind('submit').submit();
});

function isValidEmail(email){
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone){
  let phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}


// form100
$("#form100").submit(function(e){
    e.preventDefault();
    let name = $("#name100").val();
    let email = $("#email100").val();
    let phone = $("#phone100").val();
    $("#nameError100").text("");
    $("#emailError100").text("");
    $("#phoneError100").text("");
  
    if(name.trim() === ""){
        $("#nameError100").text("Name is required.");
        return;
    }
  
    if(email.trim() === ""){
        $("#emailError100").text("Email is required.");
        return;
    }
  
    if(!isValidEmail(email)){
        $("#emailError100").text("Invalid email address.");
        return;
    }
  
    if(phone.trim() === ""){
        $("#phoneError100").text("Phone number is required.");
        return;
    }
  
    if(!isValidPhoneNumber(phone)){
        $("#phoneError100").text("Invalid phone number.");
        return;
    }
  
    $("#form100").unbind('submit').submit();
  });
  
  function isValidEmail(email){
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }
  
  function isValidPhoneNumber(phone){
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
});





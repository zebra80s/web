
/*--- Contact Form ---*/
$("#contactform").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});




function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();
    var recaptcha = $("#g-recaptcha-response").val();
    if (recaptcha === "") {
      event.preventDefault();
      alert("Please check the recaptcha");
    }
    else (
    $.ajax({
        type: "POST",
        url: "process.php",
        data: "name=" + name + "&email=" + email + "&phone=" + phone + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    })
  );
}
function formSuccess(){
    $( "#contactform").hide();
    $( "#msgSubmit" ).removeClass( "hidden" );
}


<!-- video modal -->

  $(document).ready(function() {

    // Gets the video src from the data-src on each button

    var $videoSrc;
    $('.video-btn').click(function() {
      $videoSrc = $(this).data("src");
    });
    //console.log($videoSrc);



    // when the modal is opened autoplay it
    $('#myModal').on('shown.bs.modal', function(e) {

      // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
      $("#video").attr('src', $videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1");
    })


    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function(e) {
      // a poor man's stop video
      $("#video").attr('src', $videoSrc);
    })
  });



/*--- Scroll / Navigation ---*/

  $(document).ready(function() {
    // navigation click actions
    $('.scroll-link').on('click', function(event) {
      event.preventDefault();
      var sectionID = $(this).attr("data-id");
      scrollToID('#' + sectionID, 500);
    });
    // scroll to top action
    $('.scroll-top').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 'slow');
    });
    // mobile nav toggle
    $('#nav-toggle').on('click', function(event) {
      event.preventDefault();
      $('#main-nav').toggleClass("open");
    });
  });
  // scroll function
  function scrollToID(id, speed) {
    var offSet = 50;
    var targetOffset = $(id).offset().top - offSet;
    var mainNav = $('#main-nav');
    $('html,body').animate({
      scrollTop: targetOffset
    }, speed);
    if (mainNav.hasClass("open")) {
      mainNav.css("height", "1px").removeClass("in").addClass("collapse");
      mainNav.removeClass("open");
    }
  }
  if (typeof console === "undefined") {
    console = {
      log: function() {}
    };
  }


/*--- Photo Gallery ---*/


  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
      alwaysShowClose: true,
      showArrows: true,
    });
  });

/*--- Form feedback ---*/
  function submitMSG(valid, msg){
          var msgClasses;
      if(valid){
          msgClasses = "h3 text-center fadeInUp animated text-success";
      } else {
          msgClasses = "h3 text-center text-danger";
      }
      $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
  }

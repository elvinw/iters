$(document).ready(function() {

  /* email format validation */
  function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  $("#email").change(function() {
    if (!validateEmail($("#email").val())) {
      console.log("captured invalid email");
      $("<label>Please enter a valid email</label>").appendTo("#email-label");
    } else if (validateEmail($("#email").val())) {
      $("#email-label").empty(); //make message go away
    } else {
      console.log("email is valid");
    }
  });

  /* parse input for processing */
  $("input#submit").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    var dataString = "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message;

    if (name == "" || email == "" || subject == "" || message == "") {
      $("<label>All fields are required!</label>").appendTo("#submit-box");
      console.log("no data received");
    } else {
      $.ajax({
        type: "POST",
        url: "ajaxsubmit.php",
        data: dataString,
        success: function(tymsg) {
          $("form").fadeOut(300, function() {
            $("form").html(tymsg).fadeIn(200);
          });
        }
      });
      return false;
    }
  });
});

<!--
/iters default
-->

<!doctype html>
<html class="no-js" lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IT Emergency Response System</title>
  <link rel="stylesheet" href="css/foundation.css" type='text/css'>
  <link rel="stylesheet" href="css/app.css" type='text/css'>
  <script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
  <!-- <script src="js/jquery-2.2.0.min.js"></script> -->
  <script type="text/javascript" src="js/validate.js"></script>
  <script type="text/javascript" src="js/pirate-speak.js"></script>
</head>

<body>

  <div class="callout large primary">
    <div class="row column ">
      <div class="small-12 medium-11 large-12 columns small-centered">
        <h1>/iters</h1>
        <h2 class="subheader">IT Emergency Response System</h2>
        <h5><i>"If we made a dollar for every hour we spend fixing things, we would still be poor."</i></h5>
        <hr>
        <h6>We will not respond to requests to debug code. Please contact the web developers directly for programming needs.</h6>
        <p><a href="pirate.php">Arrrr, ye speak pirate?</a></p>
      </div>
    </div>
  </div>

  <section class="reporting">
    <div class="row column">
      <div class="large-8 medium-10 medium-centered centered columns">
        <p>
          Most cases can be fixed by restarting the device or the program. Please only use ITERS when the problem prevents you from working.
        </p>
      </div>
    </div>
    <div class="row column">
      <div class="small-12 medium-10 large-12 columns small-centered">
        <!-- FORM! -->
        <form class="custom">
          <div class="row">
            <div class="large-6 medium-6 small-12 columns">
              <label>
                Your Name:
              </label>
              <input type="text" id="name" name="name" placeholder="Name">
            </div>
            <div class="large-6 medium-6 small-12 columns">
              <label>
                Your Email:
              </label>
              <input type="text" id="email" name="email" placeholder="name@provider.com">
            </div>
          </div>
          <div class="row">
            <div class="large-6 medium-6 small-12 columns" id="name-label">

            </div>
            <div class="large-6 medium-6 small-12 columns" id="email-label">

            </div>
          </div>


          <div class="row">
            <div class="large-6 small-12 columns">
              <label>
                Message:
              </label>
              <textarea rows="6" name="message" id="message" placeholder="Please briefly describe the issue. What were you doing that caused the problem? What program were you using? Did you lose any unsaved work? What kind of computer do you use?"></textarea>
            </div>
            <div class="large-6 medium-12 small-12 columns">
              <label>
                Subject:
              </label>
              <select id="subject">
                <option value="program_error">Program Error</option>
                <option value="hardware">Hardware Issue</option>
                <option value="display">Display</option>
                <option value="other">Other</option>
                <option value="pirate">Arrrr!</option>
              </select>
            </div>
          </div>
          <div class="row ">
            <div class="large-12 small-12 columns expand" id="submit-box">
                <input type="submit" id="submit" class="button expand" value="Submit">
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>


  <script src="http://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.js"></script>
  <script>
    $(document).foundation();
  </script>
</body>

</html>

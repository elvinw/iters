<html class="no-js" lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IT Emergency Response System</title>
  <script src="js/jquery-2.2.0.min.js"></script>
  <script type="text/javascript" src="js/validate.js"></script>
  <link rel="stylesheet" href="css/foundation.css" type='text/css'>
  <link rel="stylesheet" href="css/app.css" type='text/css'>
  </script>
</head>

<body>


  <div class="callout large primary">
    <div class="row column">
      <div class="small-12 medium-12 large-12 columns small-centered">
        <h1>/iters</h1>
        <h2 class="subheader">IT Emergency Response System</h2>
      </div>
    </div>
  </div>

  <section class="reporting" id="main">
    <div class="row column text-center">
      <h5><?php echo $_POST["name"];?>, thank you for your alert. Someone will be with you shortly.</h5>
    </div>
    <div class="row column text-center">
      <a href="/iters"><h6>Return</h6></a>
    </div>
  </section>

  <script src="http://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.js"></script>
  <script>
    $(document).foundation();
  </script>
</body>

</html>

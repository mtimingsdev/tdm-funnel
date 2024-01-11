$.get(
    "https://api.ipdata.co?api-key=34dda223f4aa7ea8524f89b3e7888213e8aabdce5a53b4a27f212db2",
    function (response) {
      $("#country_name").html(response.country_name);
      $("#city").html(response.city);
      if (response.country_name == "Serbia") {
        window.location.replace("https://www.google.com");
      }

      if (response.city == null) {
        if (response.region == null) {
          $(".location").html("9 miles away");
          $("#location").html("9 miles away");
        }
        else{
          $(".location").html(response.region + ", " + response.country_name);
          $("#location").html(response.region + ", " + response.country_name);
        }
      } else {
        $(".location").html(response.city + ", " + response.country_name);
        $("#location").html(response.city + ", " + response.country_name);
      }
      
      var cords = response.latitude + "," + response.longitude;
  
  
      var img_url = `<img src="https://maps.googleapis.com/maps/api/staticmap?center=${cords}&zoom=14&size=400x300&sensor=false&key=AIzaSyDw8kElM5rbCy94UxAjQqgApUMkucBfaxY&markers=color:red%7C${cords}">`;
  
      img_url = `<img src="https://maps.googleapis.com/maps/api/staticmap?center=${cords}&zoom=14&size=400x300&sensor=false&key=AIzaSyDw8kElM5rbCy94UxAjQqgApUMkucBfaxY&markers=color:red%7C${cords}&signature=ZwR3x0fnpHCmP95LX18AfwXrbgA=">`;
  
      $("#mapholder").html(img_url);
    },
    "jsonp"
  );

  $(document).ready(function(){
    $('.carousel').carousel();


  });

  $("#button-of").on("click", function(){

    let searchParams = new URLSearchParams(window.location.search);

    if(searchParams.has('ref')){

      let param = searchParams.get('ref');

      if(param == "1"){
        window.location.replace("https://onlyfans.com/");
      }
      if(param == "5"){
        window.location.replace("https://onlyfans.com/");
      }
    }
    else{
      window.location.replace("https://onlyfans.com/");
    }
  });
  
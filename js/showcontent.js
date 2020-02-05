$(document).ready(function(){

  $("#homepg").click(function(){
    $("#theAlbum").hide();
    $("#theIndex").show();
    $("#info").hide();
});
    $("#albumpg").click(function(){
      $("#theAlbum").show();
      $("#theIndex").hide();
      $("#info").hide();



  });

  $("#infopg").click(function(){
    $("#theAlbum").hide();
    $("#theIndex").hide();
    $("#info").show();




});
});

function load(){
  $("#theAlbum").hide();
  $("#info").hide();
}

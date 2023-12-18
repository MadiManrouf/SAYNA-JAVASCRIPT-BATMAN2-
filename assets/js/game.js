$(document).ready(function(){
  $.ajax ({
    url: 'https://batman-api.sayna.space/questions',
    datatype: 'json',
    success: function(questions){
      console.log(questions[0].isGood);
    },
    error: function(){
      console.log("impossible de se connecter");
    }
  })
});
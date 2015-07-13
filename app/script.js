$('#hobbies').click(function() {
  console.log("Is this thing on?");
  $.post('hobbies', function(response) {
    var generatedHobby = response.hobbies;
    $("#hobbies").text( response.hobbies );
    });
});

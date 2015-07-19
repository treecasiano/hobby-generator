$('#hobbies').click(function() {
  $.post('hobbies', function(response) {
    var generatedHobby = response.hobbies;
    $("#hobbies").text( response.hobbies );
    });
});

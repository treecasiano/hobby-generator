"use strict";

$('#hobbies').click(function () {
    $.post('hobbies', function (response) {
        let generatedHobby = response.hobbies;
        $("#hobbies").text(generatedHobby);
    });
});

"use strict";

$('#hobbies').click(function () {
    $.post('hobbies', response => {
        let generatedHobby = response.hobbies;
        $("#hobbies").text(generatedHobby);
    });
});

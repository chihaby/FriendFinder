$(".submit").on("click", function(event) {
    event.preventDefault();

    var newFriend = {
        firstName: $("#first-name").val().trim(),
        lastName: $("#last-name").val().trim()
        //scores: $( "select.Select1 option:checked" ).val(),
        //qusetion2: $("#Select2").val()
    };

    console.log(newFriend);

    $.post("/api/friends", newFriend,
    function(data) {

        // If a table is available... tell user they are booked.
        if (data) {
        alert("Yay! You are officially in the friend zone!");
        }

        // If a table is available... tell user they on the waiting list.
        else {
        alert("error");
        }

        // Clear the form when submitting
        $("#first-name").val("");
        $("#last-name").val("");
        //$("#Select1").val("");
        // $("#Select2").val("");
    });
});
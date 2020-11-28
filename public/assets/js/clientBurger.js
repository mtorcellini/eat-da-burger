$(document).ready(function() {


    // devour buttons
    $(".devour").on("click", function(event) {
        const idToDevour = $(this).data("id");
        console.log("idToDevour : " + idToDevour);
    })

    // submit button
    $(".submit").on("click", function(event) {
        event.preventDefault();
        const burgerName = $("#burger-name").val().trim();
        console.log("Burger name: " + burgerName);

        // make API request
        $.ajax({
            url : "/api/burgers",
            method : "POST",
            data : {
                burgerName : burgerName
            }
        }).then( (response) => {
            location.reload();
        })
    });



})
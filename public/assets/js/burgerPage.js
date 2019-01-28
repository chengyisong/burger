$(function () {
    $(document).on("click", "#devourBtn", function () {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {
                devoured: true,
            }
        }).then(function () {
            console.log("Eating burger #" + id);

            location.reload();
        })
    })

    $(document).on("click", "#restoreBtn", function () {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {
                devoured: false,
            }
        }).then(function () {
            console.log("Restoring burger #" + id);

            location.reload();
        })
    })

    $("#submitBtn").on("click", function () {
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload();
        })
    })
})


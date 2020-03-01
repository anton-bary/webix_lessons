function addFilm() {
    if ($$("film_form").validate()) {
        $$("film_list").add({
            title: $$("film_form").getValues().title,
            year: $$("film_form").getValues().year,
            rating: $$("film_form").getValues().rating,
            votes: $$("film_form").getValues().votes,
        }, 0);
        webix.message("Film was added.");
    }
}

function clearForm() {
    webix.confirm({
        title: "All values will be clear",
        text: "Do you really want to clear all values?"
    }).then(function() {
        $$("film_form").clear();
        $$("film_form").clearValidation();
        webix.message("Form was cleared");
    }).fail(function() {
        webix.message("Form wasn't cleared");
    })
}
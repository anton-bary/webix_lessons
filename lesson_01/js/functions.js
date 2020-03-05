function addFilm() {
    var form = $$("film_form");
    var list = $$("film_list");
    var item_data = $$("film_form").getValues();

    if(form.isDirty() && form.validate()) {
        if(item_data.id) {
            list.updateItem(item_data.id, item_data);
        } else {
            list.add(item_data);
        }
    }

    // if ($$("film_form").validate()) {
    //     $$("film_list").add({
    //         title: $$("film_form").getValues().title,
    //         year: $$("film_form").getValues().year,
    //         rating: $$("film_form").getValues().rating,
    //         votes: $$("film_form").getValues().votes,
    //     }, 0);
    //     webix.message("Film was added.");
    // }
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

function addUser() {
    var userObj = {
        "name": "Name",
        "age": Math.floor(Math.random() * 80) + 10,
        "country": "Country"
    }
    $$("user_list").add(userObj);
    $$("chart").add(userObj);
}
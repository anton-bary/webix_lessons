var form = {
    view: "form",
    id: "film_form",
    width: 400,
    elements: [{
        type: "section",
        template: "EDIT FILMS"
    }, {
        view: "text",
        name: "title",
        label: "Title",
        invalidMessage: "Title is shouldn't be empty",
    }, {
        view: "text",
        name: "year",
        label: "Year",
        invalidMessage: "Year is should be between 1970 and current date",
    }, {
        view: "text",
        name: "rating",
        label: "Rating",
        invalidMessage: "Rating is shouldn't be 0 or empty",
    }, {
        view: "text",
        name: "votes",
        label: "Votes",
        invalidMessage: "Vote is shouldn't be more then 1000000 or empty",
    }, {
        margin: 10,
        cols: [{
            view: "button",
            id: "add_new",
            value: "Add new",
            css: "webix_primary",
            click: addFilm,
        }, {
            view: "button",
            id: "clear",
            value: "Clear",
            click: clearForm,
        }]
    }, {}],
    rules: {
        "title": webix.rules.isNotEmpty,
        "rating": function(value) {
            if (webix.rules.isNumber(value) && value != 0) {
                return true;
            }
        },
        "votes": function(value) {
            if (value >= 1 && value < 1000000) {
                return true;
            }
        },
        "year": function(value) {
            if (value >= 1970 && value <= new Date().getFullYear()) {
                return true;
            }
        }
    }
}
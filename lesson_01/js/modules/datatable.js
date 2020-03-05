var datatable = {
    view: "datatable",
    id: "film_list",
    url: "js/data.js",
    select: true,
    scroll: "y",
    hover: "pointer",
    columns: [
        { id: "id", header: "", width: 50, css: "num-col" },
        { id: "title", header: "Film title", fillspace: true },
        { id: "year", header: "Released", width: 100 },
        { id: "votes", header: "Votes", width: 100 },
        { id: "rating", header: "Rating", width: 100 }
    ],
    on: {
        onAfterSelect(id) {
            var values = $$("film_list").getItem(id);
            $$("film_form").setValues(values);
        }
    }
}
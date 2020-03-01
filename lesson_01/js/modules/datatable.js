var datatable = {
    view: "datatable",
    id: "film_list",
    ur: "/js/data.js",
    scroll: "y",
    columns: [
        { id: "num", header: "", width: 50, css: "num-col" },
        { id: "title", header: "Film title", fillspace: true },
        { id: "year", header: "Released", width: 100 },
        { id: "votes", header: "Votes", width: 100 },
        { id: "rating", header: "Rating", width: 100 }
    ]
}
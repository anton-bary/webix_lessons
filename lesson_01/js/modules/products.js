var products = {
    view: "treetable",
    scrollX: false,
    columns: [
        { id: "id", header: "", width: 50 },
        {
            id: "value",
            header: "Title",
            fillspace: true,
            template: "{common.treetable()} #title#"
        },
        { id: "price", header: "Price", width: 200 }
    ],
    select: "row",
    url: "js/products.js"
}
var products = {
    view: "treetable",
    editable: true,
    scrollX: false,
    columns: [
        { id: "id", header: "", width: 50 },
        {
            id: "value",
            header: "Title",
            fillspace: true,
            template: "{common.treetable()} #title#",
            editor: "text",
        },
        { 
            id: "price", 
            header: "Price", 
            width: 200,
            editor: "text",
        }
    ],
    select: "row",
    url: "js/products.js",
    rules: {
        "title": webix.rules.isNotEmpty
    }
}
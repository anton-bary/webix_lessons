var products = {
    view: "treetable",
    editable: true,
    scrollX: false,
    columns: [
        { id: "rank", header: "", width: 50 },
        {
            id: "title",
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
    },
    scheme: {
        $group: {
            by: "category",
            map: {
                title: ["category"],
            },
        },
        $sort: {
            by: "value",
            dir: "asc",
        }
    }
}
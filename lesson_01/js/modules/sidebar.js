var sidebar = {
    view: "list",
    css: "sidebar_list",
    scroll: false,
    width: 250,
    template: "#title#",
    select: true,
    data: [{
        id: "dashboard",
        title: "Dashboard"
    }, {
        id: "users",
        title: "Users"
    }, {
        id: "products",
        title: "Products"
    }, {
        id: "location",
        title: "Location"
    }],
    on: {
        onAfterSelect: function(id) {
            $$(id).show();
        }
    }
}

var multiview = {
    view: "multiview",
    cells: [
        { id: "dashboard", cols: [datatable, form] },
        { id: "users", rows: [users] },
        { id: "products", template: "products" },
        { id: "location", template: "location" },
    ]
}
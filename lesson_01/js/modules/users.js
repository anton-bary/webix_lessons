webix.protoUI({
    name: "editlist"
}, webix.EditAbility, webix.ui.list);

var users = {
    rows: [
        {
            cols: [
                {
                    view: "button",
                    id: "add_user_btn",
                    value: "Add new",
                    width: 150,
                    css: "webix_primary",
                    click: addUser,
                },
                {},
            ]
        },
        {
            view: "editlist",
            editable: true,
            editor: "text",
            editValue: "name",
            id: "user_list",
            select: true,
            url: "js/users.js",
            template: "#name# from #country#"
        },
        {
            id: "chart",
            view: "chart",
            type: "bar",
            value: "#age#",
            url: "js/users.js",
            xAxis: {
                template: "#age#",
                title: "Age"
            }
        }
    ]
}
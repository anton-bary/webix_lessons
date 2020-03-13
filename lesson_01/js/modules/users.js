webix.protoUI({
    name: "editlist"
}, webix.EditAbility, webix.ui.list);

var users = {
    rows: [{
            cols: [{
                    view: "button",
                    id: "add_user_btn",
                    value: "Add new",
                    width: 150,
                    css: "webix_primary",
                    click: addUser,
                },
                {
                    view: "text",
                    id: "list_input",
                },
                {
                    view: "button",
                    id: "btn_asc",
                    width: 150,
                    value: "Sort ASC",
                    css: "webix_primary",
                    click: () => {
                        $$("user_list").sort("#name#", "asc");
                    }
                },
                {
                    view: "button",
                    id: "btn_desc",
                    width: 150,
                    value: "Sort DESC",
                    css: "webix_primary",
                    click: () => {
                        $$("user_list").sort("#name#", "desc");
                    }
                }
            ]
        },
        {
            view: "editlist",
            editable: true,
            editor: "text",
            editValue: "name",
            id: "user_list",
            select: true,
            template: "#name# from #country# <span class='webix_icon wxi-close delete_icon float_right'></span>",
            onClick: {
                "delete_icon": function delete_row(e, id) {
                    users_data.remove(id);
                    return false;
                }
            }
        },
        {
            id: "chart",
            view: "chart",
            type: "bar",
            value: "#age#",
            label: "#age#",
            xAxis: {
                template: "#age#",
                title: "Age"
            }
        }
    ]
}
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
            template: "#name# from #country# <span class='webix_icon wxi-close delete_icon'></span>",
            onClick: {
                "delete_icon": function delete_row(e, id) {
                    this.remove(id);
                    return false;
                }
            }
        },
        {
            id: "chart",
            view: "chart",
            type: "bar",
            value: "#age#",
            xAxis: {
                template: "#age#",
                title: "Age"
            }
        }
    ]
}

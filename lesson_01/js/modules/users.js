webix.protoUI({
    name: "editlist"
}, webix.EditAbility, webix.ui.list);

var users = {
    rows: [{
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
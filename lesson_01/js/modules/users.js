var users = {
    rows: [{
            view: "list",
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
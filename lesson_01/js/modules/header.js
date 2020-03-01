var header = {
    view: "toolbar",
    id: "topToolbar",
    css: "webix_dark",
    cols: [{
        view: "label",
        label: "My app",
    }, {}, {
        view: "button",
        label: "Profile",
        css: "webix_transparent",
        width: 200,
        type: "icon",
        icon: "wxi-user",
        popup: "profile_popup"
    }],
}
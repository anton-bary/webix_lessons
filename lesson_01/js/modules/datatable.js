var datatable = {
    view: "datatable",
    id: "film_list",
    url: "js/data.js",
    select: true,
    scroll: "y",
    hover: "pointer",
    columns: [
        { id: "id", header: "", width: 50, css: "num-col" },
        { id: "title", header: ["Film title", { content: "textFilter" }], fillspace: true, sort: "string" },
        { id: "votes", header: ["Votes", { content: "textFilter" }], width: 100, sort: "int" },
        { id: "categoryId", header: ["categories", { content: "selectFilter" }], width: 100, sort: "int",
            collection:"js/categories.js"
        },
        { id: "rating", header: ["Rating", { content: "textFilter" }], width: 100, sort: "int" },
        { id: "year", header: ["Released", { content: "selectFilter" }], width: 100, sort: "int" },
        { header: "", template: "<span class='webix_icon wxi-trash delete_icon'></span>", width: 35 }
    ],
    scheme:{
        $init:function(obj){
            obj.categoryId= 1;
        }
    },
    onClick: {
        "delete_icon": function delete_item(e, id) {
            this.remove(id);
        }
    },
    on: {
        onAfterSelect(id) {
            var values = $$("film_list").getItem(id);
            $$("film_form").setValues(values);
        }
    }
}
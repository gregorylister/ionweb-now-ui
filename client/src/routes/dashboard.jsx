import Dashboard from "views/Dashboard/Dashboard.jsx";
import TagTableView from "views/Tags/TagTableView.jsx";
import Calendar from "views/Calendar/Calendar.jsx";

var dashRoutes =
[
    { path: "/dashboard", name: "Dashboard", icon: "design_app", component: Dashboard },

    {
        collapse: true,
        path: "/taginfo",
        name: "Tag Info",
        state: "openTags",
        icon: "shopping_tag-content",
        views:
        [
            {
                path: "/taginfo/tags",
                name: "Tags",
                mini: "TA",
                component: TagTableView
            }
        ]
    },

    { path: "/calendar", name: "Calendar", icon: "media-1_album", component: Calendar },

    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];

export default dashRoutes;

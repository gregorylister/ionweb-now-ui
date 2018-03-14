import Dashboard from "views/Dashboard/Dashboard.jsx";
import ViewTags from "views/Tags/ViewTags.jsx";
import AddTags from "views/Tags/AddTags.jsx";
import Calendar from "views/Calendar/Calendar.jsx";

var dashRoutes =
[
    { path: "/dashboard", name: "Dashboard", icon: "design_app", component: Dashboard },

    { collapse: true, path: "/tags", name: "Tags", state: "openTags", icon: "files_single-copy-04",
        views:
            [
                { path: "/tags/view", name: "View Tags", mini: "VT", component: ViewTags },
                { path: "/tags/add", name: "Add Tags", mini: "AT", component: AddTags }
            ]
    },

    { path: "/calendar", name: "Calendar", icon: "media-1_album", component: Calendar },

    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];

export default dashRoutes;

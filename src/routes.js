import {createRouter, createWebHashHistory} from "vue-router";

const routerHistory = createWebHashHistory();

import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import NotFoundPage from "./pages/notFound";


const routes = createRouter({
    history: routerHistory,
    routes: [
        {
            path: "/",
            home: "home",
            component: HomePage,
        },
        {
            path: "/about",
            home: "about",
            component: AboutPage,
        },
        {
            path: "/:CatchAll(.*)",
            home: "404",
            component: NotFoundPage,
        }
    ],
});
 
export default routes;
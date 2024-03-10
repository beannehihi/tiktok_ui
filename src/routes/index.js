import routesConfig from "~/config/routes";

import { HeaderUploadPage } from "~/components/layout";

import Home from "~/pages/home";
import Following from "~/pages/following";
import Profiles from "~/pages/profiles";
import Upload from "~/pages/upload";
import Search from "~/pages/search";

//public Routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profiles, component: Profiles },
    { path: routesConfig.upload, component: Upload, layout: HeaderUploadPage },
    { path: routesConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

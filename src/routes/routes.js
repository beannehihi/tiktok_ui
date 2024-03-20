import config from "~/config";

import { HeaderUploadPage } from "~/layouts";

import Home from "~/pages/home";
import Following from "~/pages/following";
import Profiles from "~/pages/profiles";
import Upload from "~/pages/upload";
import Search from "~/pages/search";

//public Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profiles, component: Profiles },
    { path: config.routes.upload, component: Upload, layout: HeaderUploadPage },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

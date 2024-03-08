import { HeaderUploadPage } from "~/components/layout";

import Home from "~/pages/home";
import Following from "~/pages/following";
import Profiles from "~/pages/profiles";
import Upload from "~/pages/upload";
import Search from "~/pages/search";

//public Routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/profiles", component: Profiles },
    { path: "/upload", component: Upload, layout: HeaderUploadPage },
    { path: "/search", component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

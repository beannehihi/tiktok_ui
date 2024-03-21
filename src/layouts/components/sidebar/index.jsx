import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import config from "~/config";
import Menu, { MenuItem } from "./menu";
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from "~/components/icons";
import SuggestedAccounts from "~/components/suggestedAcounts/SuggestedAccounts";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx("wrapper")}>
            <Menu>
                <MenuItem
                    title='For You'
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title='Following'
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title='LIVE'
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>
            <SuggestedAccounts label='Following accounts' />
        </aside>
    );
}

export default Sidebar;

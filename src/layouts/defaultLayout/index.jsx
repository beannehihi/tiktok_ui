import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Header from "~/layouts/components/header";
import styles from "./defaultLayout.module.scss";
import Sidebar from "../components/sidebar";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;

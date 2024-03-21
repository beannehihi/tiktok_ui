import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccount.module.scss";
import AccountItems from "./AccountItems";

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    return (
        <div className={cx("wrapper")}>
            <p className={cx("label")}>{label}</p>
            <AccountItems></AccountItems>
            <AccountItems></AccountItems>
            <AccountItems></AccountItems>
            <AccountItems></AccountItems>
            <p className={cx("more-btn")}>See more</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;

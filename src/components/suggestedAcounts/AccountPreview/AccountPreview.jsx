import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountPreview.module.scss";

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <img
                    className={cx("avatar")}
                    src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3535e55f1ed7b678a326cda31f5dbfe7.jpeg?lk3s=a5d48078&x-expires=1711177200&x-signature=A9Id3b6GV%2Bso3NsG6nU1SOEi2E4%3D'
                    alt=''
                />
            </div>
            <div className={cx("body")}>
                <p className={cx("nick-name")}>
                    <strong>John Doe</strong>
                    <FontAwesomeIcon
                        className={cx("check")}
                        icon={faCheckCircle}
                    ></FontAwesomeIcon>
                </p>
                <p className={cx("name")}>John Doe</p>
                <p className={cx("analytics")}>
                    <strong className={cx("value")}>8.2M </strong>
                    <span className={cx("label")}>Follower</span>
                    <strong className={cx("value")}>8.2M </strong>
                    <span className={cx("label")}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;

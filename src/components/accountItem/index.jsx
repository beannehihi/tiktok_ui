import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src='https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/fe075ea1d2eee6f95d054839727baa85~c5_300x300.webp?lk3s=a5d48078&x-expires=1709798400&x-signature=f1%2BOXADtyaHMwncVqAzpLMlrXr4%3D'
                alt=''
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon
                        className={cx("check")}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx("username")}>Nguyen Van a</span>
            </div>
        </div>
    );
}

export default AccountItem;

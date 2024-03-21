import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "~/components/popper";

import styles from "./SuggestedAccount.module.scss";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles);

const renderPreview = (props) => {
    return (
        <div tabIndex='-1' {...props}>
            <PopperWrapper>
                <AccountPreview></AccountPreview>
            </PopperWrapper>
        </div>
    );
};

function AccountItems() {
    return (
        <>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-10, 0]}
                placement='bottom'
                render={renderPreview}
            >
                <div className={cx("account-item")}>
                    <img
                        className={cx("avatar")}
                        src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3535e55f1ed7b678a326cda31f5dbfe7.jpeg?lk3s=a5d48078&x-expires=1711177200&x-signature=A9Id3b6GV%2Bso3NsG6nU1SOEi2E4%3D'
                        alt='avatar'
                    />
                    <div className={cx("item-info")}>
                        <p className={cx("nick-name")}>
                            <strong>John Doe</strong>
                            <FontAwesomeIcon
                                className={cx("check")}
                                icon={faCheckCircle}
                            ></FontAwesomeIcon>
                        </p>
                        <p className={cx("name")}>John Doe</p>
                    </div>
                </div>
            </Tippy>
        </>
    );
}

AccountItems.propTypes = {};

export default AccountItems;

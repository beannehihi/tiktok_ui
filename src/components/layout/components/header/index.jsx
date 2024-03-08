import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faPlus,
    faSignOut,
    faSpinner,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Button from "~/components/button";
import { Wrapper as PopperWrapper } from "~/components/popper";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import AccountItem from "~/components/accountItem";
import Menu from "~/components/popper/menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Vietnamese",
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
];

function Header() {
    const [searchResult, SetSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            SetSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                //handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View profiles",
            to: "/@hoa",
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "Get coins",
            to: "/coin",
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Settings",
            to: "/settings",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: "Log out",
            to: "/logout",
            separate: true,
        },
    ];

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt='Tiktok' />
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx("search-result")}
                            tabIndex='-1'
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>Accounts</h4>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx("search")}>
                        <input
                            placeholder='Search account and videos'
                            spellCheck={false}
                        />
                        <button className={cx("clear")}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx("loading")}
                            icon={faSpinner}
                        />
                        <button className={cx("search-btn")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Button
                                upload
                                leftIcon={
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                    ></FontAwesomeIcon>
                                }
                            >
                                <span>Upload</span>
                            </Button>
                            <Tippy delay={[0, 200]} content='Messes'>
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon
                                        icon={faMessage}
                                    ></FontAwesomeIcon>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                upload
                                leftIcon={
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                    ></FontAwesomeIcon>
                                }
                            >
                                <span>Upload</span>
                            </Button>
                            <Button primary>Log In</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <img
                                className={cx("user-avatar")}
                                src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/6fe75451879cbfe6efe0300a0c0400a0.jpeg?lk3s=a5d48078&x-expires=1709884800&x-signature=kRxbqDucuZF2qmCLmAniNbm9QXk%3D'
                                alt=''
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                ></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

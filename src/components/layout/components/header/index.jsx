import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPlus,
    faSignOut,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Button from "~/components/button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Menu from "~/components/popper/menu";
import { InboxIcon, MessageIcon } from "~/components/icons";
import Image from "~/components/image";
import Search from "../search";

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
    const currentUser = true;

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
                <Search></Search>
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
                            <Tippy
                                delay={[0, 50]}
                                content='Messes'
                                placement='bottom'
                            >
                                <button className={cx("action-btn")}>
                                    <MessageIcon></MessageIcon>
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                content='Inbox'
                                placement='bottom'
                            >
                                <button className={cx("action-btn")}>
                                    <InboxIcon></InboxIcon>
                                    <span className={cx("badge")}>12</span>
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
                            <Image
                                className={cx("user-avatar")}
                                src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/dea9c85724d2fa2d3ecb26afdd88f6ad.jpeg?lk3s=a5d48078&x-expires=1710039600&x-signature=C2wR9l66tSSdPIlN3tOzvsQpEFI%3D'
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

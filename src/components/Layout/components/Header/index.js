import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import { Inboxs, Messages, UploadIcon } from '~/components/Icons';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Images from '~/components/Images';
import Search from '~/components/Layout/components/Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const userCurrent = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@lequoc',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <Search></Search>

                <div className={cx('actions')}>
                    {userCurrent ? (
                        <>
                            <Tippy delay={[0, 50]} content="Messages" placement="bottom">
                                <button className={cx('user-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Messages" placement="bottom">
                                <button className={cx('user-btn')}>
                                    <Messages />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inboxs" placement="bottom">
                                <button className={cx('user-btn')}>
                                    <Inboxs />
                                    <span className={cx('badge')}>30</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <Menu items={userCurrent ? userMenu : MENU_ITEMS}>
                        {userCurrent ? (
                            <Images
                                className={cx('user-avatar')}
                                alt="Le Quoc"
                                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/311445419_1199340923948887_6760918673147219910_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qa1P-Uljui8AX_XTOBf&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfB-sNk8M2x46wYKRcb84u2nvoR6PRLzg7yM5SPIEVSlAw&oe=64D024E4"
                                // fallBack ='' có thể custom một ảnh bất kỳ để thay thế nếu như ảnh lỗi bằng prop là fallback
                                fallBack="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
                            />
                        ) : (
                            <button className={cx('more-button')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

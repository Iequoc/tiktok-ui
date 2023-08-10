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
    faPlus,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { Inboxs, Messages } from '~/components/Icons';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Images from '~/components/Images';
import Search from '~/layouts/components/Search';
import config from '~/config';

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
                <div>
                    <Link className={cx('logo')} to={config.routes.home}>
                        <img src={images.logo} alt="TikTok" />
                    </Link>
                </div>
                <Search></Search>

                <div className={cx('actions')}>
                    {userCurrent ? (
                        <>
                            <Button
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                outline
                                small
                                className={cx('custom-btn-upload')}
                            >
                                Upload
                            </Button>
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
                                src=""
                                // fallBack ='' có thể custom một ảnh bất kỳ để thay thế nếu như ảnh lỗi bằng prop là fallBack
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

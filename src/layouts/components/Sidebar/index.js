import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, GroupUserIcon, LiveIcon, CompassIcon } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);
const INIT_PAGE = 1;
const PER_PAGE = 8;

function SideBar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggest({ page, perPage: PER_PAGE })
            .then((data) => {
                if (page === INIT_PAGE) {
                    setSuggestedUsers(data);
                } else setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((error) => console.log(error));
    }, [page]);

    const handleSeeAll = () => {
        setPage(page + 1);
    };

    const handleSeeLess = () => {
        setPage(INIT_PAGE);
    };

    return (
        <aside className={cx('wrapper')}>
            <div className={cx('scroll-side-bar')}>
                <div className={cx('inner-side-bar')}>
                    <Menu>
                        <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} />
                        <MenuItem title="Following" to={config.routes.following} icon={<GroupUserIcon />} />
                        <MenuItem title="Explore" to={config.routes.explore} icon={<CompassIcon />} />
                        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
                    </Menu>
                    <SuggestedAccounts
                        title="Following accounts"
                        data={suggestedUsers}
                        onSeeAll={handleSeeAll}
                        onSeeLess={handleSeeLess}
                    />
                    <div className={cx('footer')}>
                        <div className={cx('link-container')}>
                            <a href="..">About</a>
                            <a href="..">Newsroom</a>
                            <a href="..">Contact</a>
                            <a href="..">Careers</a>
                        </div>
                        <div className={cx('link-container')}>
                            <a href="..">TikTok for Good</a>
                            <a href="..">Advertise</a>
                            <a href="..">Developers</a>
                            <a href="..">Transparency</a>
                            <a href="..">TikTok Rewards</a>
                            <a href="..">TikTok Embeds</a>
                        </div>
                        <div className={cx('link-container')}>
                            <a href="..">Help</a>
                            <a href="..">Safety</a>
                            <a href="..">Terms</a>
                            <a href="..">Privacy</a>
                            <a href="..">Creator Portal</a>
                            <a href="..">Community Guidelines</a>
                        </div>
                        <div className={cx('link-container')}>
                            <span>Others</span>
                        </div>
                        <div className={cx('link-container')}>
                            <span>© 2023 TikTok</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default SideBar;

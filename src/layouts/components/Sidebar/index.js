import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, GroupUserIcon, LiveIcon } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<GroupUserIcon />} />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>

            <SuggestedAccounts title="Suggested accounts" />
            <SuggestedAccounts title="Following accounts" />
        </aside>
    );
}

export default SideBar;

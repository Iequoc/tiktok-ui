// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon }) {
    return (
        // NavLink is support active

        // NavLink có chứa một class tên là active và khi NavLink được active sẽ trả về một nav data (object)
        // và trong object đó sẽ có một key là isActive
        // Nghĩa là khi NavLink được active thì key isActive sẽ là true
        // chính vì vậy nên khi sử dụng một hàm trong className sẽ trả về một nav data
        // Kết hợp với cx sẽ custom được một dynamic class (class động)
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            {icon}
            <span className={cx('title-menu-item')}>{title}</span>
        </NavLink>
    );
}

// MenuItem.propTypes = {
//     title: PropTypes.string.isRequired,
//     to: PropTypes.string.isRequired,
//     icon: PropTypes.node.isRequired,
// };

export default MenuItem;

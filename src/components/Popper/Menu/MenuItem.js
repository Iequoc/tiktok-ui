import Button from '~/components/Button';
import className from 'classnames/bind';
import styles from './Menu.module.scss';

import PropTypes from 'prop-types';

const cx = className.bind(styles);

function MenuItem({ onClick, data }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    onClick: PropTypes.func,
    data: PropTypes.object.isRequired,
};

export default MenuItem;

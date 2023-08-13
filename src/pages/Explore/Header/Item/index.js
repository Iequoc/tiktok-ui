import classNames from 'classnames/bind';
import styles from './Item.module.scss';

const cx = classNames.bind(styles);

function Item({ icon, title, className, onClick, style }) {
    return (
        <div className={cx('item', className)} onClick={onClick} style={style}>
            {icon}
            <span>{title}</span>
        </div>
    );
}

export default Item;

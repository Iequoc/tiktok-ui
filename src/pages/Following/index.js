import classNames from 'classnames/bind';
import styles from './Following.module.scss';

import Content from '~/pages/Home/Content';

const cx = classNames.bind(styles);

function Following() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('column-container')}>
                <Content />
                <Content />
                <Content />
            </div>
            {/* actions khac tren trang Home */}
        </div>
    );
}

export default Following;

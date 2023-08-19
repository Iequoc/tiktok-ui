import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import styles from './Live.module.scss';
import ItemPlayer from './ItemPlayer';

const cx = classNames.bind(styles);

function Live() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('tabs-wrapper')}>
                <div className={cx('tabs-container')}>
                    <div className={cx('tabs')}>
                        <div className={cx('tab-item')}></div>
                        <div className={cx('tab-item')}></div>
                    </div>
                </div>
            </div>

            <div className={cx('button')}>
                <div className={cx('switch-live', 'prev')}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </div>
                <div className={cx('switch-live', 'next')}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
            <div className={cx('live-container')}>
                <div className={cx('list-live-video')}>
                    <ItemPlayer />
                    <ItemPlayer />
                </div>
            </div>
        </div>
    );
}

export default Live;

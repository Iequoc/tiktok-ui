import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { SaveIcon } from '~/components/Icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <img
                    src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/311445419_1199340923948887_6760918673147219910_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=r1-5XAjcAUUAX_opLsv&_nc_ht=scontent.fhan5-10.fna&oh=00_AfD7E2-BVjtQbatOF2CULVDgkb4Gj6ddZlNYReli1ys9oA&oe=64D41964"
                    alt="Le Quoc"
                />
            </div>

            <div className={cx('container-content')}>
                <div className={cx('header')}>
                    <div className={cx('user-info')}>
                        <h3 className={cx('nickname')}>lequoc2002</h3>
                        <span className={cx('check')}>
                            <FontAwesomeIcon icon={faCheckCircle} />
                        </span>

                        <h4 className={cx('name')}>Le Quoc</h4>
                    </div>

                    <Button outline className={cx('btn-follow')}>
                        {' '}
                        Follow
                    </Button>
                    <div className={cx('wrapper-desc')}>
                        <div>
                            <span className={cx('desc-video')}>Mô tả của video ở đây nhé</span>
                        </div>

                        <p className={cx('hashtag')}>#lequoc</p>
                    </div>
                    <div className={cx('music')}>
                        <span>
                            <FontAwesomeIcon icon={faMusic} />
                        </span>
                        <p> nhạc nền - Chỗ này để nhạc nền</p>
                    </div>
                </div>
                <div className={cx('wrapper-video')}>
                    {/* Video se duoc chieu o day */}
                    <div className={cx('video')}>
                        <img
                            src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
                            alt=""
                        />
                    </div>
                    <div className={cx('container-actions')}>
                        <div className={cx('btn-actions')}>
                            <button className={cx('btn-item')}>
                                <span>
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                                <strong>890.4k</strong>
                            </button>
                            <button className={cx('btn-item')}>
                                <span>
                                    <FontAwesomeIcon icon={faCommentDots} />
                                </span>
                                <strong>890.4k</strong>
                            </button>
                            <button className={cx('btn-item')}>
                                <span>
                                    <SaveIcon />
                                </span>
                                <strong>890.4k</strong>
                            </button>
                            <button className={cx('btn-item')}>
                                <span>
                                    <FontAwesomeIcon icon={faShare} />
                                </span>
                                <strong>890.4k</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;

import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import {
    BagIcon,
    BasketballIcon,
    CarIcon,
    CupIcon,
    EarthIcon,
    EmojiIcon,
    FilmIcon,
    GroupSolidICon,
    HeartHomeIcon,
    LikeIcon,
    MicIcon,
    PlayIcon,
    TreeIcon,
} from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Explore() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('category-list-wrapper')}>
                <div className={cx('btn-left')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                    <div className={cx('container')}></div>
                </div>

                <div className={cx('category-container')}>
                    <div className={cx('category-item')}>
                        <MicIcon />
                        <span>Dance and Music</span>
                    </div>
                    <div className={cx('category-item')}>
                        <BasketballIcon />
                        <span>Sports</span>
                    </div>
                    <div className={cx('category-item')}>
                        <EmojiIcon />
                        <span>Entertainment</span>
                    </div>
                    <div className={cx('category-item')}>
                        <FilmIcon />
                        <span>Comedy and Drama</span>
                    </div>
                    <div className={cx('category-item')}>
                        <CarIcon />
                        <span>Autos</span>
                    </div>
                    <div className={cx('category-item')}>
                        <BagIcon />
                        <span>Fashion</span>
                    </div>
                    <div className={cx('category-item')}>
                        <CupIcon />
                        <span>Lifestyle</span>
                    </div>
                    <div className={cx('category-item')}>
                        <TreeIcon />
                        <span>Pets and Nature</span>
                    </div>
                    <div className={cx('category-item')}>
                        <HeartHomeIcon />
                        <span>Relationships</span>
                    </div>
                    <div className={cx('category-item')}>
                        <GroupSolidICon />
                        <span>Society</span>
                    </div>
                    <div className={cx('category-item')}>
                        <EarthIcon />
                        <span>Informative</span>
                    </div>
                </div>
                <div className={cx('btn-right')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div className={cx('container')}></div>
                </div>
            </div>
            <div className={cx('container-content')}>
                <div className={cx('list-video-item')}>
                    <div className={cx('video-item')}>
                        <div className={cx('video')}>
                            <img
                                src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
                                alt="noi dung video"
                            />

                            <div className={cx('view')}>
                                <PlayIcon />
                                <span className={cx('num-of-view')}>952.4K</span>
                            </div>
                        </div>
                        <div className={cx('card-desc')}>
                            <div>
                                <div className={cx('caption')}>
                                    <p>Phần mô tả của video</p>
                                </div>
                                <div className={cx('user')}>
                                    <div className={cx('info')}>
                                        <img
                                            src="https://capnuoclaocai.com.vn/wp-content/uploads/2023/06/hinh-anh-gai-xinh-de-thuong.jpg"
                                            alt="avatar"
                                        />
                                        <span className={cx('nickname')}>lequoc2002</span>
                                        <span className={cx('check')}>
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </span>
                                    </div>
                                    <div className={cx('like')}>
                                        <LikeIcon />
                                        <span className={cx('num')}>100.2K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('video-item')}>
                        <div className={cx('video')}>
                            <img
                                src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
                                alt="noi dung video"
                            />

                            <div className={cx('view')}>
                                <PlayIcon />
                                <span className={cx('num-of-view')}>952.4K</span>
                            </div>
                        </div>
                        <div className={cx('card-desc')}>
                            <div>
                                <div className={cx('caption')}>
                                    <p>Phần mô tả của video</p>
                                </div>
                                <div className={cx('user')}>
                                    <div className={cx('info')}>
                                        <img
                                            src="https://capnuoclaocai.com.vn/wp-content/uploads/2023/06/hinh-anh-gai-xinh-de-thuong.jpg"
                                            alt="avatar"
                                        />
                                        <span className={cx('nickname')}>lequoc2002</span>
                                        <span className={cx('check')}>
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </span>
                                    </div>
                                    <div className={cx('like')}>
                                        <LikeIcon />
                                        <span className={cx('num')}>100.2K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('video-item')}>
                        <div className={cx('video')}>
                            <img
                                src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
                                alt="noi dung video"
                            />

                            <div className={cx('view')}>
                                <PlayIcon />
                                <span className={cx('num-of-view')}>952.4K</span>
                            </div>
                        </div>
                        <div className={cx('card-desc')}>
                            <div>
                                <div className={cx('caption')}>
                                    <p>Phần mô tả của video</p>
                                </div>
                                <div className={cx('user')}>
                                    <div className={cx('info')}>
                                        <img
                                            src="https://capnuoclaocai.com.vn/wp-content/uploads/2023/06/hinh-anh-gai-xinh-de-thuong.jpg"
                                            alt="avatar"
                                        />
                                        <span className={cx('nickname')}>lequoc2002</span>
                                        <span className={cx('check')}>
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </span>
                                    </div>
                                    <div className={cx('like')}>
                                        <LikeIcon />
                                        <span className={cx('num')}>100.2K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('video-item')}>
                        <div className={cx('video')}>
                            <img
                                src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
                                alt="noi dung video"
                            />

                            <div className={cx('view')}>
                                <PlayIcon />
                                <span className={cx('num-of-view')}>952.4K</span>
                            </div>
                        </div>
                        <div className={cx('card-desc')}>
                            <div>
                                <div className={cx('caption')}>
                                    <p>Phần mô tả của video</p>
                                </div>
                                <div className={cx('user')}>
                                    <div className={cx('info')}>
                                        <img
                                            src="https://capnuoclaocai.com.vn/wp-content/uploads/2023/06/hinh-anh-gai-xinh-de-thuong.jpg"
                                            alt="avatar"
                                        />
                                        <span className={cx('nickname')}>lequoc2002</span>
                                        <span className={cx('check')}>
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </span>
                                    </div>
                                    <div className={cx('like')}>
                                        <LikeIcon />
                                        <span className={cx('num')}>100.2K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('video-item')}>
                        <div className={cx('video')}>
                            <img
                                src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
                                alt="noi dung video"
                            />

                            <div className={cx('view')}>
                                <PlayIcon />
                                <span className={cx('num-of-view')}>952.4K</span>
                            </div>
                        </div>
                        <div className={cx('card-desc')}>
                            <div>
                                <div className={cx('caption')}>
                                    <p>Phần mô tả của video</p>
                                </div>
                                <div className={cx('user')}>
                                    <div className={cx('info')}>
                                        <img
                                            src="https://capnuoclaocai.com.vn/wp-content/uploads/2023/06/hinh-anh-gai-xinh-de-thuong.jpg"
                                            alt="avatar"
                                        />
                                        <span className={cx('nickname')}>lequoc2002</span>
                                        <span className={cx('check')}>
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </span>
                                    </div>
                                    <div className={cx('like')}>
                                        <LikeIcon />
                                        <span className={cx('num')}>100.2K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('video-item')}>
                        <div className={cx('video')}>
                            <img
                                src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
                                alt="noi dung video"
                            />

                            <div className={cx('view')}>
                                <PlayIcon />
                                <span className={cx('num-of-view')}>952.4K</span>
                            </div>
                        </div>
                        <div className={cx('card-desc')}>
                            <div>
                                <div className={cx('caption')}>
                                    <p>Phần mô tả của video</p>
                                </div>
                                <div className={cx('user')}>
                                    <div className={cx('info')}>
                                        <img
                                            src="https://capnuoclaocai.com.vn/wp-content/uploads/2023/06/hinh-anh-gai-xinh-de-thuong.jpg"
                                            alt="avatar"
                                        />
                                        <span className={cx('nickname')}>lequoc2002</span>
                                        <span className={cx('check')}>
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </span>
                                    </div>
                                    <div className={cx('like')}>
                                        <LikeIcon />
                                        <span className={cx('num')}>100.2K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('video-item')}>
                        <div className={cx('video')}>
                            <img
                                src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
                                alt="noi dung video"
                            />

                            <div className={cx('view')}>
                                <PlayIcon />
                                <span className={cx('num-of-view')}>952.4K</span>
                            </div>
                        </div>
                        <div className={cx('card-desc')}>
                            <div>
                                <div className={cx('caption')}>
                                    <p>Phần mô tả của video</p>
                                </div>
                                <div className={cx('user')}>
                                    <div className={cx('info')}>
                                        <img
                                            src="https://capnuoclaocai.com.vn/wp-content/uploads/2023/06/hinh-anh-gai-xinh-de-thuong.jpg"
                                            alt="avatar"
                                        />
                                        <span className={cx('nickname')}>lequoc2002</span>
                                        <span className={cx('check')}>
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </span>
                                    </div>
                                    <div className={cx('like')}>
                                        <LikeIcon />
                                        <span className={cx('num')}>100.2K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('video-item')}>
                        <div className={cx('video')}>
                            <img
                                src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
                                alt="noi dung video"
                            />

                            <div className={cx('view')}>
                                <PlayIcon />
                                <span className={cx('num-of-view')}>952.4K</span>
                            </div>
                        </div>
                        <div className={cx('card-desc')}>
                            <div>
                                <div className={cx('caption')}>
                                    <p>Phần mô tả của video</p>
                                </div>
                                <div className={cx('user')}>
                                    <div className={cx('info')}>
                                        <img
                                            src="https://capnuoclaocai.com.vn/wp-content/uploads/2023/06/hinh-anh-gai-xinh-de-thuong.jpg"
                                            alt="avatar"
                                        />
                                        <span className={cx('nickname')}>lequoc2002</span>
                                        <span className={cx('check')}>
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </span>
                                    </div>
                                    <div className={cx('like')}>
                                        <LikeIcon />
                                        <span className={cx('num')}>100.2K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;

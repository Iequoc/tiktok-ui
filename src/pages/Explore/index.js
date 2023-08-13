import classNames from 'classnames/bind';

import styles from './Explore.module.scss';
import { LikeIcon, PlayIcon } from '~/components/Icons';

import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Explore() {
    const [sidebarHeader, setSidebarHeader] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setSidebarHeader(window.scrollY <= 200);
        };

        window.addEventListener('scroll', handleScroll);

        //Clean up Function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Header
                className={cx({
                    show: sidebarHeader,
                })}
            />

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

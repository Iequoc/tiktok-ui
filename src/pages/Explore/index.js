import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Explore.module.scss';
import Header from './Header';
import VideoItem from './VideoItem';

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
                    <VideoItem />
                    <VideoItem />
                    <VideoItem />
                    <VideoItem />
                    <VideoItem />
                    <VideoItem />
                    <VideoItem />
                    <VideoItem />
                    <VideoItem />
                    <VideoItem />
                    <VideoItem />
                    <VideoItem />
                </div>
            </div>
        </div>
    );
}

export default Explore;

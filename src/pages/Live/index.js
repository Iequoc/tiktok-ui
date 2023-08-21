import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

import styles from './Live.module.scss';
import ItemPlayer from './ItemPlayer';

const cx = classNames.bind(styles);

function Live() {
    let heightItem = 24;

    let refListVideo = useRef();
    let prev = useRef();
    let next = useRef();
    let refTabFollowing = useRef();
    let refTabForYou = useRef();

    let [disabled, setDisabled] = useState(true);
    let [countItems, setCountItems] = useState(0);
    let [positionCurrent, setPositionCurrent] = useState(0);

    const handleGetHeight = (height) => {
        if (height) {
            heightItem += height;
        }
    };

    //tabs
    let [active, setActive] = useState(true);
    let [inactive, setInactive] = useState(false);

    const handleSwitchTab = (e) => {
        if (e.target.innerText === 'For You') {
            if (active === false) {
                setActive(!active);
                setInactive(!inactive);
            }
        } else {
            if (active) {
                setActive(!active);
                setInactive(!inactive);
            }
        }
    };

    useEffect(() => {
        const btnNext = document.getElementsByClassName(next.current.className);
        const btnPrev = document.getElementsByClassName(prev.current.className);

        const handleNext = () => {
            setCountItems(countItems + 1);
            setDisabled(false);
            refListVideo.current.style = `transform: translateY(${positionCurrent - heightItem}px)`;
            setPositionCurrent(positionCurrent - heightItem);
        };
        const handlePrev = () => {
            setCountItems(countItems - 1);
            if (countItems >= 1) {
                setPositionCurrent(positionCurrent + heightItem);
                refListVideo.current.style = `transform: translateY(${positionCurrent + heightItem}px)`;
            }
            if (countItems === 1) {
                setDisabled(true);
            }
        };

        btnNext[0].addEventListener('click', handleNext);
        if (disabled === false) {
            btnPrev[0].addEventListener('click', handlePrev);
        }

        //clean up function

        return () => {
            if (btnNext[0]) {
                btnNext[0].removeEventListener('click', handleNext);
            }

            if (btnPrev[0]) {
                if (disabled === false) {
                    btnPrev[0].removeEventListener('click', handlePrev);
                }
            }
        };
    }, [positionCurrent, countItems, disabled, heightItem]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('tabs-wrapper')}>
                <div className={cx('tabs-container')}>
                    <div className={cx('tabs')}>
                        <div className={cx('tab-item', { active: active })}></div>
                        <div className={cx('tab-item', { active: inactive })}></div>
                    </div>
                </div>
                <div className={cx('showed-tabs')}>
                    <div ref={refTabForYou} className={cx('feed-tab', { active: active })} onClick={handleSwitchTab}>
                        <span>For You</span>
                    </div>
                    <div
                        ref={refTabFollowing}
                        className={cx('feed-tab', { active: inactive })}
                        onClick={handleSwitchTab}
                    >
                        <span>Following</span>
                    </div>
                </div>
            </div>

            <div className={cx('button')}>
                <div ref={prev} className={cx('switch-live', 'prev', { disabled: disabled })}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </div>
                <div ref={next} className={cx('switch-live', 'next', 'available')}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
            <div className={cx('live-container')}>
                <div ref={refListVideo} className={cx('list-live-video')}>
                    <ItemPlayer getHeight={handleGetHeight} />
                    <ItemPlayer />
                    <ItemPlayer />
                    <ItemPlayer />
                </div>
            </div>
        </div>
    );
}

export default Live;

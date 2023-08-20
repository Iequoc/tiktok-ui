import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

import styles from './Live.module.scss';
import ItemPlayer from './ItemPlayer';

const cx = classNames.bind(styles);

function Live() {
    let heightItem = 24;
    let ref = useRef();
    let prev = useRef();
    let next = useRef();
    let [disabled, setDisabled] = useState(true);
    let [countItems, setCountItems] = useState(0);

    let [positionCurrent, setPositionCurrent] = useState(0);

    // console.log(heightItem);

    const handleGetHeight = (height) => {
        if (height) {
            heightItem += height;
        }
    };

    useEffect(() => {
        const btnNext = document.getElementsByClassName(next.current.className);
        const btnPrev = document.getElementsByClassName(prev.current.className);

        const handleNext = () => {
            setCountItems(countItems + 1);
            setDisabled(false);
            ref.current.style = `transform: translateY(${positionCurrent - heightItem}px)`;
            setPositionCurrent(positionCurrent - heightItem);
        };
        const handlePrev = () => {
            setCountItems(countItems - 1);
            console.log(countItems);
            if (countItems >= 1) {
                setPositionCurrent(positionCurrent + heightItem);
                ref.current.style = `transform: translateY(${positionCurrent + heightItem}px)`;
            }
            if (countItems === 1) {
                setDisabled(true);
            }
        };

        btnNext[0].addEventListener('click', handleNext);
        if (disabled === false) {
            btnPrev[0].addEventListener('click', handlePrev);
        }

        return () => {
            btnNext[0].removeEventListener('click', handleNext);
            if (disabled === false) {
                btnPrev[0].removeEventListener('click', handlePrev);
            }
        };
        // console.log(positionCurrent);
        // eslint-disable-next-line
    }, [positionCurrent]);

    // useEffect(() => {
    //     // console.log(prev.current);
    //     // console.log(next.current.className);
    // }, [positionCurrent]);

    // const handleClick = () => {
    //     if (ref) {
    //         const test = ref.current;
    //         test.style = `transform: translateY(${setPositionCurrent(positionCurrent - 1)}px)`;
    //     }
    // };
    console.log('re-render');

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
                <div ref={prev} className={cx('switch-live', 'prev', { disabled: disabled })}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </div>
                <div ref={next} className={cx('switch-live', 'next', 'available')}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
            <div className={cx('live-container')}>
                <div ref={ref} className={cx('list-live-video')}>
                    <ItemPlayer getHeight={handleGetHeight} />
                    <ItemPlayer />
                    <ItemPlayer />
                </div>
            </div>
        </div>
    );
}

export default Live;

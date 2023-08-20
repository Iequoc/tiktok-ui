import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { useEffect, useRef } from 'react';

import styles from './ItemPlayer.module.scss';
import { GroupSolidICon, MuteVolumeIcon, PlaySolidIcon, ReloadIcon, SvgLiveIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function ItemPlayer(props) {
    let ref = useRef();

    const getHeightItem = props.getHeight;

    useEffect(() => {
        if (ref.current) {
            let height = ref.current.offsetHeight;
            if (getHeightItem) {
                getHeightItem(height);
            }
        }
    }, [getHeightItem]);

    return (
        <div ref={ref} className={cx('item')}>
            <div className={cx('feed-player-controls')}>
                <div className={cx('tips')}>
                    <div className={cx('tip-container')}>
                        <div className={cx('line')}></div>

                        <div className={cx('icon')}>
                            <SvgLiveIcon className={cx('svg-live-icon')} />
                        </div>
                        <div className={cx('tip-text')}>
                            <span>Click to watch LIVE</span>
                        </div>

                        <div className={cx('line')}></div>
                    </div>
                </div>
                <div className={cx('player-details')}>
                    <div className={cx('status-player')}>LIVE</div>
                    <div className={cx('details-line')}>
                        <span className={cx('nick-name')}> @lequoc</span>
                        <GroupSolidICon height="1.6rem" width="2.6rem" />
                        <span className={cx('views')}>5.1K</span>
                    </div>
                    <div className={cx('details-line')}>
                        <p>Nội dung mô tả</p>
                    </div>
                </div>

                <div className={cx('player-footer-container')}>
                    <div className={cx('control-bar')}>
                        <div className={cx('inner-controller')}>
                            <div className={cx('icon-controller')}>
                                <PlaySolidIcon />
                            </div>
                            <div className={cx('icon-controller')}>
                                <ReloadIcon />
                            </div>
                        </div>
                        <div className={cx('inner-controller')}>
                            <Tippy
                                interactive
                                delay={[0, 50]}
                                content="You will automatically watch in this LIVE in 20 seconds"
                                placement="top"
                                className={cx('tip-messages')}
                                maxWidth={200}
                            >
                                <div className={cx('auto-play-container')}>
                                    <div className={cx('icon-auto-play')}>
                                        Auto-play:
                                        <span className={cx('btn-auto-play')}>Off</span>
                                    </div>
                                </div>
                            </Tippy>

                            <div className={cx('volume')}>
                                <div className={cx('slider-volume')}>
                                    <div className={cx('volume-bar')}>
                                        <div className={cx('drag-bar')}></div>
                                        <div className={cx('dot')}></div>
                                    </div>
                                </div>
                                <div className={cx('icon-volume')}>
                                    <MuteVolumeIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('player-gradient')}></div>

            <img
                src="https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-co-gai-de-thuong_025058983.jpg"
                alt="live stream"
            />
        </div>
    );
}

export default ItemPlayer;

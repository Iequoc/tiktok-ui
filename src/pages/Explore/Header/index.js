import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
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
    MicIcon,
    TreeIcon,
} from '~/components/Icons';
import Item from './Item';

const cx = classNames.bind(styles);

const listTitles = [
    { title: 'Dance and Music', icon: <MicIcon /> },
    { title: 'Sports', icon: <BasketballIcon /> },
    { title: 'Entertainment', icon: <EmojiIcon /> },
    { title: 'Comedy and Drama', icon: <FilmIcon /> },
    { title: 'Autos', icon: <CarIcon /> },
    { title: 'Fashion', icon: <BagIcon /> },
    { title: 'Lifestyle', icon: <CupIcon /> },
    { title: 'Pets and Nature', icon: <TreeIcon /> },
    { title: 'Relationships', icon: <HeartHomeIcon /> },
    { title: 'Society', icon: <GroupSolidICon /> },
    { title: 'Informative', icon: <EarthIcon /> },
];

function Header({ className }) {
    const header = document.getElementsByClassName('header');

    // active items sidebar header
    const [type, setType] = useState('Dance and Music');

    // Scroll Left after click button
    const [position, setPosition] = useState(0);
    const rangeIncreasePosition = 300;

    const handleScrollRight = () => {
        setPosition((header[0].scrollLeft = position + rangeIncreasePosition));
    };

    const handleScrollLeft = () => {
        setPosition((header[0].scrollLeft = position - rangeIncreasePosition));
    };

    // show hidden buttons
    const [buttonLeft, setButtonLeft] = useState(false);
    const [buttonRight, setButtonRight] = useState(true);

    useEffect(() => {
        const handleScrollX = () => {
            setButtonLeft(header[0].scrollLeft >= 10);
            setButtonRight(header[0].scrollLeft <= 580);
        };

        header[0].addEventListener('scroll', handleScrollX);
    }, [header]);

    return (
        <div className={cx('category-list-wrapper', className)}>
            {buttonLeft && (
                <div className={cx('btn-left')} onClick={handleScrollLeft}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                    <div className={cx('container')}></div>
                </div>
            )}
            {buttonRight && (
                <div className={cx('btn-right')} onClick={handleScrollRight}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div className={cx('container')}></div>
                </div>
            )}

            <div className={cx('category-container', 'header')}>
                {listTitles.map((item, index) => (
                    <Item
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        className={cx({
                            active: type === item.title ? true : false,
                        })}
                        onClick={() => setType(item.title)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Header;

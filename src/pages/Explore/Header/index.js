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
    const [buttonLeft, setButtonLeft] = useState(false);
    const [buttonRight, setButtonRight] = useState(true);
    const [type, setType] = useState('Dance and Music');

    useEffect(() => {
        const handleScrollX = () => {
            setButtonLeft(header[0].scrollLeft >= 10);
            setButtonRight(header[0].scrollLeft <= 580);
        };
        const header = document.getElementsByClassName('header');
        header[0].addEventListener('scroll', handleScrollX);
    }, []);

    return (
        <div className={cx('category-list-wrapper', className)}>
            {buttonLeft && (
                <div className={cx('btn-left')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                    <div className={cx('container')}></div>
                </div>
            )}
            {buttonRight && (
                <div className={cx('btn-right')}>
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

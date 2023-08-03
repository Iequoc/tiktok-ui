import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Search() {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([1, 3, 4]);
        }, 0);
    }, []);

    const handleClear = () => {
        setSearchText('');
        setSearchResults([]);
        inputRef.current.focus();
    };

    const handleHideResults = () => {
        setShowResults(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResults && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResults}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchText}
                    placeholder="Search account or videos"
                    onChange={(e) => setSearchText(e.target.value)}
                    onFocus={() => setShowResults(true)}
                />
                {!!searchText && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                <button className={cx('search-button')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;

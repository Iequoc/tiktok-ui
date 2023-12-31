import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ items = [], children, hideOnClick = false }) {
    const [historyPage, setHistoryPage] = useState([{ data: items }]);
    const current = historyPage[historyPage.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistoryPage((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 500]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            offset={[10, 10]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {historyPage.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistoryPage((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body-wrapper')}> {renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistoryPage((prev) => prev.slice(0, 1))} // reset về trang đầu tiên kho hover của phần menu
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    items: PropTypes.array,
    children: PropTypes.node.isRequired,
    hideOnClick: PropTypes.bool,
};

export default Menu;

import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItems() {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex={-1} {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive placement="bottom" offset={[-40, 3]} delay={[800, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/311445419_1199340923948887_6760918673147219910_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qa1P-Uljui8AX_XTOBf&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfB-sNk8M2x46wYKRcb84u2nvoR6PRLzg7yM5SPIEVSlAw&oe=64D024E4"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong> lequoc2002 </strong>
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Le Quoc</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItems;

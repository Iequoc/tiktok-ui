import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItems from './AccountItems';

const cx = classNames.bind(styles);

function SuggestedAccounts({ title }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{title}</h2>
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <p className={cx('btn-see-more')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SuggestedAccounts;

import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItems from './AccountItems';

const cx = classNames.bind(styles);

function SuggestedAccounts({ title, data = [], onSeeAll }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{title}</h2>
            {data.map((accounts, index) => (
                <AccountItems key={index} data={accounts} />
            ))}

            <p className={cx('btn-see-more')} onClick={onSeeAll}>
                See all
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestedAccounts;

import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItems from './AccountItems';

const cx = classNames.bind(styles);

function SuggestedAccounts({ title, data = [], onSeeAll, onSeeLess }) {
    let followers = data.length;
    let eventClick = onSeeAll;
    let text = 'See all';

    // HardCode because haven't API

    // Load the followers from API of users. When the user's followers is loaded complete then get number of followers at the variable "followers"
    if (followers === 16) {
        eventClick = onSeeLess;
        text = 'See less';
    }

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{title}</h2>
            {data.map((accounts, index) => (
                <AccountItems key={index} data={accounts} />
            ))}
            <p className={cx('btn-see-more')} onClick={eventClick}>
                {text}
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestedAccounts;

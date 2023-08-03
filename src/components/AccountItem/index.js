import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Images from '~/components/Images';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Images
                className={cx('avatar')}
                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/311445419_1199340923948887_6760918673147219910_n.jpg?stp=dst-jpg_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qa1P-Uljui8AX_XTOBf&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfApiq-Sp_kVVq1N-IWbt7Mv8KoACw-z_7mTIu0UFECQsA&oe=64CE6E22"
                alt="Le Quoc"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Le Quoc</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>lequoc2002</span>
            </div>
        </div>
    );
}

export default AccountItem;

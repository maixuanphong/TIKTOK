import classNames from 'classnames/bind';
import styles from './VideoContent.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function LiveContent() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('heading')}>No LIVE videos for you yet</h3>
            <p className={cx('title')}>Go back to explore more videos</p>
            <Link to="/" className={cx('Link')}>
                Go Back
            </Link>
        </div>
    );
}

export default LiveContent;

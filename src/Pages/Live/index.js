import classNames from 'classnames/bind';
import styles from './Live.module.scss';
import LiveContent from '~/Components/LiveContent/LiveContent';
const cx = classNames.bind(styles);
function Live() {
    return (
        <div className={cx('wrapper')}>
            <LiveContent></LiveContent>
        </div>
    );
}

export default Live;

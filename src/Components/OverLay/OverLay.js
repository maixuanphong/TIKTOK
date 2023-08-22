import classNames from 'classnames/bind';
import styles from './OverLay.module.scss';
const cx = classNames.bind(styles);
function OverLay({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default OverLay;

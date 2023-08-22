import classNames from 'classnames/bind';
import Header from './Header/Header';
import Content from './Content/Content';
import styles from './FrofileContent.module.scss';
const cx = classNames.bind(styles);
function FrofileContent({ user }) {
    return (
        <div className={cx('wrapper')}>
            <Header user={user}></Header>
            <Content user={user}></Content>
        </div>
    );
}

export default FrofileContent;

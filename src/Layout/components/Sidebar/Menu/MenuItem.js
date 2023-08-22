import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, activeIcon }) {
    return (
        //Tính chất của NavLink: khi mà chúng ta truyền một hàm vào className ở trong NavLink thì khi NavLink được active thì nó sẽ
        //gọi hàm và trả vào đối số một object có key là isActive còn value thì phụ thuộc vào nếu Navlink mà được
        // active thì isActive là true còn nếu NavLink không được active thì nó là false

        <NavLink
            className={(nav) =>
                cx('menu-item', {
                    active: nav.isActive,
                    icon: !nav.isActive,
                    activeicon: nav.isActive,
                })
            }
            to={to}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;

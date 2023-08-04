import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import Button from '~/Components/Button/button';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button
            leftIcon={data.icon}
            to={data.to}
            className={classes}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;

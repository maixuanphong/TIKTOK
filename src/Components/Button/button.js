import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Button({
    text = false,
    primary = false,
    outline = false,
    round = false,
    disable = false,
    small = false,
    large = false,
    className,
    to,
    href,
    onClick,
    children,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Component = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        round,
        [className]: className,
        disable,
        small,
        large,
    });
    const props = { onClick, ...passProps };

    // remove event listener when button disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }
    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

Button.propTypes = {
    text: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    round: PropTypes.bool,
    disable: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};
export default Button;

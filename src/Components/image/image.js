import { forwardRef, useState } from 'react';
import images from '~/assets/Images';
import styles from './img.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
const Image = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallBack: customFallBack = images.noImage,
            ...props
        },
        ref,
    ) => {
        const [fallBack, setFallBack] = useState('');

        const handleError = () => {
            setFallBack(customFallBack);
        };
        return (
            <img
                alt={alt}
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallBack || src}
                {...props}
                onError={handleError}
            />
        );
    },
);

Image.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
};

export default Image;

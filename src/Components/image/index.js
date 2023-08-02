import { forwardRef, useState } from 'react';
import images from '~/assets/Images';
import styles from './img.module.scss';
import classNames from 'classnames';
const Image = forwardRef(
    (
        { src, className, fallBack: customFallBack = images.noImage, ...props },
        ref,
    ) => {
        const [fallBack, setFallBack] = useState('');

        const handleError = () => {
            setFallBack(customFallBack);
        };
        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallBack || src}
                {...props}
                onError={handleError}
            />
        );
    },
);

export default Image;

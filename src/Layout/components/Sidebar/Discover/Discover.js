import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import Button from '~/Components/Button/Button';
const cx = classNames.bind(styles);
function DisCover() {
    const DisCoverList = [
        'Grow up - Guhancci Remix',
        'Khóc cùng em Ver2 x Thái Hoàng Remix',
        'suthatla',
        'Da da da',
        'Never Give It Up - Jet Remix',
    ];
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>Discover</p>
            <div className={cx('discover-list')}></div>
            {DisCoverList.map((discover) => {
                return (
                    <Button
                        small
                        leftIcon={
                            <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
                        }
                        outline
                        className={cx('discover-item')}
                    >
                        <span className={cx('discover-title')}>{discover}</span>
                    </Button>
                );
            })}
        </div>
    );
}

export default DisCover;

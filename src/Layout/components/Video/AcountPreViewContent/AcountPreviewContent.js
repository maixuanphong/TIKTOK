import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AcountPreviewContent.module.scss';
import Image from '~/Components/image/image';
import Button from '~/Components/Button';

const cx = classNames.bind(styles);

function AcountPreviewContent({ data }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image
                    className={cx('avata')}
                    src={data.user.avatar}
                    alt=""
                ></Image>
                <Button primary className={cx('btn')}>
                    {' '}
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.user.nickname}</strong>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('icon')}
                            icon={faCheckCircle}
                        ></FontAwesomeIcon>
                    )}
                </p>
                <p
                    className={cx('name')}
                >{`${data.user.first_name} ${data.user.last_name}`}</p>
                <p className={cx('analists')}>
                    <strong className={cx('value')}>
                        {data.user.followers_count}{' '}
                    </strong>
                    <span className={cx('label')}>Follower{'    '}</span>
                    <strong className={cx('value')}>
                        {data.user.likes_count}{' '}
                    </strong>
                    <span className={cx('label')}>Like</span>
                </p>
            </div>
        </div>
    );
}

export default AcountPreviewContent;

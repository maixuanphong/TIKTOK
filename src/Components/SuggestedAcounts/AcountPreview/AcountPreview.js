import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AcountPreview.module.scss';
import Image from '~/Components/image/image';
import Button from '~/Components/Button/Button';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function AcountPreview({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image className={cx('avata')} src={data.avatar} alt=""></Image>
                <Button primary className={cx('btn')}>
                    {' '}
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('icon')}
                            icon={faCheckCircle}
                        ></FontAwesomeIcon>
                    )}
                </p>
                <p
                    className={cx('name')}
                >{`${data.first_name} ${data.last_name}`}</p>
                <p className={cx('analists')}>
                    <strong className={cx('value')}>
                        {data.followers_count}{' '}
                    </strong>
                    <span className={cx('label')}>Follower{'    '}</span>
                    <strong className={cx('value')}>{data.likes_count} </strong>
                    <span className={cx('label')}>Like</span>
                </p>
            </div>
        </Link>
    );
}

export default AcountPreview;

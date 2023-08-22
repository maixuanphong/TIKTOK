import { useRef } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Follower.module.scss';
import Image from '~/Components/image/image';
import Button from '~/Components/Button/Button';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Follower({ user }) {
    const videoRef = useRef();
    return (
        <Link
            to={`/@${user.nickname}`}
            className={cx('wrapper')}
            onMouseEnter={() => {
                videoRef.current.play();
            }}
            onMouseLeave={() => {
                videoRef.current.pause();
            }}
        >
            <video
                ref={videoRef}
                className={cx('video')}
                src={user.popular_video.file_url}
            ></video>
            <div className={cx('infor')}>
                <Image className={cx('avata')} src={user.avatar}></Image>
                {user.first_name ? (
                    <p
                        className={cx('full-name')}
                    >{`${user.first_name} ${user.last_name}`}</p>
                ) : (
                    <p className={cx('full-name')}>No Name</p>
                )}

                <p className={cx('nick-name')}>{user.nickname}</p>
                <Button className={cx('btn-follow')} primary>
                    {' '}
                    Follow
                </Button>
            </div>
        </Link>
    );
}

Follower.propTypes = {
    user: PropTypes.object.isRequired,
};

export default Follower;

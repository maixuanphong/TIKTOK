import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Content.module.scss';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { LockIcon } from '~/Components/icon';
const cx = classNames.bind(styles);
function Content({ user }) {
    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [isLock1, setIsLock1] = useState(false);
    const [isLock2, setIsLock2] = useState(true);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <p
                    className={cx('video-type', {
                        isLock: isLock1,
                        isActive: isActive1,
                    })}
                    onClick={(e) => {
                        setIsLock2(true);
                        setIsLock1(false);
                        setIsActive1(true);
                        setIsActive2(false);
                    }}
                    onMouseEnter={() => {
                        setIsActive1(true);
                        setIsActive2(false);
                    }}
                    onMouseLeave={() => {
                        setIsActive1(false);
                    }}
                >
                    Videos
                </p>
                <p
                    className={cx('video-type', {
                        isLock: isLock2,
                        isActive: isActive2,
                    })}
                    onClick={(e) => {
                        setIsLock2(false);
                        setIsLock1(true);
                        setIsActive2(true);
                        setIsActive1(false);
                    }}
                    onMouseEnter={() => {
                        setIsActive2(true);
                        setIsActive1(false);
                    }}
                    onMouseLeave={() => {
                        setIsActive2(false);
                    }}
                >
                    {' '}
                    <FontAwesomeIcon
                        icon={faLock}
                        className={cx('icon')}
                    ></FontAwesomeIcon>
                    Liked
                </p>
            </div>
            {console.log(user.videos)}

            <div className={cx('container')}>
                {isLock2 ? (
                    <div>
                        {user.videos?.map((video, index) => {
                            return (
                                <div className={cx('video-wrapper')}>
                                    <video
                                        className={cx('video')}
                                        src={video.file_url}
                                        onMouseEnter={(e) => {
                                            e.target.play();
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.pause();
                                        }}
                                    ></video>{' '}
                                    <p className={cx('video-desc')}>
                                        {' '}
                                        {video.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className={cx('Video-pivate')}>
                        <LockIcon className={cx('lock-icon')}></LockIcon>
                        <h2 className={cx('video-private-heading')}>
                            This user's liked videos are private
                        </h2>
                        <p className={cx('video-private-title')}>
                            Videos liked by xucana are currently hidden
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

Content.propTypes = {
    user: PropTypes.object.isRequired,
};

export default Content;

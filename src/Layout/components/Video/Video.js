import classNames from 'classnames/bind';
import styles from './Video.module.scss';
// import {
//     NoVolumnIcon,
//     PauseIcon,
//     PlayIcon,
//     VolumnIcon,
// } from '~/Components/icon';
import { useRef, useState, useEffect } from 'react';
const cx = classNames.bind(styles);

const Video = ({ data }) => {
    const videoRef = useRef(null);
    const [isInViewport, setIsInViewport] = useState(false);

    const handleIntersection = (entries) => {
        const [entry] = entries;
        setIsInViewport(entry.isIntersecting);
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.8, // Adjust the threshold as needed
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        const video = videoRef.current;

        if (video) {
            observer.observe(video);
        }

        return () => {
            if (video) {
                observer.unobserve(video);
            }
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;

        if (isInViewport && videoRef.current.pause) {
            video.play().catch((error) => {
                // Xử lý lỗi khi không thể phát video
                console.error('Không thể phát video:');
            });
        } else if (!isInViewport && !video.paused) {
            video.pause();
        }
    }, [isInViewport]);

    return (
        <div className={cx('video-wrapper')}>
            <video
                className={cx('video')}
                src={data.file_url}
                ref={videoRef}
                // onPause={() => {
                //     setIsPlay(false);
                // }}
                // onPlay={() => {
                //     setIsPlay(true);
                // }}

                controls
            ></video>
            {/* <div
                className={cx('icon-play-pause')}
                ref={playPauseRef}
                // onClick={handlePlayPause}
            >
                {isPlay ? (
                    <PauseIcon className={cx('icon-feature')}></PauseIcon>
                ) : (
                    <PlayIcon className={cx('icon-feature')}> </PlayIcon>
                )}
            </div>
            <div
                className={cx('icon-volumn')}
                ref={volumnRef}
                // onClick={handleVolumn}
            >
                {isVolumn ? (
                    <NoVolumnIcon className={cx('icon-feature')}></NoVolumnIcon>
                ) : (
                    <VolumnIcon className={cx('icon-feature')}></VolumnIcon>
                )}
            </div> */}
        </div>
    );
};

export default Video;

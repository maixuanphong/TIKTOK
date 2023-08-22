import classNames from 'classnames/bind';
import styles from './UploadContent.module.scss';
import { CloundIcon } from '../icon';
const cx = classNames.bind(styles);
function UploadContent() {
    return (
        <div className={cx('wrapper')}>
            <CloundIcon className={cx('icon')}></CloundIcon>
            <h3 className={cx('heading')}>Select video to upload</h3>
            <div className={cx('description-wrap')}>
                <p className={cx('description')}>Drag and drop files</p>
                <p className={cx('description')}>
                    Long videos can be split into multiple parts to get more
                    exposure
                </p>
            </div>
            <div className={cx('specification-wrap')}>
                <p className={cx('specification')}>
                    Support mp4, avi, webm, and mov video formats
                </p>
                <p className={cx('specification')}>Up to 10 minutes</p>
                <p className={cx('specification')}>Less than 2 GB</p>
                <p className={cx('specification')}>Less than 30 videos</p>
                <p className={cx('specification')}>
                    Support uploading multiple videos
                </p>
            </div>
            <div className={cx('select')}>
                <input
                    type="file"
                    className={cx('select-input')}
                    id="customFileInput"
                />
                <label className={cx('select-label')} for="customFileInput">
                    Select files
                </label>
            </div>
        </div>
    );
}

export default UploadContent;

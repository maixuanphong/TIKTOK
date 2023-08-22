import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
import UploadContent from '~/Components/UploadContent/UploadContent';
const cx = classNames.bind(styles);
function Upload() {
    return (
        <div className={cx('wrapper')}>
            <UploadContent></UploadContent>
        </div>
    );
}

export default Upload;

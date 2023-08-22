import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import Button from '~/Components/Button';
import styles from './Video.module.scss';
import Image from '~/Components/image/image';
import Tippy from '@tippyjs/react/headless';
import PopperWrapper from '~/Components/Popper/Wrapper';
import AcountPreviewContent from './AcountPreViewContent/AcountPreviewContent';
const cx = classNames.bind(styles);

function Header({ data }) {
    const renderPreview = (data) => {
        return (
            <Link to={`/@${data.user.nickname}`}>
                <PopperWrapper>
                    <AcountPreviewContent data={data}></AcountPreviewContent>
                </PopperWrapper>
            </Link>
        );
    };
    return (
        <div className={cx('header')}>
            <Tippy
                offset={[-14]}
                interactive
                delay={[800, 0]}
                placement="bottom-start"
                render={() => renderPreview(data)}
            >
                <Link to={`/@${data.user.nickname}`}>
                    <Image src={data.user.avatar} className={cx('avata')} />
                </Link>
            </Tippy>
            <div className={cx('infor')}>
                <Link to={`/@${data.user.nickname}`} className={cx('name')}>
                    <p className={cx('user-name')}>{data.user.nickname}</p>
                    <span
                        className={cx('full-name')}
                    >{`${data.user.first_name} ${data.user.last_name}`}</span>
                </Link>
                <span className={cx('cap')}>{data.description}</span>
                {data.music.trim() && (
                    <div className={cx('music')}>
                        <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
                        <span className={cx('name-music')}>{data.music}</span>
                    </div>
                )}
            </div>
            <div className="follow">
                <Button outline small className={cx('follow-btn')}>
                    Follow
                </Button>
            </div>
        </div>
    );
}

export default Header;

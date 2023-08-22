import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import Image from '../image/image';
import styles from './SuggestedAcounts.module.scss';
import { Wrapper as PopperWrapper } from '../Popper';
import AcountPreview from './AcountPreview/AcountPreview';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function AcountItems({ data }) {
    // sử dụng useContext để lấy dữ liệu từ cha

    const renderPreview = (data) => {
        return (
            <PopperWrapper>
                <AcountPreview data={data}></AcountPreview>
            </PopperWrapper>
        );
    };
    return (
        <div>
            <HeadlessTippy
                offset={[-14]}
                interactive
                delay={[800, 0]}
                placement="bottom-start"
                render={() => renderPreview(data)}
            >
                <Link to={`/@${data.nickname}`} className={cx('acount-item')}>
                    <Image
                        className={cx('avata')}
                        alt={data.nickname}
                        src={data.avatar}
                    />
                    <div className={cx('item-infor')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && (
                                <FontAwesomeIcon
                                    className={cx('icon')}
                                    icon={faCheckCircle}
                                ></FontAwesomeIcon>
                            )}
                        </p>
                        <p className={cx('name')}>
                            {`${data.first_name} ${data.last_name}`}
                        </p>
                    </div>
                </Link>
            </HeadlessTippy>
        </div>
    );
}

AcountItems.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AcountItems;

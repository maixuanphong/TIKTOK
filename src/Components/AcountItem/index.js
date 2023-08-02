import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../image';
const cx = classNames.bind(styles);
function AcountItem({ data }) {
    return (
        <Link to={`/:${data.nickname}`} className={cx('wrapper')}>
            <Image
                src={data.avatar}
                alt={data.full_name}
                className={cx('avata')}
            />
            <div className={cx('infor')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        ></FontAwesomeIcon>
                    )}
                </p>
                <span className={cx('usename')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AcountItem;

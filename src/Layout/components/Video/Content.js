import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Video.module.scss';
import { Link } from 'react-router-dom';
import { CommentsIcon, FavoriteIcon, ShareIcon } from '~/Components/icon';
import Header from './header';
import Video from './Video';
const cx = classNames.bind(styles);

function Content({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Header data={data}></Header>
            <div className={cx('content')}>
                <Video data={data}></Video>
                <div className={cx('feature')}>
                    <div className={cx('feature-item')}>
                        <div className={cx('icon')}>
                            <FavoriteIcon></FavoriteIcon>
                        </div>
                        <span className={cx('feature-quantity')}>
                            {data.likes_count}
                        </span>
                    </div>
                    <Link className={cx('feature-item')}>
                        <div className={cx('icon')}>
                            <CommentsIcon></CommentsIcon>
                        </div>
                        <span className={cx('feature-quantity')}>
                            {data.comments_count}
                        </span>
                    </Link>
                    <div className={cx('feature-item')}>
                        <div className={cx('icon')}>
                            <ShareIcon></ShareIcon>
                        </div>
                        <span className={cx('feature-quantity')}>
                            {data.shares_count}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

Content.propsTypes = {
    data: PropTypes.object.isRequired,
};

export default Content;

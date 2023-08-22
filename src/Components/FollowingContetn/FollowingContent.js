import classNames from 'classnames/bind';
import styles from './FollowingContent.module.scss';
import PropTypes from 'prop-types';
import Follower from './Follower/Follower';
const cx = classNames.bind(styles);

function FollowingContent({ users }) {
    return (
        <div className={cx('wrapper')}>
            {users.map((user, index) => {
                return <Follower user={user} key={index}></Follower>;
            })}
        </div>
    );
}

FollowingContent.propTypes = {
    users: PropTypes.array.isRequired,
};

export default FollowingContent;

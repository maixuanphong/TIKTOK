import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from '~/Layout/components/Sidebar/Menu';
import config from '~/config';
import {
    HomeIcon,
    LiveIcon,
    UserGroupIcon,
    HomeIconActive,
    UserGroupIconActive,
    LiveIconActive,
} from '~/Components/icon';
import SuggestAcounts from '~/Components/SuggestedAcounts/SuggestedAcounts';
import Button from '~/Components/Button/Button';
import { DisCover } from './Discover';
import Footer from './Footer/Footer';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu className={cx('menu')}>
                <MenuItem
                    to={config.routes.home}
                    icon={<HomeIcon></HomeIcon>}
                    activeIcon={<HomeIconActive></HomeIconActive>}
                    title="For Your"
                ></MenuItem>
                <MenuItem
                    to={config.routes.following}
                    icon={<UserGroupIcon></UserGroupIcon>}
                    activeIcon={<UserGroupIconActive></UserGroupIconActive>}
                    title="Following"
                ></MenuItem>
                <MenuItem
                    to={config.routes.live}
                    icon={<LiveIcon></LiveIcon>}
                    activeIcon={<LiveIconActive></LiveIconActive>}
                    title="LIVE"
                ></MenuItem>
            </Menu>
            <div className={cx('login')}>
                <p className={cx('title-login')}>
                    Log in to follow creators, like videos, and view comments.
                </p>
                <Button className={cx('btn-login')} outline>
                    Login
                </Button>
            </div>
            <SuggestAcounts label="Suggested accounts"></SuggestAcounts>
            <DisCover></DisCover>
            {/* <SuggestAcounts label="Following accounts"></SuggestAcounts> */}
            <Footer></Footer>
        </aside>
    );
}

export default Sidebar;

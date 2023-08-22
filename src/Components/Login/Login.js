import OverLay from '../OverLay/OverLay';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Login.module.scss';
import {
    CloseIcon,
    QrIcon,
    GoogleIcon,
    FaceBookIcon,
    TwitterIcon,
    LineIcon,
    UserIcon,
} from '../icon';
const cx = classNames.bind(styles);

function Login() {
    const [isLogin, setIsLogin] = useState(true);

    if (isLogin) {
        return (
            <OverLay>
                <div className={cx('wrapper')}>
                    <div className={cx('header')}>
                        <div
                            className={cx('icon-wrap')}
                            onClick={() => {
                                setIsLogin(false);
                            }}
                        >
                            <CloseIcon className={cx('icon-close')}></CloseIcon>
                        </div>
                        <h3 className={cx('heading')}>Log in to TikTok</h3>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('login-method')}>
                            <QrIcon className={cx('icon')}></QrIcon>
                            <p className={cx('desc')}>Use QR Code</p>
                        </div>
                        <div className={cx('login-method')}>
                            <UserIcon className={cx('icon')}></UserIcon>
                            <p className={cx('desc')}>
                                Use phone / email / username
                            </p>
                        </div>
                        <div className={cx('login-method')}>
                            <FaceBookIcon className={cx('icon')}></FaceBookIcon>
                            <p className={cx('desc')}>Continue with Facebook</p>
                        </div>
                        <div className={cx('login-method')}>
                            <GoogleIcon className={cx('icon')}></GoogleIcon>
                            <p className={cx('desc')}>Continue with Google</p>
                        </div>
                        <div className={cx('login-method')}>
                            <TwitterIcon className={cx('icon')}></TwitterIcon>
                            <p className={cx('desc')}>Continue with Twitter</p>
                        </div>
                        <div className={cx('login-method')}>
                            <LineIcon className={cx('icon')}></LineIcon>
                            <p className={cx('desc')}>Continue with LINE</p>
                        </div>
                    </div>
                    <footer className={cx('footer')}>
                        <span className={cx('title')}>
                            Already have an account?
                        </span>
                        <p className={cx('sing-up')}>Sing up</p>
                    </footer>
                </div>
            </OverLay>
        );
    } else {
        return;
    }
}

export default Login;

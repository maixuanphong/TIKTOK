import { useState, useLayoutEffect } from 'react';
import classNames from 'classnames/bind';
import * as userService from '~/services/userService';
import styles from './Following.module.scss';
import FollowingContent from '~/Components/FollowingContetn/FollowingContent';
const cx = classNames.bind(styles);

function Following() {
    const [users, setUsers] = useState([]);
    const page = 1;
    const perPage = 20;
    console.log(users);
    useLayoutEffect(() => {
        const fetchApi = async () => {
            const res = await userService.getSuggested(page, perPage);
            setUsers(res);
        };
        fetchApi();
    }, [page]);

    return (
        <div className={cx('wrapper')}>
            <FollowingContent users={users}></FollowingContent>
        </div>
    );
}

export default Following;

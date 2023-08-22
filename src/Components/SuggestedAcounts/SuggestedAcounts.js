import { useState, createContext, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SuggestedAcounts.module.scss';
import PropTypes from 'prop-types';
import AcountItem from './AcountItem';
import * as userServices from '~/services/userService';
const cx = classNames.bind(styles);
export const PropsContext = createContext();
function SuggestAcounts({ label }) {
    const initPage = 1;
    const initPerPage = 5;
    const [listResult, setListResult] = useState([]);
    const [isMore, setIsMore] = useState(true);
    const [page, setPage] = useState(initPage);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await userServices.getSuggested(page, initPerPage);
            setListResult((prevUser) => [...prevUser, ...res]);
            // use when have btn less function , change dependence to isMore
            // setListResult(res)
        };
        fetchApi();
    }, [page]);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {listResult.map((result, index) => {
                return <AcountItem data={result} key={index}></AcountItem>;
            })}

            <p
                className={cx('more-btn')}
                onClick={() => {
                    // use when have btn less function
                    // setIsMore(!isMore);
                    // if (isMore) {
                    //     setPerPage(10);
                    // } else {
                    //     setPerPage(5);
                    // }

                    setPage(page + 1);
                }}
            >
                {isMore ? 'See all' : 'See less'}
            </p>
        </div>
    );
}

SuggestAcounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestAcounts;

import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useDebounce } from '~/hooks';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import AcountItem from '~/Components/AcountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import * as searchService from '~/services/searchServices';

const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const refInput = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setLoading(true);
            const result = await searchService.search(debouncedValue);
            setSearchResult(result);

            setLoading(false);
        };
        fetchAPI();
    }, [debouncedValue]);

    //handle clear
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        refInput.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    // handleChange
    const handleChange = (e) => {
        if (!e.target.value.startsWith(' ')) {
            setSearchValue(e.target.value);
        }

        // if (e.target.value.startsWith(' ') || !searchValue.trim()) {
        //     return;
        // }
    };

    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Acounts</h4>
                            {searchResult.map((result) => {
                                return (
                                    <AcountItem
                                        key={result.id}
                                        data={result}
                                    ></AcountItem>
                                );
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        placeholder="Search accounts and videos "
                        spellCheck={false}
                        className={cx('input')}
                        value={searchValue}
                        ref={refInput}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                            ></FontAwesomeIcon>
                        </button>
                    )}

                    {loading && (
                        <FontAwesomeIcon
                            icon={faSpinner}
                            className={cx('loading')}
                        ></FontAwesomeIcon>
                    )}

                    <button
                        className={cx('search-btn')}
                        onMouseDown={handleSubmit}
                    >
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                        ></FontAwesomeIcon>
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;

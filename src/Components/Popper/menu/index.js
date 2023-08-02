import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './menu.module.scss';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import Header from './Header';
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prevState) => [
                                ...prevState,
                                item.children,
                            ]);
                        } else {
                            onChange(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };
    return (
        <Tippy
            offset={[12, 16]}
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => {
                                        prev.splice(prev.length - 1, 1);
                                        return prev;
                                    });
                                }}
                            ></Header>
                        )}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((preState) => preState.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;

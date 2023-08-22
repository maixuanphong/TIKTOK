import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Content from '~/Layout/components/Video/Content';
import styles from './Home.module.scss';
import * as VideoServices from '~/services/VideoServices';
const cx = classNames.bind(styles);
function Home() {
    const [listVideo, setListVideo] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fetchApi = async () => {
            const res = await VideoServices.getVideos('for-you', page);
            setListVideo((preRes) => [...preRes, ...res]);
        };
        fetchApi();
    }, [page]);

    // handle when scroll the end
    window.addEventListener('scroll', function () {
        // Kiểm tra nếu con trỏ cuộn đến cuối trang
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setPage((prePage) => prePage + 1);
        }
    });
    return (
        <div className={cx('home')}>
            {listVideo.map((itemVideo, index) => (
                <Content key={index} data={itemVideo}></Content>
            ))}
        </div>
    );
}

export default Home;

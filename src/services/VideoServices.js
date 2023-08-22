import * as HttpRequest from '~/untils/httpRequest';

export const getVideos = async (type, page) => {
    const res = await HttpRequest.get(`videos`, {
        params: {
            type: type,
            page: page,
        },
    });
    return res.data;
};

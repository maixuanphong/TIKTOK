import * as HttpRequest from '~/untils/httpRequest';

export const getSuggested = async (page = 1, per_page = 5) => {
    try {
        const res = await HttpRequest.get(`users/suggested`, {
            params: {
                page,
                per_page: per_page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getUserInfor = async (nickname) => {
    try {
        const res = await HttpRequest.get(`users/${nickname}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

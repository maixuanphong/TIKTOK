import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FrofileContent from '~/Components/FrofileContent/FrofileContent';
import * as UserServices from '~/services/userService';
function Profile() {
    const params = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchApi = async () => {
            const res = await UserServices.getUserInfor(`${params.nickname}`);
            setUser(res);
        };
        fetchApi();
    }, [params.nickname]);
    return <FrofileContent user={user}></FrofileContent>;
}

export default Profile;

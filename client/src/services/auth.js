import api from '@/services/api';

export default{
    register(info){
        return api().post('register', info);
    },
    login(cred){
        return api().post('login', cred);
    },
    // userInfo(details){
    //     return api().post('userInfo', details);
    // }
}
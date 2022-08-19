import api from '@/services/api';

export default{
    registerTourist(info){
        return api().post('registerTourist', info);
    },
    registerHotel(info){
        return api().post('registerHotel', info);
    },
    login(cred){
        return api().post('login', cred);
    },
}
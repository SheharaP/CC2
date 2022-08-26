import api from '@/services/api';

export default{
    registerTourist(info){
        return api().post('registerTourist', info);
    },
    login(cred){
        return api().post('login', cred);
    },
    showPromo(x){
        return api().post('showPromo', x);
    },
    book(y){
        return api().post('book', y);
    }
}
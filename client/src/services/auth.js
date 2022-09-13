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
    loginRole(cred){
        return api().post('loginRole', cred);
    },
    findUser(val){
        return api().post('findUser', val);
    },
    firebaseAuth(key){
        return api().post('firebaseAuth', key);
    },
    
    showPromo(x){
        return api().post('showPromo', x);
    },
    book(y){
        return api().post('book', y);
    },
    gethotels(){
        return api().get('users');
    }
}
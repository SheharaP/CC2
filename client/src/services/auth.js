import api from '@/services/api';

export default{
    registerTourist(info){
        return api().post('registerTourist', info);
    },
    registerHotel(info){
        return api().post('registerHotel', info)
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
    hotelRooms(val){
        return api().post('hotelRooms', val);
    },    
    hotelFaci(val){
        return api().post('hotelFaci', val);
    }, 
    searchHotel(value){
        return api().post('searchHotel', value);
    } , 
    showPromo(x){
        return api().post('showPromo', x, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    book(y){
        return api().post('book', y);
    },
    gethotels(){
        return api().get('users');
    }
}
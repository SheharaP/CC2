<template>
    <div>
        <div class="title">
            Enter your Details
        </div>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="hotel in hotels" :key="hotel.bookingid">
                    <td>{{hotel.fname}}</td>
                    <td>{{hotel.lname}}</td>
                    <td>{{hotel.email}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import auth from '@/services/auth'
export default {
    name: "HotelDisplay",
    data() {
        return {
            hotels:[]
        };
    },
    methods:{
        async gethotels(){
            const response = await auth.gethotels()
            console.log(response.data);
            this.hotels=response.data;
        },
    },
    beforeMount(){
        this.gethotels();
    }
}
</script>

<style>

</style>
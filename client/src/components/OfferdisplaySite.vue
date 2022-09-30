<template>
    <section class="section">
        <div class="container" data-aos="fade-up">
            <div class="section-header">
                <p>Exciting <span>Offers</span></p>
            </div>
            <div class="grid">
                <div v-for="offer in offers" :key="offer.pid">
                    <div class="grid-item">
                        <div class="part">
                            <div class="img">
                                <div><img :src="getImgUrl(offer.icon)" v-bind:alt="pic"></div>
                            </div>
                            <div class="info">
                                <h4>{{offer.p_name}}</h4>
                                <p>{{offer.para}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import auth from '@/services/auth'
export default {
    name: "OfferDisplay",
    data() {
        return {
            offers:[]
        };
    },
    methods:{
        async getoffers(){
            const response = await auth.getoffers()
            console.log(response.data);
            this.offers=response.data;
        },
        getImgUrl(img) {
            if(img != null){
            var image = require.context('../../../server/images/', false, /\.png$/)
            return image('./' + img )
            }else{
                return ""
            }
         }
    },
    beforeMount(){
        this.getoffers();
    }
}
</script>

<style>
    .section {
        padding-top: 0;
        padding-bottom: 0;
    }
    .container .grid{
        margin-bottom: 10px;
        padding-bottom: 25px;
        padding-top: 25px ;
       
    }
    
    .section .part {
        overflow: hidden;
        text-align: center;
        border-radius: 5px;
        background: #fff;
        box-shadow: 0px 0 30px rgba(55, 55, 63, 0.08);
        transition: 0.3s;
        margin: 0 15px;
    }
    .grid{
        display: grid;
        grid-template-columns: auto auto auto;
    }
    
    .section .part .img {
        position: relative;
        overflow: hidden;
        height: 300px;
        width: 300px;
    }
    
    .section .part .img:after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        height: 500px;
        width: 500px;
        background-size: contain;
        z-index: 1;
    }
    
    .section .part .info {
        padding: 10px 15px 20px 15px;
    }
    
    .section .part .info h4 {
        font-weight: 700;
        margin-bottom: 5px;
        font-size: 20px;
        color: var(--color-secondary);
    }
    
    .section .part .info p {
        font-style: italic;
        font-size: 14px;
        padding-top: 15px;
        line-height: 26px;
        color: rgba(33, 37, 41, 0.7);
    }
    
    .section .part:hover {
        transform: scale(1.08);
        box-shadow: 0px 0 30px rgba(55, 55, 63, 0.15);
    }
</style>
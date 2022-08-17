<template>
    <div class="container-offer-form col-lg-12 bg-white shadow p-4 rounded">
        <div class="title">
            Upload Your Promotions
        </div>
        <form>
            <div class="form" id="promotion-form">
                <div class="input_field">
                    <label><i class="bi bi-displayport"></i>Promotion name:</label><br>
                    <input type="text" class="pName" placeholder="Give a Title to your Promotion" id="P-Name" required>
                </div>
                <div class="input_field">
                    <label><i class="bi bi-card-list"></i>Description on Promotion:</label><br/>
                    <textarea class="description" placeholder="Brief description on your promotion" id="description" required></textarea>
                </div>
                <div class="input_field">
                    <label><i class="bi bi-calendar2"></i>Promotion Starting Date:</label><br/>
                    <input type="date" v-model="sDate" class="sDate" id="S-Date" required>
                </div>
                <div class="input_field">
                    <label><i class="bi bi-calendar2-check"></i>Promotion Ending Date:</label><br/>
                    <input type="date" v-model="eDate" class="eDate" id="E-Date" required>
                </div>
                <div class="input_field">
                    <label><i class="bi bi-currency-dollar"></i>Price:</label><br/>
                    <input type="text" v-model="price" class="price" placeholder="Enter the Cost in USD" id="Price" required>
                </div>
                <div class="input_field">
                    <label><i class="bi bi-card-list"></i>What's Included:</label><br/>
                    <textarea  class="list" placeholder="List us what are included in your promotion" id="List" required></textarea>
                </div>
                <div class="input_field">
                    <label><i class="bi bi-card-image"></i>Upload a picture of Promotion:</label><br/>
                    <div class="image">
                        <input type="file" id="image_input" accept="image/png, image/jpg, image/jpeg"> 
                    </div>   
                </div>
                <div class="col-lg-1">
                    <button type="submit" class="btn text-white shadow none" @click.prevent="showPromo">Upload </button>
                </div>
            </div>
        </form>
        

    </div>
</template>

<script>
import auth from '@/services/auth'


export default {
  name: "OffersView",
  data() {
    return {
      pName: "",
      description:"",
      sDate: "",
      eDate: "",
      price: "",
      list:"",
    };
  },
  methods: {
        async showPromo() {
          console.log("works");
          event.preventDefault();
          const response = await auth.showPromo({
            pName: this.pName,
            description: this.description,
            sDate: this.sDate,
            eDate: this.eDate,
            price: this.price,
            list: this.list,
          })
           console.log(response.data);
    },

  },
};

        
</script>


<style>
:root {
  --font-default: "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-primary: "Amatic SC", sans-serif;
  --font-secondary: "Inter", sans-serif;
}

/* Colors */
:root {
  --color-default: #212529;
  --color-primary: #6012CE;
  --color-secondary: #37373f;
}

/* Smooth scroll behavior */
:root {
  scroll-behavior: smooth;
}
.container-offer-form{
    background-color:white;
    border-radius: 15px;
    max-width: 700px;
    width: 100%;
    height: 850px;
    margin: 30px auto;
    box-shadow: 1px 1px 2px rgba(0,0,0,0,0.125);
    font-family: var(--font-default);
    box-shadow: #212529;
}
.container-offer-form .title{
    font-size: 24px;
    font-weight: 700px;
    margin-bottom: 25px;
    text-align: left;
}
.container-offer-form .form{
    width:100%;
}
.container-offer-form .form input ,textarea{
    width: 100%;
    border-radius: 5px;
    margin: 10px;
}
.container-offer-form .form i{
    margin: 5px;
    font-size: 20px;
}

.container-offer-form .form .input_field label{
    width: 350px;
    margin-right:15px ;
}
.input_field .image{
    margin: 5px;
}
.btn{
    background: var(--color-primary);
    box-shadow: 0 8px 28px rgba(73, 46, 101, 0.2);
    margin-bottom: 80px;
}
.btn:hover {
  background: rgba(73, 46, 101, 0.8);
  box-shadow: 0 8px 28px rgba(73, 46, 101, 0.45);
}
</style>
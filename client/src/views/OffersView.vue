<template>
    <div class="container-offer-form col-lg-12 bg-white shadow p-4 rounded">
        <div class="title">
            Upload Your Promotions
        </div>
        <form>
            <div class="form" id="promotion-form">
                <div class="input_field">
                    <label><i class="bi bi-displayport"></i>Promotion name:</label><br>
                    <input type="text" v-model="pName" class="form-control shadow-none" placeholder="Give a Title to your Promotion" id="P-Name" required>
                </div>
                <div class="input_field">
                    <label><i class="bi bi-card-list"></i>Description on Promotion:</label><br/>
                    <input type="text" v-model="desc" class="form-control shadow-none" placeholder="Brief description on your promotion with 25-30 words" id="description" required>
                </div>
                <div class="input_field">
                    <label><i class="bi bi-calendar2"></i>Promotion Starting Date:</label><br/>
                    <input type="date" v-model="sDate" class="form-control shadow-none"  id="S-Date" required>
                </div>
                <div class="input_field">
                    <label><i class="bi bi-calendar2-check"></i>Promotion Ending Date:</label><br/>
                    <input type="date" v-model="eDate" class="form-control shadow-none" id="E-Date" required>
                </div>
                <div class="input_field">
                    <label><i class="bi bi-currency-dollar"></i>Price:</label><br/>
                    <input type="number" v-model="price" class="form-control shadow-none"  placeholder="Enter the Cost in USD" id="Price" required>
                </div>
                <div class="input_field">
                    <label><i class="bi bi-card-list"></i>What's Included:</label><br/>
                    <input type="text" v-model="feature" class="form-control shadow-none" placeholder="List us what are included in your promotion" id="List" required>
                </div>
                <!--<div class="input_field">
                    <label><i class="bi bi-card-image"></i>Upload a picture of Promotion:</label><br/>
                    <div class="imagePreviewWrapper" :style="{'background-image': `url(${previewImage})`}">
                        <i class="bi bi-cloud-upload" @click="selectImage" v-if="icon"></i>
                    </div>
                    <input type="file" id="image_input" accept="image/png, image/jpg, image/jpeg" @input="pickFile" ref="fileInput" >
                    <input type="file" @change="onFileSelected">
                </div>-->
                <div class="col-lg-3">
                    <button type="submit" class="btn text-white shadow none" @click.prevent="showPromo">Upload </button>
                    <button type="reset" class="btn text-white shadow none" @click.prevent="reset">Reset </button>
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
        previewImage: null,
        startDate: null,
        endDate:null,
        errors:[],
        pName: "",
        desc:"",
        sDate: "",
        eDate: "",
        price: "",
        feature:"",
        selectedFile:null
        //icon:true

    };
  },
  methods: {
        async showPromo() {
            if (this.pName && this.desc && this.sDate && this.eDate && this.price && this.feature){
                alert("Your promotion has been uploaded for verification!");
                event.preventDefault();
                const response = await auth.showPromo({
                    pName: this.pName,
                    desc: this.desc,
                    sDate: this.sDate,
                    eDate: this.eDate,
                    price: this.price,
                    feature: this.feature
                })
                console.log(response.data);
            }
            this.errors =[];
            if (!this.pName){
                alert("Promotion name is Required");
            }
            if (!this.desc){
                alert("Promotion Description is Required");
            }
            if (!this.sDate){
                alert("Starting Date of the promotion is required")
            }
            if (!this.eDate){
                alert("Endning Date of the promotion required")
            }
            if (!this.price){
                alert("Price of the promotion is required")
            }
            if (!this.feature){
                alert("Features that are included in the promotion is required")
            }
            console.warn("errors",this.errors)
        },
        async reset(){
            this.pName = "";
            this.desc = "";
            this.sDate = "";
            this.eDate = "";
            this.price = "";
            this.feature = "";
            //this.icon=true;
            //this.previewImage=null;
        },
        
        /*async selectImage (){
            this.$refs.fileInput.click()
        },
        async pickFile (){
            let input = this.$refs.fileInput
            let file = input.files
            if (file && file[0]) {
                let reader = new FileReader
                reader.onload = e => {
                this.previewImage = e.target.result
                }
                reader.readAsDataURL(file[0])
                this.$emit('input', file[0])
                this.icon=false;
            }
        }*/
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
    height: 100%;
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
.container-offer-form .form input{
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
.imagePreviewWrapper{
    width: 100%;
    height: 400px;
    border-style:dashed;
    border-color: #99969d;
    margin: 0 auto 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    background-size: cover;
}
.input_field .imagePreviewWrapper i{
    cursor: pointer;
    display: flex;
    font-size: 100px;
    color: #99969d;
}
.btn{
    background: var(--color-primary);
    box-shadow: 0 8px 28px rgba(73, 46, 101, 0.2);
    margin-left: 5px;
}
.btn:hover {
  background: rgba(73, 46, 101, 0.8);
  box-shadow: 0 8px 28px rgba(73, 46, 101, 0.45);
}
</style>
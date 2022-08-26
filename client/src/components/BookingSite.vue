<template>
    <div class="container-book-form col-lg-12 bg-white shadow p-4 rounded">
        <div class="title">
            Enter your Details
        </div>
        <form>
            <div class="input_field">
                <label>First Name:</label><span class="req">*</span><br/>
                <input type="text" class="form-control shadow-none" placeholder="Enter your first name" id="fname" v-model="fname" required>
            </div>
            <div class="input_field">
                <label>Last Name:</label><span class="req">*</span><br/>
                <input type="text" class="form-control shadow-none" placeholder="Enter your last name" id="lname" v-model="lname" required>
            </div>
            <div class="input_field">
                <label>Email:</label><span class="req">*</span><br/>
                <input type="text" class="form-control shadow-none" placeholder="Enter your email address" id="email" v-model="email" required>
            </div>
            <div class="input_field">
                <label>Check-In Date:</label><br/>
                <input type="date" class="form-control shadow-none"  id="inDate" v-model="indate" required>
            </div>
            <div class="input_field">
                <label>Check-out Date:</label><br/>
                <input type="date" class="form-control shadow-none" id="outDate" v-model="outdate" required>
            </div>
            <div class="input_field">
                <label class="form-label">No of Adults:</label>
                <input type="number" class="form-control shadow-none" id="adult" v-model="adult">
            </div>
            <div class="input_field">
                <label class="form-label">No of Children:</label>
                <input type="number" class="form-control shadow-none" id="children" v-model="children">
            </div>
                
            <div class="input_field">
                <label>Special Request:</label><br/>
                <input class="form-control shadow-none" placeholder="Special requests cannot be guaranteed"  style="width: 100%; height: 150px;" id="sreq" v-model="sreq" >
            </div>
            <div class="input_field">
                <label>Your time of Arrival:</label><br/>
                <input type="time" class="form-control shadow-none" id="time" v-model="atime">
            </div>
            <div class="submit">
                <button type="submit" class="btn text-white shadow none" @click.prevent="book">Book</button>
            </div>
        </form>
    </div>
</template>
<script>
import auth from '@/services/auth'
export default {
    name: "BookingView",
    data() {
        return {
            errors:[],
            fname:"",
            lname:"",
            email:"",
            indate:"",
            outdate:"",
            adult:"",
            children:"",
            sreq:"",
            atime:"",

        };
    },
    methods:{
        async book(){
            if((this.fname && this.lname && this.email && this.indate && this.outdate) && (this.adult|| this.children) || this.sreq || this.atime){
                alert("Your Booking has been updated");
                event.preventDefault();
                const response = await auth.book({
                    fname:this.fname,
                    lname:this.lname,
                    email:this.email,
                    indate:this.indate,
                    outdate:this.outdate,
                    adult:this.adult,
                    children:this.children,
                    sreq:this.sreq,
                    atime:this.atime
                })
                console.log(response.data);
            }
            this.errors =[];
            if (!this.fname){
                alert("First name is required");
            }
            if (!this.lname){
                alert("Last name is required");
            }
            if (!this.email){
                alert("e-mail is required")
            }
            if (!this.indate){
                alert("Check-in date is required")
            }
            if (!this.outdate){
                alert("Check-out date is required")
            }
            if (!this.adult && !this.children){
                alert("Number of abult or children is reqired")
            }
            console.warn("errors",this.errors)
        },
    }
}
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
.container-book-form{
    background-color:white;
    border-radius: 15px;
    max-width: 700px;
    width: 100%;
    height: auto;
    margin: 30px auto;
    box-shadow: 1px 1px 2px rgba(0,0,0,0,0.125);
    font-family: var(--font-default);
    box-shadow: #212529;
}
.container-book-form .title{
    font-size: 24px;
    font-weight: 700px;
    margin-bottom: 25px;
    text-align: left;
}
.container-book-form form input textarea{
    width:100%;
    border-radius: 5px;
    margin: 5px;
}
.container-book-form form textarea{
    height: 150px;
    margin-left: 2px;
}
.container-book-form form .input_field label{
    width: auto;
    margin-right:15px ;
    margin-top: 5px;
    margin-bottom: 10px;
}
.input_field .req{
    color: red;
    padding-left:0;
}
.container-book-form form .input_field .radio-option{
    display: block;
    position: relative;
    margin: 8px;
}
.container-book-form form .input_field .radio-option label{
    padding-left: 10px;
    margin-top: 0;
}

.submit .btn{
    margin: 15px;
    padding: 0;
    width: 50px;
    height: 30px;
}
.btn{
    background: var(--color-primary);
    box-shadow: 0 8px 28px rgba(73, 46, 101, 0.2);
}
.btn:hover {
  background: rgba(73, 46, 101, 0.8);
  box-shadow: 0 8px 28px rgba(73, 46, 101, 0.45);
}
</style>
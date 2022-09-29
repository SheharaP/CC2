<template>
  <div class="container-book-form col-lg-12 bg-white shadow p-4 rounded">
    <div class="title">
      Enter your Details
    </div>
    <form>
      <div class="input_field">
        <label>Name</label><span class="req">*</span><br />
        <input type="text" class="form-control shadow-none" placeholder="Enter your full name" id="fname"
          v-model="userName" required>
      </div>

      <div class="input_field">
        <label>Email Address</label><span class="req">*</span><br />
        <input type="text" class="form-control shadow-none" placeholder="Enter your email address" id="email"
          v-model="email" required>
      </div>
      <div class="input_field">
        <label>Check-In Date</label><br />
        <input type="date" class="form-control shadow-none" id="inDate" v-model="indate" required>
      </div>
      <div class="input_field">
        <label>Check-out Date</label><br />
        <input type="date" class="form-control shadow-none" id="outDate" v-model="outdate" required>
      </div>
      <div class="input_field" id="rooms">
        <fieldset >
          <label class="form-label">Select Rooms</label>
          <p v-for="(room, index) in rooms" :key="room.id">
            <label>{{room.name}}</label>
            <label>(LKR {{room.price}})</label>
            <input type="number" v-model="rnumber[index]" name="roomNo" min="1" max="10">
          </p>
        </fieldset>
      </div>
      <div class="input_field">
        <label class="form-label">Number of Adults</label>
        <input type="number" class="form-control shadow-none" id="adult" v-model="adult">
      </div>
      <div class="input_field">
        <label class="form-label">Number of Children:</label>
        <input type="number" class="form-control shadow-none" id="children" v-model="children">
      </div>

      <div class="input_field">
        <label>Special Request:</label><br />
        <input class="form-control shadow-none" placeholder="Special requests cannot be guaranteed"
          style="width: 100%; height: 150px;" id="sreq" v-model="sreq">
      </div>
      <div class="input_field">
        <label>Your time of Arrival:</label><br />
        <input type="time" class="form-control shadow-none" id="time" v-model="atime">
      </div>
      <div class="input_field">
        <label>Total</label><br />
        <span>LKR <input type="number" v-model="total" disabled></span>
      </div>
      <div class="input_field">
        <button type="submit" class="btn text-white shadow" @click.prevent="book">Book</button>
      </div>
    </form>
  </div>
</template>

<script>

import auth from '@/services/auth'
import { getAuth, onAuthStateChanged } from "firebase/auth"

export default {
  name: "BookingView",
  data() {
    return {
      userName: "",
      email: "",
      contactno: null,
      address: "",
      auth: getAuth(),
      errors: [],
      indate: "",
      outdate: "",
      adult: "",
      children: "",
      sreq: "",
      atime: "",
      loggedIn: false,
      total:0,
      rooms: [
        {
          id: 0,
          name: 'Single Room',
          price: 20000,
        },
        {
          id: 1,
          name: 'Double Room',
          price: 30000,
        },
        {
          id: 2,
          name: 'Triple Room',
          price: 45000,
        },
        {
          id: 3,
          name: 'Deluxe Room',
          price: 40000,
        },
        {
          id: 4,
          name: 'Cabana',
          price: 50000,
        },
        {
          id: 5,
          name: 'Suite',
          price: 70000,
        }
      ],
      rnumber: [],
    }
  },
  methods: {

    async findUser() {

      console.log("hi from findUser");

      onAuthStateChanged(this.auth, async (user) => {

        const resp = auth.findUser({
          'email': user.email,
        });

        this.email = user.email;

        console.log(user.email);
        console.log(`This is the name ${(await resp).data} profile.`);
        this.userName = (await resp).data.name;
        this.contactno = (await resp).data.contactno;
        this.address = (await resp).data.address;

        const response = await auth.loginRole({
          'email': user.email,
        });

        console.log(`This is the name ${(response).data.role} profile.`);
        this.role = (response).data.role.toUpperCase();

      })
    },
    async book() {
      if ((this.fname && this.lname && this.email && this.indate && this.outdate) && (this.adult || this.children) || this.sreq || this.atime) {
        alert("Your Booking has been updated");
        event.preventDefault();
        const response = await auth.book({
          fname: this.fname,
          lname: this.lname,
          email: this.email,
          indate: this.indate,
          outdate: this.outdate,
          adult: this.adult,
          children: this.children,
          sreq: this.sreq,
          atime: this.atime
        })
        console.log(response.data);
      }
      this.errors = [];
      if (!this.fname) {
        alert("First name is required");
      }
      if (!this.lname) {
        alert("Last name is required");
      }
      if (!this.email) {
        alert("e-mail is required")
      }
      if (!this.indate) {
        alert("Check-in date is required")
      }
      if (!this.outdate) {
        alert("Check-out date is required")
      }
      if (!this.adult && !this.children) {
        alert("Number of abult or children is reqired")
      }
      console.warn("errors", this.errors)
    },

  },
  mounted() {

    const ref = this;
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        ref.loggedIn = true;
        const user = getAuth().currentUser;

        if (user !== null) {
          this.email = user.email;
          console.log(this.email);

          this.findUser();
        }
      } else {
        ref.loggedIn = false;
        alert("Please log in.");
        this.$router.push('/login');
      }

    });
  }

};
</script>

<style scoped>
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

.container-book-form {
  background-color: white;
  border-radius: 15px;
  max-width: 700px;
  width: 100%;
  height: auto;
  margin: 30px auto;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0, 0.125);
  font-family: var(--font-default);
  box-shadow: #212529;
}

.container-book-form .title {
  font-size: 24px;
  font-weight: 700px;
  margin-bottom: 25px;
  text-align: left;
}

.container-book-form form input textarea {
  width: 100%;
  border-radius: 5px;
  margin: 5px;
}

.container-book-form form textarea {
  height: 150px;
  margin-left: 2px;
}

.container-book-form form .input_field label {
  width: auto;
  margin-right: 15px;
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: bold;
}

.input_field {
  margin-bottom: 20px;
}

.input_field .req {
  color: red;
  padding-left: 0;
}

.container-book-form form .input_field .radio-option {
  display: block;
  position: relative;
  margin: 8px;
}

.container-book-form form .input_field .radio-option label {
  padding-left: 10px;
  margin-top: 0;
}

.btn {
  margin: 15px;
  padding: 10px 50px 10px 50px;
  background: rgba(73, 46, 101, 0.8);
  box-shadow: 0 8px 28px rgba(73, 46, 101, 0.2);
}

.btn:hover {
  background: rgba(73, 46, 101, 0.8);
  box-shadow: 0 8px 28px rgba(73, 46, 101, 0.45);
}
#rooms label {
  margin-top: 10px;
  margin-right: 50px;
  display: inline-block;
  width: 150px;
  text-align: left;
  
}
#rooms p label{
  font-weight:normal;
}
</style>
<template>

  <div class="body">
    <div class="container">
      <div class="forms">
        <div class="form register">
          <span class="title">Hotel Registration</span>

          <div class="input-field">
            <input type="text" v-model="name" placeholder="Hotel name" required />
            <i class="bi bi-person"></i>
          </div>
          <div class="input-field">
            <input type="text" v-model="email" placeholder="Hotel Email Address" required />
            <i class="bi bi-at"></i>
          </div>
          <div class="input-field">
            <input type="text" v-model="contactno" placeholder="Hotel Represententive Contact Number" required />
            <i class="bi bi-telephone"></i>
          </div>
          <div class="input-field">
            <label>Select your District</label>
            <select id="district" v-model="district" name="district" class="form-control shadow-none">
              <option value=0 placeholder="Nuwara Eliya">Nuwara Eliya</option>
              <option value=1 placeholder="Colombo">Colombo</option>
              <option value=2 placeholder="Galle">Galle</option>
              <option value=3 placeholder="Kandy">Kandy</option>
              <option value=4 placeholder="Ratnapura">Ratnapura</option>
              <option value=5 placeholder="Hambantota">Hambantota</option>
              <option value=6 placeholder="Matara">Matara</option>
              <option value=7 placeholder="Badulla">Badulla</option>
              <option value=8 placeholder="Jaffna">Jaffna</option>
              <option value=9 placeholder="Ampara">Ampara</option>
              <option value=10 placeholder="Anuradhapura	">Anuradhapura</option>
              <option value=11 placeholder="Batticaloa">Batticaloa</option>
              <option value=12 placeholder="Gampaha">Gampaha</option>
              <option value=13 placeholder="Kalutara">Kalutara</option>
              <option value=14 placeholder="Kegalle">Kegalle</option>
              <option value=15 placeholder="Kilinochchi">Kilinochchi</option>
              <option value=16 placeholder="Kurunegala">Kurunegala</option>
              <option value=17 placeholder="Mannar">Mannar</option>
              <option value=18 placeholder="Matale">Matale</option>
              <option value=19 placeholder="Monaragala">Monaragala</option>
              <option value=20 placeholder="Mullaitivu">Mullaitivu</option>
              <option value=21 placeholder="Polonnaruwa">Polonnaruwa</option>
              <option value=22 placeholder="Puttalam">Puttalam</option>
              <option value=23 placeholder="Trincomalee">Trincomalee</option>
              <option value=24 placeholder="Vavuniya">Vavuniya</option>
            </select>
          </div>
          <div class="input-field">
            <input type="text" v-model="address" placeholder="Hotel Location" required />
            <i class="bi bi-geo-alt"></i>
          </div>
          <ul>
            <li :class="{ is_valid: contains_eight_characters }">8 Characters</li>
            <li :class="{ is_valid: contains_number }">Contains Number</li>
            <li :class="{ is_valid: contains_uppercase }">Contains Uppercase</li>
            <li :class="{ is_valid: contains_special_character }">Contains Special Character</li>
          </ul>
          <div class="input-field">
            <input type="password" @input="checkPassword" v-model="password" autocomplete="off" placeholder="Password"
              required />
            <i class="bi bi-key"></i>
          </div>

          <div class="checkbox-text">
            <div class="checkbox-content">
              <input type="checkbox" id="logCheck">
              <label for="logCheck" class="text">Remember me</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="forms">
        <div class="form register">
          <span class="title">Rooms & Facilities</span>
          <form class="spec">
            <fieldset>
              <legend>Rooms</legend>
              <p v-for="(room, index) in rooms" :key="room.id">
                <label>{{room.name}}</label>
                <label>(LKR {{room.price}})</label>
                <input type="number" v-model="rnumber[index]" name="roomNo" min="1" max="10">
              </p>
            </fieldset> <br>
            <fieldset>
              <div class="modal-body row">
                <div class="col-md-6">
                  <legend>Facilities</legend>
                  <div class="checkbox-content" v-for="faci in facilities" :key="faci.id">
                    <input type="checkbox" v-model="selectedFaci" :value="faci.name">{{faci.name}}
                  </div>
                </div>
                <div class="col-md-6">
                  <legend>Add Images</legend>
                </div>
              </div>
            </fieldset>
          </form>
        </div>

      </div>
    </div>


  </div>

  <div class="login-signup">
    <input class="input-field-button" type="button" @click.prevent="registerHotel" value="Register"><br><br>
    <span class="text">Already a member?
      <router-link to="/login" class="text signup-link">Sign in Now</router-link>
    </span>
  </div>

</template>

<script>

import auth from '@/services/auth'
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import Swal from 'sweetalert2'

export default {
  name: "RegisterHotel",
  data() {
    return {
      name: "",
      district: null,
      address: "",
      email: "",
      contactno: "",
      role: "hotel",
      password: "",
      imageUrl: "",
      image: null,
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
      selectedRooms: [],
      rnumber: [],
      facilities: [
        {
          id: 1,
          name: 'Parking'
        },
        {
          id: 2,
          name: 'Free Wifi'
        },
        {
          id: 3,
          name: 'Room Service'
        },
        {
          id: 4,
          name: 'Swimming pool'
        },
        {
          id: 5,
          name: 'Daycare & Play area'
        },
        {
          id: 6,
          name: 'Exercise Facilities'
        },
        {
          id: 7,
          name: 'Tours & Excursions'
        }
      ],
      selectedFaci: [],
      isHotel: false,
      router: useRouter(),
      isSubmitting: false,
      password_length: 0,
      contains_eight_characters: false,
      contains_number: false,
      contains_uppercase: false,
      contains_special_character: false,
      valid_password: false,

    };
  },
  methods: {

    async addRooms() {

      console.log("hotelRooms");
      event.preventDefault();

      const roomNo = [];

      let rooms = [];

      console.log(this.rnumber);

      for (let i = 0; i < this.rnumber.length; i++) {

        for (let j = 0; j < this.rooms.length; j++) {

          rooms[i] = Object.values(this.rnumber)[i];

          if ((Object.keys(this.rnumber)[i]) == ((this.rooms[j]).id)) {

            if (rooms[i] != null && rooms[i] != "" && rooms[i] != 0) {

              this.selectedRooms[i] = parseInt(Object.keys(this.rnumber)[i]);
              roomNo[i] = parseInt(Object.values(this.rnumber)[i])

              break;

            }


          }

        }

      }

      let room = this.selectedRooms.filter(n => n == 0 || n);
      let no = roomNo.filter(n => n);

      console.log(room);
      console.log(no);

      console.log(room.length);

      if (room.length > 0) {

        console.log(this.email);

        this.isHotel = true;

        const responseRoom = auth.hotelRooms({
          email: this.email,
          room: room,
          no: no
        })
        console.log(responseRoom.data);

        this.addFaci();

      }
      else {
        console.log("No rooms -> not allowed to add faci");
      }

      return this.isHotel;

    },
    async addFaci() {

      if (this.isHotel) {

        if (this.selectedFaci.length > 0) {

          console.log("hotelFacis");
          const faciid = [];
          for (let j = 0; j < this.selectedFaci.length; j++) {

            for (let i = 0; i < this.facilities.length; i++) {

              if (this.selectedFaci[j] == ((this.facilities[i]).name)) {
                faciid[j] = parseInt((this.facilities[i]).id);
                break;
              }
            }
          }

          console.log(faciid);

          const responseFaci = await auth.hotelFaci({
            email: this.email,
            faci: faciid,
            faciname: this.selectedFaci
          })
          console.log(responseFaci.data)

        }
        else {
          console.log("No facis");
        }

      }
      else {
        console.log("Not existing")
      }


    },

    async registerHotel() {

      this.addRooms();

      console.log(this.isHotel);

      if (this.isHotel == true) {

        createUserWithEmailAndPassword(getAuth(), this.email, this.password)
          .then(  // eslint-disable-next-line
            async (data) => {

              Swal.fire({
                icon: 'success',
                title: 'Successfully registered!',
                text: 'Welcome to Your Travel Lanka  Profile',
                footer: this.email
              })
              console.log("register");
              
              const response = await auth.registerHotel({
                name: this.name,
                address: this.address,
                email: this.email,
                contactno: this.contactno,
                district: this.district,
                role: this.role
              })
              console.log(response.data);

              window.location.reload();

            })
          .catch((error) => {
            console.log(error.code);
            Swal.fire({
              icon: 'error',
              title: 'Something went wrong!',
              text: 'Sorry, we could not sign you up',
              footer: error.message
            })
          }
          );
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: 'Sorry, we could not sign you up',
          footer: 'Add hotel specifications'
        })
      }


      // this.name = "",
      // this.district = "",
      // this.address = "",
      // this.email = "",
      // this.contactno = "",
      //this.router.push('/registerHotel');
    },


    checkPassword() {
      this.password_length = this.password.length;
      const format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (this.password_length > 7) {
        this.contains_eight_characters = true;
      } else {
        this.contains_eight_characters = false;
      }

      this.contains_number = /\d/.test(this.password);
      this.contains_uppercase = /[A-Z]/.test(this.password);
      this.contains_special_character = format.test(this.password);

      if (this.contains_eight_characters === true &&
        this.contains_special_character === true &&
        this.contains_uppercase === true &&
        this.contains_number === true) {
        this.valid_password = true;

      } else {
        this.valid_password = false;
      }
      return this.valid_password;
    }

    // onPickFile() {
    //   this.$refs.fileInput.click();
    // },
    // onFilePicked(event) {

    //   const files = event.target.files;
    //   let filename = files[0].name;

    //   if (filename.lastIndexOf('.') <= 0) {
    //     return alert('Please add a valid file');
    //   }

    //   const fileReader = new FileReader();
    //   fileReader.addEventListener('load', () => {
    //     this.imageUrl = fileReader.result;
    //   })
    //   fileReader.readAsDataURL(files[0]);
    //   this.image = files[0];
    // }



  },
};


</script>

<style scoped>
.body {
  margin: 100px 0 20px 0;
  display: flex;
  justify-content: center;

}

.container {

  display: inline-block;
  position: relative;
  width: 100%;
  max-width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  margin: 0 20px;
}

.container .forms {
  display: flex;
  align-items: center;
  height: auto;
  width: 200%;
  transition: height 0.2s ease;
}

.container .form {
  width: 50%;
  padding: 30px;
  background-color: #fff;
  transition: 0.18s ease;
}

.container.active .login {
  margin-left: -50%;
  opacity: 0;
  transition: margin-left 0.18s ease, opacity 0.15s ease;
}

.container .signup {
  opacity: 0;
  transition: opacity 0.09s ease;
}

.container.active .signup {
  opacity: 1;
  transition: opacity 0.2s ease;
}

.container.active .forms {
  height: 600px;
}

.container .form .title {
  position: relative;
  font-size: 27px;
  font-weight: 600;
}

.form .title::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  background-color: #4070f4;
  border-radius: 25px;
}

.form .input-field {
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 30px;
}

.input-field input {
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0 35px;
  border: none;
  outline: none;
  font-size: 16px;
  border-bottom: 2px solid #ccc;
  border-top: 2px solid transparent;
  transition: all 0.2s ease;
}

.input-field input:is(:focus, :valid) {
  border-bottom-color: #4070f4;
}

.input-field i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #4070f4;
  font-size: 23px;
  transition: all 0.2s ease;
}

.input-field input:is(:focus, :valid)~i {
  color: #4070f4;
}

.input-field i.icon {
  left: 0;
}

.input-field i.showHidePw {
  right: 0;
  cursor: pointer;
  padding: 10px;
}

.form .checkbox-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.checkbox-text .checkbox-content {
  display: flex;
  align-items: center;
}

.checkbox-content input {
  margin: 20px 8px -2px 4px;
  accent-color: #4070f4;
  font-size: 16px;
}

.form .text {
  color: #333;
  font-size: 14px;
}

.form a.text {
  color: #4070f4;
  text-decoration: none;
}

.form a:hover {
  text-decoration: underline;
}

.form .button {
  margin-top: 35px;
}

.form .button input {
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 6px;
  background-color: #4070f4;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button input:hover {
  background-color: #265df2;
}

.login-signup {
  text-align: center;
  justify-content: center;
  margin: 50px 0 100px 0;
}

.input-field-button {
  margin-top: 0;
  background-color: #4070f4;
  border-radius: 6px;
  border-width: 0;
  color: white;
  padding: 10px 200px 10px 200px;
}

.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.invalid {
  color: #212529;
  background-color: rgb(202, 144, 144);
  border-color: #c81e12;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(253, 13, 21, 0.25);
}


/* Checkmark & Strikethrough --------- */
.is_valid {
  color: rgba(136, 152, 170, 0.8);
}

.is_valid:before {
  width: 100%;
}

.spec {
  margin-top: 30px;
}

label {
  margin-top: 10px;
  margin-left: 10px;
  display: inline-block;
  width: 150px;
  text-align: left;

}
</style>

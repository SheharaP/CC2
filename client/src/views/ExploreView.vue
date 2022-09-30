<template>
    <div id="carouselCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/img/explorepic.jpg" class="d-block w-100" alt="srilankan picture">
            </div>
        </div>
    </div>
    <div class="container">
        <div class="col-lg-12 bg-white shadow p-4 rounded">
            <h4>Search Now</h4>
            <form>
                <div class="row">
                    <div class="col-lg-3">
                        <label class="form-label"><i class="bi bi-geo-alt"></i> Where are you Going?</label>
                        <select id="district" v-model="district" class="form-control shadow-none">
                            <option value="" disabled selected>Select District</option>
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
                    <div class="col-lg-1">
                        <button type="submit" @click.prevent="searchHotel" class="btn text-black bold shadow">
                            Search
                        </button> <br><br><br>
                    </div>
                </div>
                <div class="container" v-for="(n,index) in name" :key="n">
                    <div class="col-lg-12 bg-white shadow p-4 rounded">
                        <div class="row gy-4">
                            <div class="col-lg-3">
                                <h4><router-link to="/booking" class="nav-link">{{n}}</router-link></h4>
                            </div>
                            <div class="col-lg-3">
                                {{email[index]}}
                            </div>
                            <div class="col-lg-6">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <section class="section">
        <div class="container" data-aos="fade-up">
            <div class="section-header">
                <p>Most Visited Cities in <span>Sri Lanka</span></p>
            </div>
            <div class="row gy-4">
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div class="part">
                        <div class="img">
                            <img src="../assets/img/Book/city_1.jpg" class="img-fluid" alt="">
                        </div>
                        <div class="info">
                            <h4>Galle</h4>
                            <p>Galle, the fifth largest city in Sri Lanka, is an abode of temples, beautiful churches,
                                and unimaginable beauty.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div class="part">
                        <div class="img">
                            <img src="../assets/img/Book/city_2.jpg" class="img-fluid" alt="">
                        </div>
                        <div class="info">
                            <h4>Colombo</h4>
                            <p>Colombo, the capital of this country is a beautiful place and invites travelers
                                throughout the year with its tropical climate.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div class="part">
                        <div class="img">
                            <img src="../assets/img/Book/city_3.jpg" class="img-fluid" alt="">
                        </div>
                        <div class="info">
                            <h4>Nuwareliya</h4>
                            <p>Treat your eyes to greenery by visiting Nuwara Eliya. It’s a serene hill station popular
                                for its charming landscape and is an important location for tea production. It houses
                                the best golf course in Sri Lanka and is home to the stunning Hakgala Botanical Gardens.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container" data-aos="fade-up">
            <div class="section-header">
                <p>Sri Lanka's <span>Adventures</span></p>
            </div>
            <div class="row gy-4">
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div class="part">
                        <div class="img">
                            <img src="../assets/img/Book/activity_1.jpg" class="img-fluid" alt="">
                        </div>
                        <div class="info">
                            <h4>DIVING</h4>
                            <p>Surrounded by the Indian Ocean with its coral gardens, the multitude of exotic fishes,
                                and ancient wrecks Sri Lanka offers one of the best diving experiences in the world.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div class="part">
                        <div class="img">
                            <img src="../assets/img/Book/activity_2.jpg" class="img-fluid" alt="">
                        </div>
                        <div class="info">
                            <h4>TREKKING AND HIKING</h4>
                            <p>With the multitude of roads winding through expanding mountains, lush green forests,
                                paddy fields, parks, and sleepy villages, Sri Lanka offers a plethora of opportunities
                                to Keen hikers and trekkers.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div class="part">
                        <div class="img">
                            <img src="../assets/img/Book/activity_3.jpg" class="img-fluid" alt="">
                        </div>
                        <div class="info">
                            <h4>ROCK CLIMBING</h4>
                            <p>Experience the thrills of crumbling rocks beneath the feet, head spinning heights and the
                                earth expanding beneath conquering the mountains of Sri Lanka.</p>
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
    name: "RegisterHotel",

    data() {
        return {
            district: null,
            selectedDist: null,
            name: [],
            email: [],
            contactno: [],
            address: [],
            toggle: false
        }
    },
    methods: {

        async searchHotel() {

            this.reset();
            
            console.log("Searching...");

            console.log(this.district);

            const respSearch = auth.searchHotel({
                'district': this.district,
            });

            const searchRes = (await respSearch).data;

            console.log(searchRes);

            console.log();

            let len = searchRes[0].len;
            console.log(len);

            for (let i = 0; i < len; i++) {

                this.selectedDist = searchRes.district;

                this.name[i] = searchRes[i].name;
                this.email[i] = searchRes[i].email;
                this.contactno[i] = searchRes[i].contactno;
                this.address[i] = searchRes[i].address;

            }
        },
        async reset() {
            this.selectedDist = null;
            this.name = [];
            this.email = [];
            this.contactno = [];
            this.address = [];
        }
    },
}
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

.nav-link{
    text-decoration: none;
    color: #6012CE;
}
.nav-link:hover{
    color: black;
}

.container {
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.form-label {
    font-family: var(--font-default);
    font-weight: 500;
    padding-top: 10px;
}

.btn {
    background: rgba(73, 46, 101, 0.8);
    box-shadow: 0 8px 28px rgba(73, 46, 101, 0.2);
    margin-top: 40px;
}

.btn:hover {
    box-shadow: 0 8px 28px rgba(73, 46, 101, 0.45); 
}

.section {
    padding-top: 0;
    padding-bottom: 0;
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

.section .part .img {
    position: relative;
    overflow: hidden;
}

.section .part .img:after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
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
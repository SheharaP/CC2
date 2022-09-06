<template>
    <div id="carouselCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/img/destination-1.jpg" class="d-block w-100" alt="Weligama Beach Surfing">
            </div>
            <div class="carousel-item">
                <img src="../assets/img/destination-2.jpg" class="d-block w-100" alt="Mirissa Whale Watching">
            </div>
            <div class="carousel-item">
                <img src="../assets/img/destination-3.jpg" class="d-block w-100" alt="Nine Arches Bridge">
            </div>
            <div class="carousel-item">
                <img src="../assets/img/destination-4.jpeg" class="d-block w-100" alt="Tradition Srilankan Food">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <div class="container">
        <div class="col-lg-12 bg-white shadow p-4 rounded">
            <h4>Search Now</h4>
            <form>
                <div class="row">
                    <div class="col-lg-3">
                        <label class="form-label"><i class="bi bi-geo-alt"></i>  Where are you Going?</label>
                        <select class="form-control shadow-none">
                            <option value="none">Select a District</option>
                            <option value="Nuwara Eliya">Nuwara Eliya</option>
                            <option value="Colombo">Colombo</option>
                            <option value="Galle">Galle</option>
                            <option value="Kandy">Kandy</option>
                            <option value="Ratnapura">Ratnapura</option>
                            <option value="Hambantota">Hambantota</option>
                            <option value="Matara">Matara</option>
                            <option value="Badulla">Badulla</option>
                            <option value="Jaffna">Jaffna</option>
                            <option value="Ampara">Ampara</option>
                            <option value="Anuradhapura	">Anuradhapura</option>
                            <option value="Batticaloa">Batticaloa</option>
                            <option value="Gampaha">Gampaha</option>
                            <option value="Kalutara">Kalutara</option>
                            <option value="Kegalle">Kegalle</option>
                            <option value="Kilinochchi">Kilinochchi</option>
                            <option value="Kurunegala">Kurunegala</option>
                            <option value="Mannar">Mannar</option>
                            <option value="Matale">Matale</option>
                            <option value="Monaragala">Monaragala</option>
                            <option value="Mullaitivu">Mullaitivu</option>
                            <option value="Polonnaruwa">Polonnaruwa</option>
                            <option value="Puttalam">Puttalam</option>
                            <option value="Trincomalee">Trincomalee</option>
                            <option value="Vavuniya">Vavuniya</option>
                        </select>
                    </div>
                    <div class="col-lg-3">
                        <label class="form-label"><i class="bi bi-calendar2"></i>  Check-in:</label>
                        <input type="date" class="form-control shadow-none">
                    </div>
                    <div class="col-lg-3">
                        <label class="form-label"><i class="bi bi-calendar2-check"></i>  Check-out:</label>
                        <input type="date" class="form-control shadow-none">
                    </div>
                    <div class="col-lg-3">
                        <label class="form-label"><i class="bi bi-person-fill"></i>  No of Adults:</label>
                        <input type="number" id="quantity" name="quantity" class="form-control shadow-none">
                    </div>
                    <div class="col-lg-3">
                        <label class="form-label"><i class="bi bi-person-fill"></i>  No of Children:</label>
                        <input type="number" id="quantity" name="quantity" class="form-control shadow-none">
                    </div>
                    <div class="col-lg-1">
                        <button type="submit" class="btn text-white shadow none"><router-link to="/hotels" class="nav-link">Search</router-link> </button>
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
                            <p>Galle, the fifth largest city in Sri Lanka, is an abode of temples, beautiful churches, and unimaginable beauty.</p>
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
                            <p>Colombo, the capital of this country is a beautiful place and invites travelers throughout the year with its tropical climate.</p>
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
                            <p>Treat your eyes to greenery by visiting Nuwara Eliya. It’s a serene hill station popular for its charming landscape and is an important location for tea production. It houses the best golf course in Sri Lanka and is home to the stunning Hakgala Botanical Gardens.</p>
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
                            <p>Surrounded by the Indian Ocean with its coral gardens, the multitude of exotic fishes, and ancient wrecks Sri Lanka offers one of the best diving experiences in the world. </p>
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
                            <p>With the multitude of roads winding through expanding mountains, lush green forests, paddy fields, parks, and sleepy villages, Sri Lanka offers a plethora of opportunities to Keen hikers and trekkers.</p>
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
                            <p>Experience the thrills of crumbling rocks beneath the feet, head spinning heights and the earth expanding beneath conquering the mountains of Sri Lanka.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</template>
  

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
.carousel-indicators {
  background-color:var(--color-primary);
  width:70%;
  position: absolute;
}
.carousel-inner {
    margin: auto;
    padding-right : 50px;
    padding-left: 50px;
    padding-top:20px;
    padding-bottom:20px;
}
.carousel-item img {
    width: 400px;
    height: 450px;
}
.container{
    padding-bottom:10px;
    margin-bottom: 20px;
}
.form-label{
    font-family: var(--font-default);
    font-weight:500;
    padding-top:10px;
}
.btn{
    background: var(--color-primary);
    box-shadow: 0 8px 28px rgba(73, 46, 101, 0.2);
    margin-top:40px; 
}
.btn:hover {
  background: rgba(73, 46, 101, 0.8);
  box-shadow: 0 8px 28px rgba(73, 46, 101, 0.45);
}
.section{
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
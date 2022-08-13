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
                <img src="../assets/img/destination-1.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Weligama Beach Surfing</h5>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/img/destination-2.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Mirissa Whale Watching</h5>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/img/destination-3.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Nine Arches Bridge</h5>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/img/destination-4.jpeg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Tradition Srilankan Food</h5>
                </div>
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
        <div class="row">
            <div class="col-lg-12 bg-white shadow p-4 rounded">
                <h4>Book Now</h4>
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
                            <button type="submit" class="btn text-white shadow none">Search </button>
                        </div>
                    </div>
                </form>
            </div> 
        </div>
    </div>
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


.carousel-inner h5 {
  font-family: var(--font-secondary);
  color: white;
  background-color:var(--color-primary);
}


.carousel-inner {
    margin: auto;
    padding-right : 50px;
    padding-left: 50px;
    padding-bottom:20px;
}
.carousel-item img {
    width: 400px;
    height: 450px;
}

.container{
    padding-bottom:20px;
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
</style>